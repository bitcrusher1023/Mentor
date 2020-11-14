import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackToHomeBtn from './BackToHomeBtn';

const NotFindURL = () => {

    return (
        <Wrapper>
            <Content>Page Not Found</Content>
            <Image src="https://blog.vverh.digital/wp-content/uploads/2020/06/oblojka-404.png" alt="404image" />
            <Link to='/'>
                <BackToHomeBtn />
            </Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 60px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin: 0;
    background: #121212;
`;

const Image = styled.img`
    width: 60%;
    height: auto;
`;

const Content = styled.p`
    color: #fff;
    font-size: 60px;
    font-family: sans-serif;
    text-align: center;
    margin: 0;
`;

export default NotFindURL;
