import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { findByDataTest, checkProps } from '../../../Utilities';
import AddLinkForm from './AddLinkForm';

const testFunc = () => null;

const props = {
  addLink: testFunc
};

const setup = () => {
  const component = shallow(<AddLinkForm {...props} />);
  return component;
};

describe('Snapshot', () => {
  const tree = renderer.create(<AddLinkForm {...props} />).toJSON();

  expect(tree).toMatchSnapshot();
});

describe('AddLinkForm renders correctly', () => {
  let wrapper;
  beforeEach(() => (wrapper = setup()));

  it('Should render without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should render two input fields', () => {
    const fields = findByDataTest(wrapper, 'form-field');
    expect(fields.length).toBe(2);
  });

  it('Should render a submit button', () => {
    const button = findByDataTest(wrapper, 'submit-button');
    expect(button.length).toBe(1);
  });
});

describe('AddLinkForm has correct props', () => {
  const propsError = checkProps(AddLinkForm, props);
  expect(propsError).toBeUndefined();
});
