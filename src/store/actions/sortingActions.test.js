import configureStore from 'redux-mock-store';
import * as sortingActions from './sortingActions';

const mockStore = configureStore();
const store = mockStore();

describe('sorting_actions', () => {
    beforeEach(() => {
        store.clearActions();
    });
  
    describe('setSortingValue', () => {
        test('Dispatches the correct action and payload', () => {
            const expectedActions = [
                {
                    'payload': 'title',
                    'type': 'SET_SORTING_VALUE',
                },
            ];
      
            store.dispatch(sortingActions.setSortingValue('title'));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('sortMovies', () => {
        test('Dispatches the correct action and payload', () => {
            const moviesDataMock = [{title: 'Aaa'}, {title: 'Bbb'}];
            const expectedActions = [
                {
                    'payload': moviesDataMock,
                    'type': 'SORT_MOVIES',
                },
            ];

            store.dispatch(sortingActions.sortMovies(moviesDataMock));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});