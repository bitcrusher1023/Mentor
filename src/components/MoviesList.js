import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MovieCard from './MovieCard';

const MoviesList = (props) => {
    const { movies, filteredMovies } = props;
    const moviesList = filteredMovies.length ? filteredMovies: movies;
    return (
        <>
            <MoviesCount>
                <b>{moviesList.length}</b> movies found
            </MoviesCount>
            <Wrapper>
                {moviesList.map((movie) => (
                    <MovieCard
                        image = {movie.image}
                        title = {movie.title}
                        description = {movie.description}
                        date = {movie.date}
                        key = {movie.id}
                    />
                ))}
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const MoviesCount = styled.p`
    color: #fff;
    margin: 0;
    padding: 20px 0 10px;
`;

MoviesList.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    movies: PropTypes.array.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    filteredMovies: PropTypes.array.isRequired
};

export default MoviesList;