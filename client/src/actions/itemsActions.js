import items from '../apis/items';
import { ADD_ITEM } from './types';

export const addItem = ({ name }) => async dispatch => {
    const requestBody = JSON.stringify({ name });
    const response = await items.post('/items', requestBody);
    dispatch({
        type: ADD_ITEM,
        payload: response.data
    });
};
