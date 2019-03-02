export const update = jest.fn();
export const push = jest.fn();
export const remove = jest.fn();

export const database = {
  ref: jest.fn().mockImplementation(key => ({ update, push, remove }))
};
