import React from 'react';
import styled from 'styled-components';
import MoviesFilter from '../containers/MoviesFilter';
import MoviesSorting from '../containers/MoviesSorting';

const ActionBar = () => {
    return (
        <ActionBarContainer>
            <MoviesFilter />
            <MoviesSorting />
        </ActionBarContainer>
    );
};

const ActionBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    padding: 3px 0;
    border-bottom: 2px solid #555;
    box-shadow: 0 5px 5px -5px rgba(0, 0, 0, .5);
`;

export default ActionBar;
