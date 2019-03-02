import React from 'react';
import Header from './Header';
import { shallow } from 'preact-render-spy';

describe('Header Component', () => {

  test('Header renders correctly', () => {
    const context = shallow(<Header />);
    expect(context).toMatchSnapshot();
  });
});