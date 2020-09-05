/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MoviesFilter from './MoviesFilter';
import MoviesSorting from '../components/MoviesSorting';
import MoviesList from './MoviesList';
import NoFound from '../components/NoFound';

const MoviesResult = (props) => {
    const { filters, all, onClickAll, onClick, movies, sortValue, sortingOnChange} = props;

    return (
        <Wrapper>
            <ActionBar>
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
            </ActionBar>
            {movies.length ? (
                <MoviesList
                    movies = {movies}
                    sortValue = {sortValue}
                />
            ) : <NoFound/>
            }
        </Wrapper>
    );
};

const Wrapper = styled.section`
    font-family: Helvetica, sans-serif;
    background: #232323;
    padding: 0 80px;
`;

const ActionBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    padding: 3px 0;
    border-bottom: 2px solid #555;
    box-shadow: 0 5px 5px -5px rgba(0, 0, 0, .5);
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
