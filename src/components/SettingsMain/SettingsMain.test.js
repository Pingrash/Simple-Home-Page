import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import {
  findByDataTest,
  checkProps,
  testFunc
} from '../../../Utilities';
import SettingsMain from './SettingsMain';

const props = {
  links: [{ link: 'link', favicon: 'favicon', name: 'name' }],
  addLink: testFunc,
  deleteLink: testFunc,
  shiftLinkCard: testFunc,
  toggleSettings: testFunc,
  user: 'username',
  updateUser: testFunc,
  resetLinks: testFunc
};

const setup = () => {
  const component = shallow(<SettingsMain {...props} />);
  return component;
};

describe('Snapshot', () => {
  it('Matches snapshot', () => {
    const tree = renderer
      .create(<SettingsMain {...props} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('SettingsMain renders correctly', () => {
  let wrapper;
  beforeEach(() => (wrapper = setup()));

  it('Should render without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should render a toggle button', () => {
    const button = findByDataTest(wrapper, 'toggle-button');
    expect(button.length).toBe(1);
  });

  it('Should render LinkSettings', () => {
    const component = findByDataTest(wrapper, 'link-settings');
    expect(component.length).toBe(1);
  });

  it('Should render UserSettings', () => {
    const component = findByDataTest(wrapper, 'user-settings');
    expect(component.length).toBe(1);
  });

  it('Should render ResetSettings', () => {
    const component = findByDataTest(wrapper, 'reset-settings');
    expect(component.length).toBe(1);
  });
});

describe('SettingsMain should have correct props', () => {
  it('Should not return any props errors', () => {
    const propsError = checkProps(SettingsMain, props);
    expect(propsError).toBeUndefined();
  });
});
