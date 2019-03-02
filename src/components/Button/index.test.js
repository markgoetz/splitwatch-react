import React from 'react';
import Button from './Button';
import { shallow } from 'preact-render-spy';

describe('Button Component', () => {
  test('renders correctly in primary', () => {
    const context = shallow(<Button isPrimary />);
    expect(context).toMatchSnapshot();
  });

  test('renders correctly when not primary', () => {
    const context = shallow(<Button />);
    expect(context).toMatchSnapshot();
  });
});