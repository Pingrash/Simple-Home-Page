import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {
  findByDataTest,
  checkProps,
  testFunc
} from '../../../Utilities';
import UserSettings from './UserSettings';

const props = {
  user: 'username',
  updateUser: testFunc
};

const setup = () => {
  const component = shallow(<UserSettings {...props} />);
  return component;
};

describe('Snapshot', () => {
  it('Should match snapshot', () => {
    const tree = renderer
      .create(<UserSettings {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('UserSettings renders correctly', () => {
  let wrapper;
  beforeEach(() => (wrapper = setup()));

  it('Should render without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should render a user change form', () => {
    const form = findByDataTest(wrapper, 'form');
    expect(form.length).toBe(1);
  });
});

describe('UserSettings should have correct props', () => {
  it('Should not return any prop errors', () => {
    const propsError = checkProps(UserSettings, props);
    expect(propsError).toBeUndefined();
  });
});
