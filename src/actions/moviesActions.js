import axios from "axios";
import { searchValueSelector, getFilter, sortValueSelector } from '../selectors';

const ROOT_URL = `http://localhost:4000`;

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';

const getMovies = () => (dispatch, getState) => {
    const url = `${ROOT_URL}/movies`;
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

export default getMovies;
