import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';

const MoviesList = (props) => {
    const { movies, sortValue } = props;
    const moviesList = [...movies];

    moviesList.sort((a,b) => {
        return a[sortValue] > b[sortValue] ? 1 : -1;
    });
    
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
    sortValue: PropTypes.string.isRequired
};

export default MoviesList;
