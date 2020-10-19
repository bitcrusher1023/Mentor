import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';

const MoviesList = (props) => {
    const { movies } = props;
    const moviesList = [...movies];
    
    return (
        <>
            <MoviesCount>
                <b>{moviesList.length}</b> movies found
            </MoviesCount>
            <Wrapper>
                {moviesList.map((movie) => (
                    <MovieCard
                        movie = {movie}
                        key = {movie.id}
                        image = {movie.poster_path}
                        title = {movie.title}
                        genre = {movie.genres}
                        date = {movie.release_date}
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
};

export default MoviesList;
