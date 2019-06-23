import { ADD_ITEM, FETCH_ITEMS, DELETE_ITEM } from '../actions/types';

export const itemReducer = (state = { items: [] }, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                items: [...action.payload]
            };
        case ADD_ITEM:
            console.log(state);
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            }
        default:
            return state;
    }
};
