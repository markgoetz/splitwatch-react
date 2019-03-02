import renderTime, { zeroPrefix } from './renderTime.js';

const SECONDS = 1000;
const MINUTES = 60 * 1000;
const HOURS = 60 * 60 * 1000;

describe('renderTime', () => {
  test('Zero-prefixes hours correctly', () => {
    const time = HOURS + 30 * MINUTES + 30 * SECONDS + 300;
    expect(renderTime(time)).toBe('01:30:30.3');
  });

  test('Zero-prefixes minutes correctly', () => {
    const time = 10 * HOURS + 3 * MINUTES + 30 * SECONDS + 300;
    expect(renderTime(time)).toBe('10:03:30.3');
  });

  test('Zero-prefixes seconds correctly', () => {
    const time = 10 * HOURS + 30 * MINUTES + 3 * SECONDS + 300;
    expect(renderTime(time)).toBe('10:30:03.3');
  });

  test('Renders with two decimals', () => {
    const time = 10 * HOURS + 30 * MINUTES + 30 * SECONDS + 300;
    expect(renderTime(time, 2)).toBe('10:30:30.30');
  });

  test('Renders with zero decimals', () => {
    const time = 10 * HOURS + 30 * MINUTES + 30 * SECONDS + 300;
    expect(renderTime(time, 0)).toBe('10:30:30');
  });
});

describe('zeroPrefix', () => {
  test('Zero-prefixes if the number is shorter than provided', () => {
    expect(zeroPrefix(5, 2)).toBe('05');
  });

  test('Does not zero-prefix if the number is the same length', () => {
    expect(zeroPrefix(10, 2)).toBe('10');
  });

  test('Does not zero-prefix if the number is longer', () => {
    expect(zeroPrefix(100, 2)).toBe('100');
  });

  test('Does not zero-prefix 0 with length 1', () => {
    expect(zeroPrefix(0, 1)).toBe('0');
  });
});