import configureStore from 'redux-mock-store';
import * as searchActions from './searchActions';

const mockStore = configureStore();
const store = mockStore();

describe('search_actions', () => {
    beforeEach(() => {
        store.clearActions();
    });
  
    describe('setSearchValue', () => {
        test('Dispatches the correct action and payload', () => {
            const mockSearchValue = 'AVI';
            const expectedActions = [
                {
                    'payload': mockSearchValue,
                    'type': 'SET_SEARCH_VALUE',
                },
            ];
      
            store.dispatch(searchActions.setSearchValue(mockSearchValue));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});