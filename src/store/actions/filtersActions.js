export const RESET_FILTERS = 'RESET_FILTERS';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

export const resetFilters = () => ({
    type: RESET_FILTERS,
});

export const toggleFilter = (filter) => ({
    type: TOGGLE_FILTER,
    payload: { filter },
});
