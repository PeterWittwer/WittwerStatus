import axios from 'axios';
import { POST_LOADING, GET_SHIPMENTS, GET_SHIPMENT } from './types';


// Get Shipments
export const getShipments = () => dispatch => {
    dispatch(setPostLoading());
    axios
      .get('/api/shipments')
      .then(res =>
        dispatch({
          type: GET_SHIPMENTS,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_SHIPMENTS,
          payload: null
        })
      );
  };
  
  // Get Shipment
  export const getShipment = id => dispatch => {
    dispatch(setPostLoading());
    axios
      .get(`/api/shipments/${id}`)
      .then(res =>
        dispatch({
          type: GET_SHIPMENT,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_SHIPMENT,
          payload: null
        })
      );
  };


  // Get Shipment tracking
  // export const getShipmentTracking = id => dispatch => {
  //   dispatch(setPostLoading());
  //   axios
  //     .get(`/api/shipment/${id}/details`)
  //     .then(res =>
  //       dispatch({
  //         type: GET_SHIPMENT,
  //         payload: res.data
  //       })
  //     )
  //     .catch(err =>
  //       dispatch({
  //         type: GET_SHIPMENT,
  //         payload: null
  //       })
  //     );
  // };


  // Set loading state
  export const setPostLoading = () => {
    return {
      type: POST_LOADING
    };
  };