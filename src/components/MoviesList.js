import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MovieCard from './MovieCard';

const MoviesList = (props) => {
    const { movies, inputValue, moviesFilterOnChange } = props;
    return (
        <>
            <input type="text" value={inputValue} onChange={moviesFilterOnChange} />
            <MoviesCount>
                <b>{movies.length}</b> movies found
            </MoviesCount>
            <Wrapper>
                {movies.map((movie) => (
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
    inputValue: PropTypes.string,
    moviesFilterOnChange: PropTypes.func
};

MoviesList.defaultProps = {
    inputValue: '',
    moviesFilterOnChange: () => {}
};

export default MoviesList;