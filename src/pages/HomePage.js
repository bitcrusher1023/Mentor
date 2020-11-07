import React from 'react';
import styled from 'styled-components';
import MoviesFilter from '../containers/MoviesFilter';
import MoviesSorting from '../containers/MoviesSorting';
import MoviesContainer from '../containers/MoviesContainer';
import Header from '../containers/Header';
import NotFound from '../components/NotFound';

const HomePage = () => {

    return (
        <Wrapper>
            <Header/>
            <MovieContainerWrapper>
                <ActionBar>
                    <MoviesFilter />
                    <MoviesSorting />
                </ActionBar>
                {/* <NotFound /> */}
                <MoviesContainer />
            </MovieContainerWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background: #555;
`;

const MovieContainerWrapper = styled.section`
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

export default HomePage;
