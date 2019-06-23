import { ADD_ITEM } from '../actions/types';

export const itemReducer = (state = {items: []}, action) => {
    switch (action.type) {
        case ADD_ITEM:
            console.log(state);
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        default:
            return state;
    }
};
