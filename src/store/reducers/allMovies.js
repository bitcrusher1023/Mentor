/* eslint-disable import/prefer-default-export */

import { act } from 'react-test-renderer';
import { GET_MOVIES_REQUEST, ADD_MOVIE, UPDATE_MOVIE, DELETE_MOVIE, GET_MOVIES_REQUEST_SUCCESS } from '../actions/moviesActions';
import { SORT_MOVIES } from '../actions/sortingActions';

const initialState = {
    movies: []
};

export function moviesReducer(state = initialState, action) {
    switch (action.type) {
    case GET_MOVIES_REQUEST:
        return {...state, movies: action.payload };
    case GET_MOVIES_REQUEST_SUCCESS:
        return {...state, movies: action.payload.movies }
    case SORT_MOVIES:
        return {...state, movies: action.payload };
    case ADD_MOVIE:
        return {...state, movies: action.payload };
    case UPDATE_MOVIE:
        return {...state, movies: action.payload };
    case DELETE_MOVIE:
        return {...state, movies: action.payload };
    default:
        return state;
    }
}
