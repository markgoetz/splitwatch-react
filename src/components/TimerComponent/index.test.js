import React from 'react';
import TimerComponent from './TimerComponent';
import { shallow } from 'preact-render-spy';

const testNow = new Date('2018-01-01');
global.requestAnimationFrame = jest.fn();
let component;

beforeEach(() => {
  component = new TimerComponent({ startTime: 3000, baseTime: 1000, isPlaying: false });
  global.requestAnimationFrame.mockReset();
  require('jest-mock-now')(testNow);
});

describe('TimerComponent', () => {

  test('Renders correctly on play', () => {
    const context = shallow(<TimerComponent isPlaying startTime={3000} baseTime={1000} />);
    expect(context).toMatchSnapshot();
  });

  test('Renders correctly on pause', () => {
    const context = shallow(<TimerComponent startTime={3000} baseTime={1000} />);
    expect(context).toMatchSnapshot();
  });

  test('Calls requestAnimationFrame on mount', () => {
    component.componentDidMount();
    expect(global.requestAnimationFrame).toHaveBeenCalledWith(component.updateTime);
  });

  test('Calls requestAnimationFrame when updateTime is called', () => {
    component.updateTime();
    expect(global.requestAnimationFrame).toHaveBeenCalledWith(component.updateTime);
  });

  test('Updates state when updateTime is called and component is paused', () => {
    component.updateTime();
    expect(component.state).toEqual({ elapsedTime: 1000 });
  });

  test('Updates state when updateTime is called and component is playing', () => {
    component.props.isPlaying = true;
    component.updateTime();
    expect(component.state).toEqual({ elapsedTime: testNow.getTime() - 2000 });
  });
});