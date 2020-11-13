import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import { store } from '../store/configureStore';

describe('MovieCard component', () => {
    const moviesDataMock = {
        id: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
        title: 'Avengers',
        genres: ['Action', 'Cartoon'],
        release_date: '2016'
    };

    it('render MovieCard snapshot', () => {
        const component = shallow(
            <Provider store={store}>
                <MemoryRouter>
                    <MovieCard movie = {moviesDataMock}
                        key = {moviesDataMock.id}
                        image = {moviesDataMock.poster_path}
                        title = {moviesDataMock.title}
                        genres = {moviesDataMock.genres}
                        date = {moviesDataMock.release_date}/>
                </MemoryRouter>
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
});