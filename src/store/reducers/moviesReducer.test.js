import { moviesReducer } from './moviesReducer';
import { 
    GET_MOVIES_REQUEST_SUCCESS,
    ADD_MOVIE_REQUEST_SUCCESS,
    UPDATE_MOVIE_REQUEST_SUCCESS,
    DELETE_MOVIE_REQUEST_SUCCESS
} from '../actions/moviesActions';
import { SORT_MOVIES } from '../actions/sortingActions';

const moviesMock = [{
    id: 1,
    title: 'Aaaa'
},
{
    id: 2,
    title: 'Bbbb'
}];

describe('filters_reducer', () => {
    describe('INITIAL_STATE', () => {
        test('is correct', () => {
            const action = { type: 'dummy_action' };
            expect(moviesReducer(undefined, action)).toMatchSnapshot();
        });
    });
      
    describe('GET_MOVIES_REQUEST_SUCCESS', () => {
        test('returns the correct state', () => {
            const action = { type: GET_MOVIES_REQUEST_SUCCESS, payload: moviesMock };

            expect(moviesReducer(undefined, action)).toMatchSnapshot();
        });
    });

    describe('ADD_MOVIE_REQUEST_SUCCESS', () => {
        test('returns the correct state', () => {
            const action = { type: ADD_MOVIE_REQUEST_SUCCESS, payload: moviesMock };

            expect(moviesReducer(undefined, action)).toMatchSnapshot();
        });
    });

    describe('UPDATE_MOVIE_REQUEST_SUCCESS', () => {
        test('returns the correct state', () => {
            const action = { type: UPDATE_MOVIE_REQUEST_SUCCESS, payload: moviesMock };

            expect(moviesReducer(undefined, action)).toMatchSnapshot();
        });
    });

    describe('DELETE_MOVIE_REQUEST_SUCCESS', () => {
        test('returns the correct state', () => {
            const movieIdMock = 1;
            const action = { type: DELETE_MOVIE_REQUEST_SUCCESS, payload: movieIdMock };

            const initialState = {
                movies: moviesMock
            };

            expect(moviesReducer(undefined, action)).toMatchSnapshot();

            const movies = [...initialState.movies].filter(movie => movie.id !== action.payload.movieIdMock);

            expect(moviesReducer(initialState, action)).toEqual({
                ...initialState,
                movies,
            });
        });
    });

    describe('SORT_MOVIES', () => {
        test('returns the correct state', () => {
            const action = { type: SORT_MOVIES, payload: moviesMock };

            expect(moviesReducer(undefined, action)).toMatchSnapshot();
        });
    });
});
