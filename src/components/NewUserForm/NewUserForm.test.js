import React from 'react';
import { shallow } from 'enzyme';
import { findByDataTest, checkProps } from '../../../Utilities';
import renderer from 'react-test-renderer';
import NewUserForm from './NewUserForm';

const testFunc = () => null;

const props = {
  updateUser: testFunc
};

const setup = () => {
  const component = shallow(<NewUserForm {...props} />);
  return component;
};

describe('Snapshot', () => {
  it('Should match snapshot', () => {
    const tree = renderer.create(<NewUserForm {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('NewUserForm component renders correctly', () => {
  let wrapper;

  beforeEach(() => (wrapper = setup()));

  it('Should render without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should render a greeting message', () => {
    const greeting = findByDataTest(wrapper, 'greeting');
    expect(greeting.length).toBe(1);
  });

  it('Should render a username entry form', () => {
    const form = findByDataTest(wrapper, 'user-form');
    expect(form.length).toBe(1);
  });
});

describe('NewUserForm should have correct props', () => {
  it('Should have correct props', () => {
    const propsError = checkProps(NewUserForm, props);
    expect(propsError).toBeUndefined();
  });
});
