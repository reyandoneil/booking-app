const initialState = {
  dataHotelByCity: [],
  dataHotelByType: [],
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'GET_HOTEL_BY_CITY':
      return { ...state, dataHotelByCity: payload };
    case 'GET_HOTEL_BY_TYPE':
      return { ...state, dataHotelByType: payload };
    default:
      return state;
  }
}

export default Reducer;
