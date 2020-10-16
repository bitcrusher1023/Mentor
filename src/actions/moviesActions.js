import axios from "axios";

const ROOT_URL = `http://localhost:4000`;

export const GET_MOVIES = 'GET_MOVIES'; // положили строку в константу
export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';

const getMovies = data => (dispatch, getState) => {
    const url = `${ROOT_URL}/movies`;
    const request = axios.get(url);

    request.then(response => {
        dispatch({
            type: GET_MOVIES_REQUEST,
            payload: response.data.data
        });
    });
};

export default getMovies;

