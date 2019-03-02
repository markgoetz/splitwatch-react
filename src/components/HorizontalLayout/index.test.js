import React from 'react';
import HorizontalLayout from './HorizontalLayout';
import { shallow } from 'preact-render-spy';

describe('Horizontal Layout', () => {

  test('Horizontal layout renders correctly', () => {
    const context = shallow(<HorizontalLayout>
      <div>Test element</div>
      <button>Test button</button>
      <div>Extra test element</div>
    </HorizontalLayout>);
    expect(context).toMatchSnapshot();
  });

  test('Horizontal layout renders correctly when top-aligned', () => {
    const context = shallow(<HorizontalLayout align="top">
      <div>Test element</div>
      <button>Test button</button>
      <div>Extra test element</div>
    </HorizontalLayout>);
    expect(context).toMatchSnapshot();
  });

  test('Horizontal layout renders correctly when centered', () => {
    const context = shallow(<HorizontalLayout align="middle">
      <div>Test element</div>
      <button>Test button</button>
      <div>Extra test element</div>
    </HorizontalLayout>);
    expect(context).toMatchSnapshot();
  });

  test('Horizontal layout renders correctly when bottom-aligned', () => {
    const context = shallow(<HorizontalLayout align="bottom">
      <div>Test element</div>
      <button>Test button</button>
      <div>Extra test element</div>
    </HorizontalLayout>);
    expect(context).toMatchSnapshot();
  });
});