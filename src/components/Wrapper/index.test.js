import React from 'react';
import Wrapper from './Wrapper';
import { shallow } from 'preact-render-spy';

describe('Wrapper', () => {
  test('Wrapper renders correctly when left-aligned', () => {
    const context = shallow(<Wrapper align="left">
      <div>Test element</div>
      <button>Test button</button>
      <div>Extra test element</div>
    </Wrapper>);
    expect(context).toMatchSnapshot();
  });

  test('Wrapper renders correctly when center-aligned', () => {
    const context = shallow(<Wrapper align="center">
      <div>Test element</div>
      <button>Test button</button>
      <div>Extra test element</div>
    </Wrapper>);
    expect(context).toMatchSnapshot();
  });

  test('Wrapper renders correctly when right-aligned', () => {
    const context = shallow(<Wrapper align="right">
      <div>Test element</div>
      <button>Test button</button>
      <div>Extra test element</div>
    </Wrapper>);
    expect(context).toMatchSnapshot();
  });
});