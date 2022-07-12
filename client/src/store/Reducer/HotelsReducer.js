const initialState = {
  dataHotelByCity: [],
  dataHotelByType: [],
  dataHotel: [],
  city: '',
  loading: false
};

function Reducer(state = initialState, { type, payload }) {
  switch (type) {
    case 'GET_HOTEL_BY_CITY':
      return { ...state, dataHotelByCity: payload };
    case 'GET_HOTEL_BY_TYPE':
      return { ...state, dataHotelByType: payload };
    case 'GET_HOTEL':
      return { ...state, dataHotel: payload };
    case 'SET_CITY':
      return { ...state, city: payload };
    case 'SET_LOADING':
      return { ...state, loading: payload };
    default:
      return state;
  }
}

export default Reducer;
