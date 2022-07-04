const initialState = {
  dataHotelByCity: [],
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'GET_HOTEL_BY_CITY':
      return { ...state, dataHotelByCity: payload };
    default:
      return state;
  }
}

export default Reducer;
