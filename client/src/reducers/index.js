import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer'
import profileReducer from './profileReducer'
import postReducer from './postReducer';
import shipmentReducer from './shipmentReducer';

export default combineReducers({
  item: itemReducer,
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  post: postReducer,
  shipment: shipmentReducer

});
