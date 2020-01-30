import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Clock from './Clock';
import { findByDataTest, checkProps } from '../../../Utilities';

// Snapshot check
it('renders correctly', () => {
  const tree = renderer.create(<Clock />).toJSON();
  expect(tree).toMatchSnapshot();
});

const setup = () => {
  const component = shallow(<Clock />);
  return component;
};

let wrapper;

beforeEach(() => (wrapper = setup()));

describe('Clock component renders correctly', () => {
  it('Should render without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should render three units of time', () => {
    const time = findByDataTest(wrapper, 'time');
    expect(time.length).toBe(1);
  });

  it('Should render date', () => {
    const date = findByDataTest(wrapper, 'date');
    expect(date.length).toBe(1);
  });
});

describe('Clock component has correct props', () => {
  it('Should not have any prop errors', () => {
    const expectedProps = {
      time: 'testTime',
      date: 'testDate'
    };
    const propsError = checkProps(Clock, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
