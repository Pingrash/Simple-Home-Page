import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {
  findByDataTest,
  checkProps,
  testFunc
} from '../../../Utilities';
import SettingsButton from './SettingsButton';

const props = { toggleSettings: testFunc };

const setup = () => {
  const component = shallow(<SettingsButton {...props} />);
  return component;
};

describe('Snapshot', () => {
  it('Should match snapshot', () => {
    const tree = renderer
      .create(<SettingsButton {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SettingsButton renders correctly', () => {
  let wrapper;
  beforeEach(() => (wrapper = setup()));

  it('Should render without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should render a button', () => {
    const button = findByDataTest(wrapper, 'button');
    expect(button.length).toBe(1);
  });
});

describe('SettingsButton should have correct props', () => {
  it('Should not return a props error', () => {
    const propsError = checkProps(SettingsButton, props);
    expect(propsError).toBeUndefined();
  });
});
