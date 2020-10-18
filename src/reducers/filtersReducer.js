/* eslint-disable import/prefer-default-export */

import { SET_ALL_FILTERS, SET_FILTERS } from '../actions/filtersActions';

const initialState = {
    allFilters: [
        {id: 1, name: 'Action', status: false},
        {id: 2, name: 'Adventure', status: false},
        {id: 3, name: 'Animation', status: false },
        {id: 4, name: 'Drama', status: false},
        {id: 5, name: 'Romance', status: false},
        {id: 6, name: 'Family', status: false},
        {id: 7, name: 'Fantasy', status: false},
        {id: 8, name: 'Comedy', status: false},
    ],
    allFiltersChecked: true
};

export function filtersReducer(state = initialState, action) {
    switch (action.type) {
    case SET_ALL_FILTERS:
        return {...state, allFilters: action.payload.allFilters, allFiltersChecked: action.payload.allFiltersChecked };
    case SET_FILTERS:
        return {...state, allFilters: action.payload.allFilters, allFiltersChecked: action.payload.allFiltersChecked };
    default:
        return state;
    }
}