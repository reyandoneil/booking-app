import axios from 'axios';
import {
  GET_HOTEL_BY_CITY,
  GET_HOTEL_BY_TYPE,
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
    const onSuccess = (data) => {
      Delay(1000).then(() => {
        dispatch({
          type: GET_HOTEL_BY_CITY,
          payload: data.data,
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
      const data = await axios.get(
        `${url}countByCity?cities=jakarta,jogjakarta,bandung,bali,lombok`,
        {
          headers: {},
        }
      );
      onSuccess(data);
    } catch (error) {
      onError(error);
    }
  };
};

export const getHotelsByType = () => {
  return async (dispatch) => {
    const onSuccess = (data) => {
      Delay(1000).then(() => {
        dispatch({
          type: GET_HOTEL_BY_TYPE,
          payload: data.data,
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
      const data = await axios.get(`${url}countByType`, {
        headers: {},
      });
      onSuccess(data);
    } catch (error) {
      onError(error);
    }
  };
};
