import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Greeting from './Greeting';
import { findByDataTest, checkProps } from '../../../Utilities';

// Snapshot check
describe('Greeting snapshot checks', () => {
  it('Renders correctly without props', () => {
    const tree = renderer.create(<Greeting />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders correctly with props', () => {
    const tree = renderer
      .create(<Greeting username='user' timeGreeting='morning' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

const setup = (props = {}) => {
  const component = shallow(<Greeting {...props} />);
  return component;
};

describe('Greeting component renders correctly', () => {
  it('Renders without errors', () => {
    const wrapper = setup();
    expect(wrapper.length).toBe(1);
  });

  it('Renders correct username greeting', () => {
    const props = { username: 'user' };
    const wrapper = setup(props);
    const user = findByDataTest(wrapper, 'username');
    expect(user.length).toBe(1);
  });

  it('Renders correct generic greeting (no username)', () => {
    const wrapper = setup();
    const user = findByDataTest(wrapper, 'username');
    expect(user.length).toBe(0);
  });
});

describe('Greeting component has correct props', () => {
  it('Should not have any prop errors', () => {
    const expectedProps = {
      username: 'test',
      timeGreeting: 'morning'
    };
    const propsError = checkProps(Greeting, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
