import { sortingReducer } from './sortingReducer';
import {
    SET_SORTING_VALUE
} from '../actions/sortingActions';

const initialState = {
    sortingValue: 'release_date',
};

describe('sorting_reducer', () => {
    describe('INITIAL_STATE', () => {
        test('is correct', () => {
            expect(sortingReducer(undefined, {})).toEqual(initialState);
        });
    });
      
    describe('SET_SORTING_VALUE', () => {
        test('returns the correct state', () => {
            const action = { type: SET_SORTING_VALUE, payload: 'title' };
          
            expect(sortingReducer(initialState, action)).toEqual({
                ...initialState,
                sortingValue: 'title',
            });
        });
    });
});