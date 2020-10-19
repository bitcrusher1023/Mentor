import { getAllFilters } from '../selectors';

export const GET_FILTERS = 'GET_FILTERS';
export const SET_ALL_FILTERS = 'SET_ALL_FILTERS';
export const SET_FILTERS = 'SET_FILTERS';

export const getFilters = (getState) => {
    const allFilters = getAllFilters(getState());
    return {
        type: GET_FILTERS,
        payload: allFilters,
    };
};

export const setAllFilters = () => (dispatch, getState) => {
    const allFilters = getAllFilters(getState());
    const newFilters = [...allFilters];
    newFilters.map(filter => ({ ...filter, status: false }));

    dispatch({
        type: SET_ALL_FILTERS,
        payload: { allFilters: newFilters, allFiltersChecked: true},
    });
};

export const setFilters = filterIndex => (dispatch, getState) => {
    const allFilters = getAllFilters(getState());
    allFilters[filterIndex].status = !allFilters[filterIndex].status;
    const newFilters = [...allFilters];

    dispatch({
        type: SET_FILTERS,
        payload: { allFilters: newFilters, allFiltersChecked: false},
    });
};
