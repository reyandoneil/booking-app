const initialState = {
    screenSize: ''
  };
  
  function Reducer(state = initialState, { type, payload }) {
    switch (type) {
      case 'SET_SCREEN_SIZE':
        return { ...state, screenSize: payload }
      default:
        return state;
    }
  }
  
  export default Reducer;
  