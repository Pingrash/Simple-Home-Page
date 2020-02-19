import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {
  findByDataTest,
  checkProps,
  testFunc
} from '../../../Utilities';
import ResetSettings from './ResetSettings';

const props = {
  updateUser: testFunc,
  resetLinks: testFunc
};

const setup = () => {
  const component = shallow(<ResetSettings {...props} />);
  return component;
};

describe('Snapshot', () => {
  const tree = renderer.create(<ResetSettings {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('ResetSettings component renders correctly', () => {
  let wrapper;
  beforeEach(() => (wrapper = setup()));

  it('Should render without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should render a warning message', () => {
    const message = findByDataTest(wrapper, 'warning');
    expect(message.length).toBe(1);
  });

  it('Should render a delete button', () => {
    const button = findByDataTest(wrapper, 'reset-button');
    expect(button.length).toBe(1);
  });
});

describe('ResetSettings should have correct props', () => {
  it('Should not return a props error', () => {
    const propsError = checkProps(ResetSettings, props);
    expect(propsError).toBeUndefined();
  });
});
