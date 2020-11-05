/* eslint-disable import/prefer-default-export */
import { GET_MOVIES_REQUEST_SUCCESS,
    ADD_MOVIE_REQUEST_SUCCESS,
    UPDATE_MOVIE_REQUEST_SUCCESS,
    DELETE_MOVIE_REQUEST_SUCCESS,
} from '../actions/moviesActions';
import { SORT_MOVIES } from '../actions/sortingActions';

const initialState = {
    movies: []
};

export function moviesReducer(state = initialState, action) {
    switch (action.type) {
    case GET_MOVIES_REQUEST_SUCCESS:
        return {...state, movies: action.payload.movies };
    case SORT_MOVIES:
        return {...state, movies: action.payload };
    case ADD_MOVIE_REQUEST_SUCCESS:
        return {
            ...state,
            movies: [action.payload.movie, ...state.movies]
        };
    case UPDATE_MOVIE_REQUEST_SUCCESS:
        return {...state, movies: action.payload.movies };
    case DELETE_MOVIE_REQUEST_SUCCESS:
        return {
            ...state,
            movies: [...state.movies].filter(movie => movie.id !== action.payload.movieId)
        };
    default:
        return state;
    }
}
