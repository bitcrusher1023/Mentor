import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MovieCard from './MovieCard';

const MoviesList = ({ movies }) => {
    return (
        <>
            <MoviesCount>
                <b>{movies.length}</b> movies found
            </MoviesCount>
            <Wrapper>
                {movies.map((movie) => (
                    <Link to={`/movie/${movie.id}`} key = {movie.id}>
                        <MovieCard
                            movie = {movie}
                            key = {movie.id}
                            image = {movie.poster_path}
                            title = {movie.title}
                            genres = {movie.genres}
                            date = {movie.release_date}
                        />
                    </Link>
                   
                ))}
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    a {
        width: 30%;
    }
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
