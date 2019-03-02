import React from 'react';
import Heading from './Heading';
import { shallow } from 'preact-render-spy';

describe('Heading Component', () => {
  test('Level 1 renders correctly', () => {
    const context = shallow(<Heading level="1">Level 1</Heading>);
    expect(context).toMatchSnapshot();
  });

  test('Level 2 renders correctly', () => {
    const context = shallow(<Heading level="2">Level 2</Heading>);
    expect(context).toMatchSnapshot();
  });

  test('Level 3 renders correctly', () => {
    const context = shallow(<Heading level="3">Level 3</Heading>);
    expect(context).toMatchSnapshot();
  });

  test('Level 4 renders correctly', () => {
    const context = shallow(<Heading level="4">Level 4</Heading>);
    expect(context).toMatchSnapshot();
  });

  test('Level 5 renders correctly', () => {
    const context = shallow(<Heading level="5">Level 5</Heading>);
    expect(context).toMatchSnapshot();
  });

  test('Level 6 renders correctly', () => {
    const context = shallow(<Heading level="6">Level 6</Heading>);
    expect(context).toMatchSnapshot();
  });


});