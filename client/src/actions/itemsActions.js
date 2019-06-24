import items from '../apis/items';
import history from '../history';
import { ADD_ITEM, DELETE_ITEM, FETCH_ITEMS } from './types';

// FETCH ALL ITEM
export const fetchItems = () => async dispatch => {
    try {
        const response = await items.get('/items');
        dispatch({
            type: FETCH_ITEMS,
            payload: response.data
        });
    } catch (e) {
        throw e;
    }
};

// ADD NEW ITEM
export const addItem = item => async dispatch => {
    try {
        const response = await items.post('/items', item);
        dispatch({
            type: ADD_ITEM,
            payload: response.data
        });
        history.push('/list');
    } catch (e) {
        throw e;
    }
};

// DELETE ITEM
export const deleteItem = id => async dispatch => {
    try {
        const response = await items.delete(`/items/${id}`);
        dispatch({
            type: DELETE_ITEM,
            payload: response.data._id
        });
    } catch (e) {
        throw e;
    }
};
