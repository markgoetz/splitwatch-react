import { updateTimer, addSplit, removeSplits } from './data';
jest.mock('./firebaseConfig');
import { database, update, push, remove } from './firebaseConfig';

beforeEach(() => {
  update.mockReset();
  push.mockReset();
  remove.mockReset();
});

const updateData = {
  isPlaying: true,
  startTime: 3000,
  baseTime: 1000
};

describe('updateTimer', () => {
  test('calls firebase timer update', () => {
    updateTimer(updateData);
    expect(database.ref).toHaveBeenLastCalledWith('timer');
    expect(update).toHaveBeenLastCalledWith(updateData);
  });
});

describe('addSplit', () => {
  test('calls firebase split push', () => {
    addSplit(1500000);
    expect(database.ref).toHaveBeenLastCalledWith('splits');
    expect(push).toHaveBeenLastCalledWith(1500000);
  });
});

describe('removeSplits', () => {
  test('calls firebase split remove', () => {
    removeSplits();
    expect(database.ref).toHaveBeenLastCalledWith('splits');
    expect(remove).toHaveBeenLastCalledWith();
  });
});