import Timer from './Timer';

jest.mock('./data.js');
import { updateTimer, addSplit, removeSplits } from './data.js';

updateTimer.mockImplementation();
addSplit.mockImplementation();
removeSplits.mockImplementation();

beforeEach(() => {
  updateTimer.mockReset();
  addSplit.mockReset();
  removeSplits.mockReset();
});

describe('Timer', () => {
  test('Constructor initializes the timer correctly', () => {
    const timer = new Timer(200, 500);
    expect(timer.isPlaying).toBe(false);
    expect(timer.startTime).toBe(200);
    expect(timer.baseTime).toBe(500);
  });

  test('Start sets isPlaying flag to true', () => {
    const timer = new Timer(0, 0);
    timer.isPlaying = false;
    timer.start(1000);
    expect(timer.isPlaying).toBe(true);
  });

  test('Start sets startTime flag', () => {
    const timer = new Timer(0, 0);
    timer.start(1000);
    expect(timer.startTime).toBe(1000);
  });

  test('Start leaves baseTime alone', () => {
    const timer = new Timer(0, 0);
    timer.start(1000);
    expect(timer.baseTime).toBe(0);
  });

  test('Start calls updateTimer', () => {
    const timer = new Timer(0, 0);
    timer.start(1000);
    expect(updateTimer).lastCalledWith({ startTime: 1000, baseTime: 0, isPlaying: true });
  });

  test('Pause sets isPlaying flag to false', () => {
    const timer = new Timer(0, 0);
    timer.isPlaying = true;
    timer.pause(2000);
    expect(timer.isPlaying).toBe(false);
  });

  test('Pause sets baseTime based on start time and current base time', () => {
    const timer = new Timer(1000, 2000);
    timer.isPlaying = true;
    timer.pause(3000);
    expect(timer.baseTime).toBe(4000);
  });

  test('Pause calls updateTimer', () => {
    const timer = new Timer(1000, 2000);
    timer.isPlaying = true;
    timer.pause(3000);
    expect(updateTimer).lastCalledWith({ startTime: 1000, baseTime: 4000, isPlaying: false });
  });

  test('Pause does not call updateTimer if already paused', () => {
    const timer = new Timer(1000, 2000);
    timer.isPlaying = false;
    timer.pause(3000);
    expect(updateTimer.mock.calls.length).toBe(0);
  });

  test('Stop sets isPlaying to false', () => {
    const timer = new Timer(1000, 2000);
    timer.isPlaying = true;
    timer.stop(3000);
    expect(timer.isPlaying).toBe(false);
  });

  test('Stop sets startTime correctly', () => {
    const timer = new Timer(1000, 2000);
    timer.stop(3000);
    expect(timer.startTime).toBe(3000);
  });

  test('Stop sets baseTime to 0', () => {
    const timer = new Timer(1000, 2000);
    timer.stop(3000);
    expect(timer.baseTime).toBe(0);
  });

  test('Stop calls updateTimer', () => {
    const timer = new Timer(1000, 2000);
    timer.stop(3000);
    expect(updateTimer).lastCalledWith({ startTime: 3000, baseTime: 0, isPlaying: false });
  });

  test('Reset sets isPlaying to false', () => {
    const timer = new Timer(1000, 2000);
    timer.isPlaying = true;
    timer.stop(3000);
    expect(timer.isPlaying).toBe(false);
  });

  test('Reset sets startTime correctly', () => {
    const timer = new Timer(1000, 2000);
    timer.reset(3000);
    expect(timer.startTime).toBe(3000);
  });

  test('Reset sets baseTime to 0', () => {
    const timer = new Timer(1000, 2000);
    timer.reset(3000);
    expect(timer.baseTime).toBe(0);
  });

  test('Reset calls updateTimer', () => {
    const timer = new Timer(1000, 2000);
    timer.reset(3000);
    expect(updateTimer).lastCalledWith({ startTime: 3000, baseTime: 0, isPlaying: false });
  });

  test('Reset calls removeSplits', () => {
    const timer = new Timer(1000, 2000);
    timer.reset(3000);
    expect(removeSplits.mock.calls.length).toBe(1);
  });

  test('Split calls addSplit', () => {
    const timer = new Timer(1000, 2000);
    timer.split(5000);
    expect(addSplit).lastCalledWith(6000);
  });

  test('setBaseTime sets the base time', () => {
    const timer = new Timer(1000, 2000);
    timer.setBaseTime(4000);
    expect(timer.baseTime).toBe(4000);
  });
});