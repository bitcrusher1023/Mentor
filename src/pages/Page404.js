import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import NotFindURL from '../components/NotFindURL';

const Page404 = () => {

    return (
        <Wrapper>
            <Logo />
            <NotFindURL />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    background: #121212;

    & > p {
        padding: 30px 60px;
    }
`;

export default Page404;
