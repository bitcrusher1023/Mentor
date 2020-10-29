/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MoviesFilter from './MoviesFilter';
import MoviesSorting from './MoviesSorting';
import MoviesList from './MoviesList';
import NoFound from '../components/NoFound';

const MoviesResult = (props) => {
    const { movies } = props;

    return (
        movies.length > 0 
        ? <MoviesList movies = {movies} />
        : <NoFound/>
    );
};



MoviesResult.propTypes = {
    movies: PropTypes.array.isRequired
};

export default MoviesResult;
