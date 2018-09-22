import { GET_SHIPMENTS, GET_SHIPMENT, POST_LOADING } from '../actions/types';
  
  const initialState = {
    shipments: [],
    shipment: {},
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case POST_LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_SHIPMENTS:
        return {
          ...state,
          shipments: action.payload,
          loading: false
        };
      case GET_SHIPMENT:
        return {
          ...state,
          shipment: action.payload,
          loading: false
        };
      
      default:
        return state;
    }
  }
  