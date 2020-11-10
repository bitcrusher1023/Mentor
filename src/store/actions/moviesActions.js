import axios from "axios";

const API_GATEWAY = `http://localhost:4000/movies`;
const SUCCESS_DELETE_CODE = 204;
const SUCCESS_UPDATE_CODE = 200;

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_REQUEST_START = 'GET_MOVIES_REQUEST_START';
export const GET_MOVIES_REQUEST_SUCCESS = 'GET_MOVIES_REQUEST_SUCCESS';
export const GET_MOVIES_REQUEST_ERROR = 'GET_MOVIES_REQUEST_ERROR';
export const ADD_MOVIE_REQUEST_START = 'ADD_MOVIE_REQUEST_START';
export const ADD_MOVIE_REQUEST_SUCCESS = 'ADD_MOVIE_REQUEST_SUCCESS';
export const ADD_MOVIE_REQUEST_ERROR = 'ADD_MOVIE_REQUEST_ERROR';
export const UPDATE_MOVIE_REQUEST_START = 'UPDATE_MOVIE_REQUEST_START';
export const UPDATE_MOVIE_REQUEST_SUCCESS = 'UPDATE_MOVIE_REQUEST_SUCCESS';
export const UPDATE_MOVIE_REQUEST_ERROR = 'UPDATE_MOVIE_REQUEST_ERROR';
export const DELETE_MOVIE_REQUEST_START = 'DELETE_MOVIE_REQUEST_START';
export const DELETE_MOVIE_REQUEST_SUCCESS = 'DELETE_MOVIE_REQUEST_SUCCESS';
export const DELETE_MOVIE_REQUEST_ERROR = 'DELETE_MOVIE_REQUEST_ERROR';

export const requestMovies = options => async (dispatch) => {
    dispatch({
        type: GET_MOVIES_REQUEST_START,
        payload: { loading: true }
    });
    try {
        console.log('requestMovies options !!!!!!!!!!!!!!!!!', options);
        const { data } = await axios.get(API_GATEWAY, options);

        dispatch({
            type: GET_MOVIES_REQUEST_SUCCESS,
            payload: { movies: data.data, loading: false },
        });
    } catch (error) {
        dispatch({
            type: GET_MOVIES_REQUEST_ERROR,
            payload: { error, loading: false },
        });
    }
};

export const addMovie = (movieData) => async (dispatch) => {
    dispatch({
        type: ADD_MOVIE_REQUEST_START,
        payload: { loading: true }
    });
    try {
        const { data } = await axios.post(API_GATEWAY, {...movieData});

        dispatch({
            type: ADD_MOVIE_REQUEST_SUCCESS,
            payload: { movie: data, loading: false },
        });
    } catch (error) {
        dispatch({
            type: ADD_MOVIE_REQUEST_ERROR,
            payload: { error, loading: false },
        });
    }
};

export const updateMovie = (movieData, updatedMovies) => async (dispatch) => {
    dispatch({
        type: UPDATE_MOVIE_REQUEST_START,
        payload: { loading: true }
    });
    try {
        const {status} = await axios.put(API_GATEWAY, {...movieData});

        if (status === SUCCESS_UPDATE_CODE) {
            dispatch({
                type: UPDATE_MOVIE_REQUEST_SUCCESS,
                payload: { movies: updatedMovies, loading: false },
            });
        }
    } catch (error) {
        dispatch({
            type: UPDATE_MOVIE_REQUEST_ERROR,
            payload: { error, loading: false },
        });
    }
};

export const deleteMovies = (movieId) => async (dispatch) => {
    const request = `${API_GATEWAY}/${movieId}`;

    dispatch({
        type: DELETE_MOVIE_REQUEST_START,
        payload: { loading: true }
    });
    try {
        const {status} = await axios.delete(request);

        if (status === SUCCESS_DELETE_CODE) {
            dispatch({
                type: DELETE_MOVIE_REQUEST_SUCCESS,
                payload: { movieId, loading: false },
            });
        }
    } catch (error) {
        dispatch({
            type: DELETE_MOVIE_REQUEST_ERROR,
            payload: { error, loading: false },
        });
    }
};
