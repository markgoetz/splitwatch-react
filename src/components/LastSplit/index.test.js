import React from 'react';
import LastSplit from './LastSplit';
import { shallow } from 'preact-render-spy';

describe('LastSplit', () => {
  test('renders correctly with no splits', () => {
    const context = shallow(<LastSplit />);
    expect(context).toMatchSnapshot();
  });

  test('renders correctly with a split', () => {
    const context = shallow(<LastSplit split={300} />);
    expect(context).toMatchSnapshot();
  });
});