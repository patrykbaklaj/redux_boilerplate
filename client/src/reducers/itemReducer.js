import {ADD_ITEM} from '../actions/types';

export const itemReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_ITEM:
            console.log('Adding an item');
            return state;
        default:
            return state;
    }
};
