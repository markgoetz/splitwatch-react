import React from 'react';
import SplitList from './SplitList';
import { shallow } from 'preact-render-spy';

describe('SplitList', () => {
  test('renders correctly with no splits', () => {
    const context = shallow(<SplitList splits={[]} />);
    expect(context).toMatchSnapshot();
  });

  test('renders correctly with splits', () => {
    const context = shallow(<SplitList splits={[1, 2, 3, 4, 5]} />);
    expect(context).toMatchSnapshot();
  });
});