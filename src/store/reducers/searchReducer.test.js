import { searchReducer } from './searchReducer';
import {
    SET_SEARCH_VALUE
} from '../actions/searchActions';

const initialState = {
    searchValue: '',
    searchBy: 'title'
};

describe('search_reducer', () => {
    describe('INITIAL_STATE', () => {
        test('is correct', () => {
            expect(searchReducer(undefined, {})).toEqual(initialState);
        });
    });
      
    describe('SET_SEARCH_VALUE', () => {
        test('returns the correct state', () => {
            const action = { type: SET_SEARCH_VALUE, payload: 'MockSearchValue' };

            expect(searchReducer(undefined, action)).toMatchSnapshot();
        });
    });
});
