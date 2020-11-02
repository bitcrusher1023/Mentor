/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export const getAllMovies = state => state.movies.movies;
export const searchValueSelector = state => state.search.searchValue;
export const getFilters = state => state.filters.filters;
export const getFiltersSelector = state => state.filters;
export const sortValueSelector = state => state.sorting.sortingValue;

// https://react-redux.js.org/api/hooks#equality-comparisons-and-updates
export const getActiveFilters = createSelector(getFilters, filters => {
    return Object.keys(filters).filter(key => filters[key]);
});

export const getParams = createSelector(
    [searchValueSelector, sortValueSelector, getActiveFilters],
    (search, sortBy, filter) => {
        return { search, searchBy: 'title', sortBy, sortOrder: 'desc', filter: filter.join() };
    }
);
