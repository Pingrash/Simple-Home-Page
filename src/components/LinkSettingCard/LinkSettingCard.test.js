import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {
  findByDataTest,
  checkProps,
  testFunc
} from '../../../Utilities';
import LinkSettingCard from './LinkSettingCard';

const props = {
  link: {
    link: 'link1',
    favicon: 'favicon1',
    name: 'name1'
  },
  deleteLink: testFunc,
  shiftLinkCard: testFunc
};

const setup = () => {
  const component = shallow(<LinkSettingCard {...props} />);
  return component;
};

describe('LinkSettingCard renders correctly', () => {
  let wrapper;
  beforeEach(() => (wrapper = setup()));

  it('Should render without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should render a link title', () => {
    const title = findByDataTest(wrapper, 'title');
    expect(title.length).toBe(1);
  });

  it('Should render a favicon', () => {
    const favicon = findByDataTest(wrapper, 'favicon');
    expect(favicon.length).toBe(1);
  });

  it('Should render a delete button', () => {
    const button = findByDataTest(wrapper, 'delete-button');
    expect(button.length).toBe(1);
  });

  it('Should render shift buttons', () => {
    const button = findByDataTest(wrapper, 'shift-button');
    expect(button.length).toBe(2);
  });
});

describe('LinkSettingCard should have the correct props', () => {
  it('Should not have any prop errors', () => {
    const propsError = checkProps(LinkSettingCard, props);
    expect(propsError).toBeUndefined();
  });
});

describe('Snapshot', () => {
  it('Should match snapshot', () => {
    const tree = renderer
      .create(<LinkSettingCard {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
