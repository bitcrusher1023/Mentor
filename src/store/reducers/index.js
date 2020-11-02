/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { moviesReducer } from './moviesReducer';
import { searchReducer } from './searchReducer';
import { filtersReducer } from './filtersReducer';
import { sortingReducer } from './sortingReducer';

export const rootReducer = combineReducers({
    movies: moviesReducer,
    search: searchReducer,
    filters: filtersReducer,
    sorting: sortingReducer
});
