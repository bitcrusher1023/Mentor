import React, { PureComponent } from 'react';
import styled from 'styled-components';
import MoviesList from './MoviesList';
import SearchBar from './SearchBar';

const movies = [
    {
        id: 1,
        image: 'https://images-na.ssl-images-amazon.com/images/I/71niXI3lxlL._AC_SY679_.jpg',
        title: 'Avengers',
        description: 'Action & Adventure',
        date: 2019
    },
    {
        id: 2,
        image: 'https://cdn.shopify.com/s/files/1/2287/3367/products/product-image-857173408_1024x1024.jpg?v=1568108080',
        title: 'E.T',
        description: 'Action & Adventure',
        date: 2018
    },
    {
        id: 3,
        image: 'https://www.mauvais-genres.com/21970/logan-movie-poster-style-c-adv-29x41-in-2017-james-mangold-hugh-jackman.jpg',
        title: 'Logan',
        description: 'Action & Adventure',
        date: 2018
    },
    {
        id: 4,
        image: 'https://images-na.ssl-images-amazon.com/images/I/71rNJQ2g-EL._AC_SL1178_.jpg',
        title: 'MoonLight',
        description: 'Action & Adventure',
        date: 2018
    },
    {
        id: 5,
        image: 'https://www.joblo.com/assets/images/joblo/posters/2019/01/IO-poster-1.jpg',
        title: 'IO',
        description: 'Action & Adventure',
        date: 2018
    },
    {
        id: 6,
        image: 'https://www.arthipo.com/image/cache/catalog/genel-tasarim/all-posters/sinema-cinema-film-postersleri/yabanci-filmler/pfilm289-fronty-wardrobe-narnia-narniya-poster-cizgi-film-1000x1000.jpg',
        title: 'Narnia',
        description: 'Cartoon',
        date: 2018
    }
];
class MoviesResult extends PureComponent {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        inputValue: '',
        filteredMovies: []
    }

    moviesFilterOnChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    dynamicSearch = () => {
        const { inputValue } = this.state;
        if (!inputValue) return movies;
        return movies.filter(movie => movie.title.toLowerCase().includes(inputValue.toLowerCase()));
    }

    handleSearch = () => {
        const searchResult = this.dynamicSearch();
        this.setState({ filteredMovies: searchResult });
    };

    render() {
        const { inputValue, filteredMovies} = this.state;
        // const moviesList = filteredMovies.length ? filteredMovies: movies;
        return (
            <>
                <SearchBar
                    inputValue = {inputValue} 
                    moviesFilterOnChange = {this.moviesFilterOnChange}
                    handleSearch = {this.handleSearch}
                />
                <Wrapper>
                    <MoviesList
                        movies = {movies}
                        filteredMovies = {filteredMovies}
                    />
                </Wrapper>
            </>
        );
    };
};

const Wrapper = styled.section`
    background: #232323;
    padding: 0 80px;
`;

export default MoviesResult;