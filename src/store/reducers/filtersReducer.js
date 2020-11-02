/* eslint-disable import/prefer-default-export */
import { RESET_FILTERS, TOGGLE_FILTER } from '../actions/filtersActions';

const initialState = {
    filters: {
        action: false,
        adventure: false,
        animation: false,
        drama: false,
        romance: false,
        family: false,
        fantasy: false,
        comedy: false,
    }
};

export function filtersReducer(state = initialState, action) {
    switch (action.type) {
    case RESET_FILTERS:
        return {...state, filters: Object.keys(state.filters).reduce((acc, key) => ({ ...acc, [key]: false }), {}) };
    case TOGGLE_FILTER:
        return {
            ...state,
            filters: {
                ...state.filters,
                [action.payload.filter]: !state.filters[action.payload.filter],
            }
        };
    default:
        return state;
    }
}