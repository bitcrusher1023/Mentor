/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-param-reassign */
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import MoviesContainer from './MoviesContainer';
import Footer from '../components/Footer';
import ErrorBoundary from './ErrorBounding';

import MoviesFilter from './MoviesFilter';
import MoviesSorting from './MoviesSorting'

const App = () => {
    console.log('render')
    return (
        <>
            <Wrapper>
                <ErrorBoundary>
                    <Header/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <MovieContainerWrapper>
                    <ActionBar>
                        <MoviesFilter />
                        <MoviesSorting />
                    </ActionBar>
                        <MoviesContainer />
                    </MovieContainerWrapper>
                </ErrorBoundary>
            </Wrapper>
            <Footer/>
        </>
    );
}

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

export default App;
