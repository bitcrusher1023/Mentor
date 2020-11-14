import configureStore from 'redux-mock-store';
import * as filtersActions from './filtersActions';

const mockStore = configureStore();
const store = mockStore();

describe('filters_actions', () => {
    beforeEach(() => {
        store.clearActions();
    });
  
    describe('resetFilters', () => {
        test('Dispatches the correct action and payload', () => {
            const expectedActions = [
                {'type': 'RESET_FILTERS'}
            ];
      
            store.dispatch(filtersActions.resetFilters());
            expect(store.getActions()).toEqual(expectedActions);
            expect(store.getActions()).toMatchSnapshot();
        });
    });

    describe('toggleFilter', () => {
        test('Dispatches the correct action and payload', () => {
            const filter = 'filterName';
            const expectedActions = [
                {
                    'payload': { filter },
                    'type': 'TOGGLE_FILTER',
                },
            ];
      
            store.dispatch(filtersActions.toggleFilter(filter));
            expect(store.getActions()).toEqual(expectedActions);
            expect(store.getActions()).toMatchSnapshot();
        });
    });
});
