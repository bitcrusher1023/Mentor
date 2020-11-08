import React from 'react';
import styled from 'styled-components';
import MoviesContainer from '../containers/MoviesContainer';
import Header from '../containers/Header';
import ActionBar from '../components/ActionBar';
import NotFound from '../components/NotFound';

const HomePage = () => {

    return (
        <Wrapper>
            <Header/>
            <MovieContainerWrapper>
                <ActionBar />
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

export default HomePage;
