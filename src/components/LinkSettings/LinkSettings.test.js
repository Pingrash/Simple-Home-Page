import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { findByDataTest, checkProps } from '../../../Utilities';
import LinkSettings from './LinkSettings';

const testFunc = () => null;

const props = {
  toggleLinkSettings: testFunc,
  addLink: testFunc,
  links: [{ link: 'link', favicon: 'favicon', name: 'name' }],
  deleteLink: testFunc
};

const setup = () => {
  const component = shallow(<LinkSettings {...props} />);
  return component;
};

describe('Snapshot', () => {
  it('Should match snapshot', () => {
    const tree = renderer
      .create(<LinkSettings {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('LinkSettings component renders correctly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('Should render without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should render link entry form', () => {
    const field = findByDataTest(wrapper, 'entry-form');
    expect(field.length).toBe(1);
  });

  it('Should render link setting cards', () => {
    const cards = findByDataTest(wrapper, 'setting-card');
    expect(cards.length).toBe(1);
  });

  it('Should render a close button', () => {
    const button = findByDataTest(wrapper, 'close-button');
    expect(button.length).toBe(1);
  });
});

describe('LinkSettings should have correct props', () => {
  it('Should have correct props', () => {
    const propsError = checkProps(LinkSettings, props);
    expect(propsError).toBeUndefined();
  });
});
