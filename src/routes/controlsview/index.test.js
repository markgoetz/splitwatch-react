import { h } from 'preact';
import ControlsView from './index';
import Timer from '../../lib/Timer';
jest.mock('../../lib/Timer.js');
Timer.mockImplementation();

import { shallow } from 'preact-render-spy';
const testNow = new Date('2018-01-01');
let component;

beforeEach(() => {
  Timer.mockReset();
  require('jest-mock-now')(testNow);

  component = new ControlsView();
  component.props = {
    startTime: 1000,
    baseTime: 3000
  };
  component.componentDidMount();
});

describe('ControlsView', () => {
  test('renders when playing', () => {
    const context = shallow(<ControlsView isPlaying startTime={1000} baseTime={3000} splits={[]} />);
    expect(context).toMatchSnapshot();
  });

  test('renders when paused', () => {
    const context = shallow(<ControlsView startTime={1000} baseTime={3000} splits={[]} />);
    expect(context).toMatchSnapshot();
  });

  test('renders with splits', () => {
    const context = shallow(<ControlsView startTime={1000} baseTime={3000} splits={[100, 200, 300]} />);
    expect(context).toMatchSnapshot();
  });

  test('creates Timer object on instantiation', () => {
    expect(component.timer).toBeInstanceOf(Timer);
    expect(Timer.mock.calls[0]).toEqual([1000, 3000]);
  });

  test('updates the timer basetime when its props change', () => {
    component.timer.setBaseTime.mockImplementation();

    component.componentWillReceiveProps({ baseTime: 5000 });
    expect(component.timer.setBaseTime).toHaveBeenCalledWith(5000);
  });

  test('does not update the timer basetime when its props does change', () => {
    component.timer.setBaseTime.mockImplementation();

    component.componentWillReceiveProps({ baseTime: 3000 });
    expect(component.timer.setBaseTime).toHaveBeenCalledTimes(0);
  });

  test('calls Timer start when starts', () => {
    component.timer.start.mockImplementation();
    component.startTime();
    expect(component.timer.start).toHaveBeenCalledWith(testNow.getTime());
  });

  test('calls Timer pause when pauses', () => {
    component.timer.pause.mockImplementation();
    component.pauseTime();
    expect(component.timer.pause).toHaveBeenCalledWith(testNow.getTime());
  });
  
  test('calls Timer stop when stops', () => {
    component.timer.stop.mockImplementation();
    component.stopTime();
    expect(component.timer.stop).toHaveBeenCalledWith(testNow.getTime());
  });
  
  test('calls Timer reset when resets', () => {
    component.timer.reset.mockImplementation();
    component.resetTime();
    expect(component.timer.reset).toHaveBeenCalledWith(testNow.getTime());
  });

  test('calls Timer split when splits', () => {
    component.timer.reset.mockImplementation();
    component.addSplit();
    expect(component.timer.split).toHaveBeenCalledWith(testNow.getTime());
  });
});