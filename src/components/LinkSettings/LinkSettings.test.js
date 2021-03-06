import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {
  findByDataTest,
  checkProps,
  testFunc
} from '../../../Utilities';
import LinkSettings from './LinkSettings';

const props = {
  addLink: testFunc,
  links: [{ link: 'link', favicon: 'favicon', name: 'name' }],
  deleteLink: testFunc,
  shiftLinkCard: testFunc
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
});

describe('LinkSettings should have correct props', () => {
  it('Should have correct props', () => {
    const propsError = checkProps(LinkSettings, props);
    expect(propsError).toBeUndefined();
  });
});
