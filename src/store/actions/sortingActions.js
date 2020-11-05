export const SET_SORTING_VALUE = 'SET_SORTING_VALUE';
export const SORT_MOVIES = 'SORT_MOVIES';

export const setSortingValue = value => ({
    type: SET_SORTING_VALUE,
    payload: value,
});

export const sortMovies = (sortedMovies) => ({
    type: SORT_MOVIES,
    payload: sortedMovies,
});
