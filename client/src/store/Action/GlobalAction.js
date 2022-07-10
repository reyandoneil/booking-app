import {
  SET_SCREEN_SIZE,
  IS_CALENDAR,
  IS_GUEST_FORM
} from './index';

export const setScreenSize = (payload) => {
  return {
    type: SET_SCREEN_SIZE,
    payload,
  };
};


export const openCalendar = (payload) => {
  return {
    type: IS_CALENDAR,
    payload,
  };
};


export const openGuestForm = (payload) => {
  return {
    type: IS_GUEST_FORM,
    payload,
  };
};