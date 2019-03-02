import React from 'react';
import VerticalLayout from './VerticalLayout';
import { shallow } from 'preact-render-spy';

describe('Vertical Layout', () => {

  test('Vertical layout renders correctly', () => {
    const context = shallow(<VerticalLayout>
      <div>Test element</div>
      <button>Test button</button>
      <div>Extra test element</div>
    </VerticalLayout>);
    expect(context).toMatchSnapshot();
  });

  test('Vertical layout renders correctly when left-aligned', () => {
    const context = shallow(<VerticalLayout align="left">
      <div>Test element</div>
      <button>Test button</button>
      <div>Extra test element</div>
    </VerticalLayout>);
    expect(context).toMatchSnapshot();
  });

  test('Vertical layout renders correctly when centered', () => {
    const context = shallow(<VerticalLayout align="center">
      <div>Test element</div>
      <button>Test button</button>
      <div>Extra test element</div>
    </VerticalLayout>);
    expect(context).toMatchSnapshot();
  });

  test('Vertical layout renders correctly when right-aligned', () => {
    const context = shallow(<VerticalLayout align="right">
      <div>Test element</div>
      <button>Test button</button>
      <div>Extra test element</div>
    </VerticalLayout>);
    expect(context).toMatchSnapshot();
  });
});