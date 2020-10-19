import axios from "axios";
import { searchValueSelector, getFilter, sortValueSelector, getAllMovies } from '../selectors';

const API_GATEWAY_HOST = `http://localhost:4000`;
const SUCCESS_DELETE_CODE = 204;

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
export const DELETE_MOVIE = 'DELETE_MOVIE';

const getMovies = () => (dispatch, getState) => {
    const url = `${API_GATEWAY_HOST}/movies`;
    const params = {};
    params.search = searchValueSelector(getState());
    params.searchBy = 'title';
    params.sortBy = sortValueSelector(getState());

    params.filter = getFilter(getState());
    console.log('params', params);

    const request = axios.get(url, {params});

    request.then(response => {
        dispatch({
            type: GET_MOVIES_REQUEST,
            payload: response.data.data
        });
    });
};

export const deleteMovies = (movieId) => (dispatch, getState) => {

    const url = `${API_GATEWAY_HOST}/movies/${movieId}`;
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
