import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';

const MoviesList = (props) => {
    const { movies, sortValue, deleteMovie, editMovie } = props;
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
                        movie = {movie}
                        image = {movie.image}
                        title = {movie.title}
                        genre = {movie.genre}
                        date = {movie.date}
                        key = {movie.id}
                        deleteMovie = {deleteMovie}
                        editMovie = {editMovie}
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
    sortValue: PropTypes.string.isRequired,
    deleteMovie: PropTypes.func,
    editMovie: PropTypes.func
};

MoviesList.defaultProps = {
    deleteMovie: () => {},
    editMovie: () => {}
};

export default MoviesList;
