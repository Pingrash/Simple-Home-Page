import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {
  findByDataTest,
  checkProps,
  testFunc
} from '../../../Utilities';
import ReminderGroup from './ReminderGroup';

const initialProps = {
  reminders: [
    { title: 'title1', body: 'body1' },
    { title: 'title2', body: 'body2' },
    { title: 'title3', body: 'body3' }
  ],
  addReminder: testFunc,
  deleteReminder: testFunc
};

const setup = (props = { ...initialProps }) => {
  const component = shallow(<ReminderGroup {...props} />);
  return component;
};

describe('Snapshot', () => {
  it('Should match snapshot', () => {
    const tree = renderer
      .create(<ReminderGroup {...initialProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('ReminderGroup renders correctly with reminders', () => {
  let wrapper;
  beforeEach(() => (wrapper = setup()));

  it('Should render without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should render a title', () => {
    const title = findByDataTest(wrapper, 'title');
    expect(title.length).toBe(1);
  });

  it('Should render 3 reminders', () => {
    const reminders = findByDataTest(wrapper, 'reminder');
    expect(reminders.length).toBe(3);
  });
});

describe('ReminderGroup renders correctly without reminders', () => {
  it('Should render a no reminders message', () => {
    const props = {
      reminders: [],
      addReminder: testFunc,
      deleteReminder: testFunc
    };

    const wrapper = setup(props);
    const message = findByDataTest(wrapper, 'no-reminders-msg');
    expect(message.length).toBe(1);
  });
});

describe('ReminderGroup has correct props', () => {
  it('Should not return a prop error', () => {
    const propsError = checkProps(ReminderGroup, initialProps);
    expect(propsError).toBeUndefined();
  });
});
