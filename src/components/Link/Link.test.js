import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Link from './Link';
import { findByDataTest, checkProps } from '../../../Utilities';

const props = { link: 'link', favicon: 'favicon' };

const setup = () => {
  const component = shallow(<Link {...props} />);
  return component;
};

describe('Snapshot', () => {
  const tree = renderer.create(<Link {...props} />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Link component renders correctly', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders without errors', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Renders a link button', () => {
    const link = findByDataTest(wrapper, 'link-button');
    expect(link.length).toBe(1);
  });

  it('Renders a favicon', () => {
    const favicon = findByDataTest(wrapper, 'favicon');
    expect(favicon.length).toBe(1);
  });
});

describe('Link component has correct props', () => {
  it('Should not have any prop errors', () => {
    const expectedProps = {
      link: 'link1',
      favicon: 'favicon1'
    };
    const propsError = checkProps(Link, expectedProps);
    expect(propsError).toBeUndefined();
  });
});
