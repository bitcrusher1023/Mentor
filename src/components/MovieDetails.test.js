import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MovieDetails from './MovieDetails';

describe('MovieDetails component', () => {

    const moviesDataMock = {
        id: 1,
        poster_path: 'https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
        title: 'Avengers',
        genres: ['Action', 'Cartoon'],
        release_date: '2016',
        url: '',
        overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan commodo ligula, non gravida arcu imperdiet sed. Donec eu nibh id lectus molestie volutpat non vel sapien. Proin nec imperdiet lectus.',
        runtime: '146',
        vote_average: '4.8'
    };

    it('Render MovieDetails snapshot', () => {
        const component = render(
            <MemoryRouter>
                <MovieDetails movieData={moviesDataMock} />
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot();
    });
});
