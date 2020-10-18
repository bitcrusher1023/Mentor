/* eslint-disable import/prefer-default-export */

export const getAllMovies = state => state.movies.movies;
export const searchValueSelector = state => state.search.searchValue;
export const getAllFilters = state => state.filters.allFilters;
export const getFiltersSelector = state => state.filters;
export const sortValueSelector = state => state.sorting.sortingValue;

export const getFilter = (state) => {
    const { allFilters } = state.filters;
    const filterData = [];

    allFilters.filter(item => {
        if (item.status === true) {
            filterData.push(item.name);
        }
        return filterData;
    });

    return filterData;
};
