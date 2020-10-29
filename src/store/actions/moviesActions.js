import axios from "axios";
import { searchValueSelector, getFilters, sortValueSelector, getAllMovies } from '../selectors';

const API_GATEWAY = `http://localhost:4000/movies`;
const SUCCESS_DELETE_CODE = 204;
const SUCCESS_ADD_CODE = 201;
const SUCCESS_UPDATE_CODE = 200;

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
export const GET_MOVIES_REQUEST_START = 'GET_MOVIES_REQUEST_START';
export const GET_MOVIES_REQUEST_SUCCESS = 'GET_MOVIES_REQUEST_SUCCESS';
export const GET_MOVIES_REQUEST_ERROR = 'GET_MOVIES_REQUEST_ERROR';
export const ADD_MOVIE = 'ADD_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';

const getMovies = () => (dispatch, getState) => {
    const params = {};
    params.search = searchValueSelector(getState());
    params.searchBy = 'title';
    params.sortBy = sortValueSelector(getState());
    params.filter = getFilters(getState());
    console.log('params', params);

    const request = axios.get(API_GATEWAY, {params});

    request.then(response => {
        dispatch({
            type: GET_MOVIES_REQUEST,
            payload: response.data.data
        });
    });
};

export const requestMovies = options => async (dispatch) => {
    dispatch({
        type: GET_MOVIES_REQUEST_START,
        payload: { loading: true }
    })
    try {
        const { data } = await axios.get(API_GATEWAY, options);

        dispatch({
            type: GET_MOVIES_REQUEST_SUCCESS,
            payload: { movies: data.data, loading: false },
        })
    } catch (error) {
        dispatch({
            type: GET_MOVIES_REQUEST_ERROR,
            payload: { error, loading: false },
        })
    }
}

export const addMovie = (movieData) => (dispatch, getState) => {
    const movies = getAllMovies(getState());
    const request = axios.post(API_GATEWAY, {...movieData});

    request.then(response => {
        if (response.status === SUCCESS_ADD_CODE) {
            dispatch({
                type: ADD_MOVIE,
                payload: [response.data, ...movies]
            });
        };
    });
};

export const updateMovie = (movieData) => (dispatch, getState) => {
    const movies = getAllMovies(getState());
    const request = axios.put(API_GATEWAY, {...movieData});

    request.then(response => {
        if (response.status === SUCCESS_UPDATE_CODE) {
            const  index = movies.findIndex(x => x.id === response.data.id);
            movies.splice(index, 1, response.data);
            const newMovies = [...movies];

            dispatch({
                type: UPDATE_MOVIE,
                payload: newMovies
            });
        };
    });
};

export const deleteMovies = (movieId) => (dispatch, getState) => {
    const url = `${API_GATEWAY}/${movieId}`;
    const movies = getAllMovies(getState());
    const newMovies = [...movies].filter(item => item.id !== movieId);

    const request = axios.delete(url);

    request.then(response => {
        if (response.status === SUCCESS_DELETE_CODE) {
            dispatch({
                type: DELETE_MOVIE,
                payload: newMovies
            });
        }
    });
};

export default getMovies;
