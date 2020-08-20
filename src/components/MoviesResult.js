/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MoviesList from './MoviesList';
import MoviesFilter from './MoviesFilter';
import MoviesSorting from './MoviesSorting';

const MoviesResult = (props) => {
    const { filters, all, onClickAll, onClick, movies, sortValue, sortingOnChange} = props;

    return (
        <>
            <Wrapper>
                <MoviesFilter
                    filters = {filters}
                    all = {all}
                    onClickAll = {onClickAll}
                    onClick = {onClick}
                />
                <MoviesSorting
                    sortValue = {sortValue}
                    sortingOnChange = {sortingOnChange}
                />
                <MoviesList
                    movies = {movies}
                    sortValue = {sortValue}
                />
            </Wrapper>
        </>
    );
};

const Wrapper = styled.section`
    font-family: Helvetica, sans-serif;
    background: #232323;
    padding: 0 80px;
`;

MoviesResult.propTypes = {
    movies: PropTypes.array.isRequired,
    filters: PropTypes.array.isRequired,
    all: PropTypes.bool.isRequired,
    onClickAll: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    sortValue: PropTypes.string.isRequired,
    sortingOnChange: PropTypes.func.isRequired,
};

export default MoviesResult;