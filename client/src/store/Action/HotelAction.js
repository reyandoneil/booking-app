import axios from 'axios';
import {
  GET_HOTEL_BY_CITY,
  GET_HOTEL_BY_TYPE,
  SET_LOADING,
  ERROR_FROM_HOTEL,
  GET_HOTEL,
  SET_CITY,
} from './index';
import { Delay } from '../../utils';
const url = 'http://localhost:3001/hotels/';

export const setCity = (payload) => {
  return {
    type: SET_CITY,
    payload,
  };
};

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
        type: GET_HOTEL,
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

export const searchProperty = (city, min, max) => {
  return async (dispatch) => {
    const onSuccess = (data) => {
      Delay(6000).then(() => {
        dispatch(setLoading(false));
        dispatch({
          type: GET_HOTEL,
          payload: data.data,
        });
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
      localStorage.setItem('city', JSON.stringify(city));
      dispatch(setCity(city));
      const data = await axios.get(
        `${url}?city=${city}&limit=4&min=${min}&max=${max}`
      );
      onSuccess(data);
    } catch (error) {
      onError(error);
    }
  };
};
