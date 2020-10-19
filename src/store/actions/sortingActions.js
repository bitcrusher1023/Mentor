import { getAllMovies, sortValueSelector } from '../selectors';

export const SET_SORTING_VALUE = 'SET_SORTING_VALUE';
export const SORT_MOVIES = 'SORT_MOVIES';

export const setSortingValue = value => ({
    type: SET_SORTING_VALUE,
    payload: value,
});

export const sortMovies = () => (dispatch, getState) => {
    let movies = getAllMovies(getState());
    const sortBy = sortValueSelector(getState());

    if (sortBy === 'release_date') {
        movies = [...movies].sort((a, b) => {
            if (new Date(b[sortBy]) < new Date(a[sortBy])) return -1;
            if (new Date(b[sortBy]) > new Date(a[sortBy])) return 1;
            return 0;
        });
    } else {
        movies = [...movies].sort((a, b) => b[sortBy] - a[sortBy]);
    }

    return dispatch({
        type: SORT_MOVIES,
        payload: movies,
    });
};
