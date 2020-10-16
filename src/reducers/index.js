/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { moviesReducer } from './allMovies';

export const rootReducer = combineReducers({
    movies: moviesReducer
});