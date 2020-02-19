import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {
  findByDataTest,
  checkProps,
  testFunc
} from '../../../Utilities';
import LinkGroup from './LinkGroup';

const setup = (props = {}) => {
  const component = shallow(<LinkGroup {...props} />);
  return component;
};

const props = {
  links: [
    { link: 'link1', favicon: 'favicon1', name: 'name1' },
    { link: 'link2', favicon: 'favicon2', name: 'name2' },
    { link: 'link3', favicon: 'favicon3', name: 'name3' }
  ],
  toggleLinkSettings: testFunc
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
        { link: 'link1', favicon: 'favicon1', name: 'name1' },
        { link: 'link2', name: 'name2' }
      ],
      toggleLinkSettings: testFunc
    };

    const propsError = checkProps(LinkGroup, expectedProps);

    expect(propsError).toBeUndefined();
  });
});
