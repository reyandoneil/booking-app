import { combineReducers } from 'redux';
import GlobalReducer from './GlobalReducer';
import HotelsReducer from './HotelsReducer';

export default combineReducers({
  GlobalReducer,
  HotelsReducer,
});
