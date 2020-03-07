import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Reminder from './Reminder';
import {
  findByDataTest,
  checkProps,
  testFunc
} from '../../../Utilities';

const props = {
  title: 'title',
  body: 'body',
  deleteReminder: testFunc
};

const setup = () => {
  const component = shallow(<Reminder {...props} />);
  return component;
};

describe('Snapshot', () => {
  it('Should match snapshot', () => {
    const tree = renderer.create(<Reminder {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Reminder renders correctly', () => {
  let wrapper;
  beforeEach(() => (wrapper = setup()));

  it('Should render without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should render a title', () => {
    const title = findByDataTest(wrapper, 'title');
    expect(title.length).toBe(1);
  });

  it('Should render a body', () => {
    const body = findByDataTest(wrapper, 'body');
    expect(body.length).toBe(1);
  });

  it('Should render a button', () => {
    const btn = findByDataTest(wrapper, 'button');
    expect(btn.length).toBe(1);
  });
});

describe('Reminder has correct props', () => {
  it('Should not return a props error', () => {
    const propsError = checkProps(Reminder, props);
    expect(propsError).toBeUndefined();
  });
});
