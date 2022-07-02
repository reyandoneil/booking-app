import { SET_SCREEN_SIZE } from './index';

export const setScreenSize = (payload) => {
  return {
    type: SET_SCREEN_SIZE,
    payload,
  };
};
