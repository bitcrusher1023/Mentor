/* eslint-disable import/prefer-default-export */

import { SET_SEARCH_VALUE } from '../actions/searchActions';

const initialState = {
    searchValue: '',
    searchBy: 'title'
};

export function searchReducer(state = initialState, action) {
    switch (action.type) {
    case SET_SEARCH_VALUE:
        return {...state, searchValue: action.payload };
    default:
        return state;
    }
}
