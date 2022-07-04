import axios from 'axios';
import {
  GET_HOTEL_BY_CITY,
  SET_LOADING,
  ERROR_FROM_HOTEL,
} from './index';
import { Delay } from '../../utils';
const url = 'http://localhost:3001/hotels/';
export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload,
  };
};

export const getHotelsByCity = () => {
  return async (dispatch) => {
    const onSuccess = (dataProduct) => {
      Delay(1000).then(() => {
        dispatch({
          type: GET_HOTEL_BY_CITY,
          payload: dataProduct.data,
        });
        dispatch(setLoading(false));
      });
    };
    const onError = (error) => {
      dispatch({
        type: ERROR_FROM_HOTEL,
        payload: error,
      });
    };
    try {
      dispatch(setLoading(true));
      const dataProduct = await axios.get(
        `http://localhost:3001/hotels/countByCity?cities=jakarta,jogjakarta,bandung,bali,lombok`,
        {
          headers: {},
        }
      );
      console.log(dataProduct, '<----');
      onSuccess(dataProduct);
    } catch (error) {
        console.log('error');
      onError(error);
    }
  };
};
