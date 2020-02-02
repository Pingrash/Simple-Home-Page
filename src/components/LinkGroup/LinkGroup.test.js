import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { findByDataTest, checkProps } from '../../../Utilities';
import LinkGroup from './LinkGroup';

const setup = (props = {}) => {
  const component = shallow(<LinkGroup {...props} />);
  return component;
};

const props = {
  links: [
    { link: 'link1', favicon: 'favicon1' },
    { link: 'link2', favicon: 'favicon2' },
    { link: 'link3', favicon: 'favicon3' }
  ]
};

describe('Snapshot', () => {
  it('Should render correctly', () => {
    const tree = renderer.create(<LinkGroup {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('LinkGroup component renders correctly', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup(props);
  });

  it('Should render without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should render three links', () => {
    const links = findByDataTest(wrapper, 'link');
    expect(links.length).toBe(3);
  });
});

describe('LinkGroup component has correct props', () => {
  it('Should not have any props errors', () => {
    const expectedProps = {
      links: [
        { link: 'link1', favicon: 'favicon1' },
        { link: 'link2' }
      ]
    };

    const propsError = checkProps(LinkGroup, expectedProps);

    expect(propsError).toBeUndefined();
  });
});
