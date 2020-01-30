import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component renders without errors', () => {
  it('Renders without errors', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toBe(1);
  });
});
