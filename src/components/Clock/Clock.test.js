import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Clock from './Clock';
import { findByDataTest, checkProps } from '../../../Utilities';

const props = {
  time: '00:00:00',
  date: '00/00/0000'
};

// Snapshot check
it('renders correctly', () => {
  const tree = renderer.create(<Clock {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

const setup = () => {
  const component = shallow(<Clock {...props} />);
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
    const propsError = checkProps(Clock, props);
    expect(propsError).toBeUndefined();
  });
});
