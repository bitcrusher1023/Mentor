/* eslint-disable import/prefer-default-export */
// import {
//     GET_MOVIES,
//     SORT_MOVIES
// } from '../constants';

import { GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS } from '../actions/moviesActions';

const initialState = {
    movies: [],
    isFetching: false
};

export function moviesReducer(state = initialState, action) {
    switch (action.type) {
    case GET_MOVIES_REQUEST:
        return {...state, movies: action.payload };

    // case GET_MOVIES_SUCCESS:
    //     return {...state, movies: action.payload, isFetching: false };

    default:
        return state;
    }
}

// export function pageReducer(state = initialState, action) {
//     switch (action.type) {
//       case GET_PHOTOS_REQUEST:
//         return { ...state, year: action.payload, isFetching: true }
  
//       case GET_PHOTOS_SUCCESS:
//         return { ...state, photos: action.payload, isFetching: false }
  
//       default:
//         return state
//     }
//   }

// export function pageReducer(state = initialState, action) {
//     switch (action.type) {
//       case SET_YEAR: // изменили строку на константу
//         return { ...state, year: action.payload }
  
//       default:
//         return state
//     }
//   }