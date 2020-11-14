import { filtersReducer } from './filtersReducer';
import {
    RESET_FILTERS,
    TOGGLE_FILTER
} from '../actions/filtersActions';

describe('filters_reducer', () => {
    describe('INITIAL_STATE', () => {
        test('is correct', () => {
            const action = { type: 'dummy_action' };
            expect(filtersReducer(undefined, action)).toMatchSnapshot();
        });
    });
      
    describe('RESET_FILTERS', () => {
        test('returns the correct state', () => {
            const action = { type: RESET_FILTERS };

            expect(filtersReducer(undefined, action)).toMatchSnapshot();
        });
    });

    describe('TOGGLE_FILTER', () => {
        test('returns the correct state', () => {
            const filter = 'romance';
            const action = { type: TOGGLE_FILTER, payload: filter };

            expect(filtersReducer(undefined, action)).toMatchSnapshot();
        });
    });
});