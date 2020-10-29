/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

export const getAllMovies = state => state.movies.movies;
export const searchValueSelector = state => state.search.searchValue;
export const getFilters = state => state.filters.filters;
export const getFiltersSelector = state => state.filters;
export const sortValueSelector = state => state.sorting.sortingValue;

// export const getFilter = (state) => {
//     // const { allFilters } = state.filters;
//     // const filterData = [];

//     // allFilters.filter(item => {
//     //     if (item.status === true) {
//     //         filterData.push(item.name);
//     //     }
//     //     return filterData;
//     // });

//     // return filterData;

//     const filters = getAllFilters(state);

//     return filters.reduce((filters, { status, name }) => {
//         return status ? [...filters, name] : filters;
//     }, [])
// };

// https://react-redux.js.org/api/hooks#equality-comparisons-and-updates
export const getActiveFilters = createSelector(getFilters, filters => {
    return Object.keys(filters).filter(key => filters[key]);
})

export const getParams = createSelector(
    [searchValueSelector, sortValueSelector, getActiveFilters],
    (search, sortBy, filter) => {
        return { search, searchBy: 'title', sortBy, filter: filter.join() }
    }
);