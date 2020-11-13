import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import ActionBar from './ActionBar';
import { store } from '../store/configureStore';

describe('ActionBar component', () => {
    test('render ActionBar snapshot', () => {
        const component = shallow(
            <Provider store={store}>
                <ActionBar />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
});