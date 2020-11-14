import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import MoviesList from './MoviesList';

describe('MoviesList component', () => {
    const defaultMovies = [];
    const moviesDataMock = [
        {
            id: 1,
            image: 'https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
            title: 'Avengers',
            genre: 'Action',
            date: '2016',
            url: '',
            overview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan commodo ligula, non gravida arcu imperdiet sed. Donec eu nibh id lectus molestie volutpat non vel sapien. Proin nec imperdiet lectus.',
            runtime: '146',
            rating: '4.8'
        }
    ];

    it('Render NotFindURL snapshot', () => {

        const component = shallow(
            <MemoryRouter>
                <MoviesList movies={defaultMovies} />
            </MemoryRouter>
        );
        expect(component).toMatchSnapshot();
    });

    it('should be not have link with movie id', () => {
        const component = shallow(
            <MemoryRouter>
                <MoviesList movies={defaultMovies}>
                    <Link to="/movie/" />
                </MoviesList>
            </MemoryRouter>
        );
        expect(component.find(Link).props().to).toBe('/movie/');
    });

    it('should be have link with movie id', () => {
        const component = shallow(
            <MemoryRouter>
                <MoviesList movies={moviesDataMock}>
                    {moviesDataMock.map((movie) => (
                        <Link to={`/movie/${movie.id}`} key = {movie.id} />
                    ))}
                </MoviesList>
            </MemoryRouter>
        );
        expect(component.find(Link).props().to).toBe('/movie/1');
    });
});
