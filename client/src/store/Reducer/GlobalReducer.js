const initialState = {
  screenSize: '',
  isCalendar: false,
  isGuestForm: false
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'SET_SCREEN_SIZE':
      return { ...state, screenSize: payload }
    case 'IS_CALENDAR':
      return { ...state, isCalendar: payload }
    case 'IS_GUEST_FORM':
      return { ...state, isGuestForm: payload }
    default:
      return state;
  }
}

export default Reducer;
