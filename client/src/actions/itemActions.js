import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, PUT_ITEM, INDIVIDUAL_ITEMS } from './types';
 
export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get('/api/items').then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};



export const IndividualItems = (id) => dispatch => {
  axios.get(`/api/items/${id}`).then(res =>
    dispatch({
      type: INDIVIDUAL_ITEMS,
      payload: res.data
    })
  );
};


export const addItem = item => dispatch => {
  axios.post('/api/items', item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};


export const putItem = (id, item) => dispatch => {
  axios.put(`/api/items/${id}`, item).then(res =>
    dispatch({
      type: PUT_ITEM,
      payload: res.data
    })
  );
};



export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};
