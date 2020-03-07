import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import AddReminderForm from './AddReminderForm';
import {
  checkProps,
  testFunc,
  findByDataTest
} from '../../../Utilities';

const props = { addReminder: testFunc };

const setup = () => {
  const component = shallow(<AddReminderForm {...props} />);
  return component;
};

describe('Snapshot', () => {
  it('Should match snapshot', () => {
    const tree = renderer
      .create(<AddReminderForm {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('AddReminderForm renders correctly', () => {
  let wrapper;
  beforeEach(() => (wrapper = setup()));

  it('Should render without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should have two inputs', () => {
    const inputs = findByDataTest(wrapper, 'form-field');
    expect(inputs.length).toBe(2);
  });

  it('Should have a submit button', () => {
    const button = findByDataTest(wrapper, 'submit-button');
    expect(button).toBeTruthy();
  });
});

describe('AddReminderForm should have correct props', () => {
  it('Should not return a prop error', () => {
    const propsError = checkProps(AddReminderForm, props);
    expect(propsError).toBeUndefined();
  });
});
