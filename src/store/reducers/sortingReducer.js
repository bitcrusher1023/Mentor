/* eslint-disable import/prefer-default-export */

import { SET_SORTING_VALUE } from '../actions/sortingActions';

const initialState = {
    sortingValue: 'release_date',
};

export function sortingReducer(state = initialState, action) {
    switch (action.type) {
    case SET_SORTING_VALUE:
        return {...state, sortingValue: action.payload };
    default:
        return state;
    }
}
