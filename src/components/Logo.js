import React from 'react';
import styled from 'styled-components';

const Logo = () => {
    return (
        <LogoName><span>Netflix</span>roulette</LogoName>
    );
};

const LogoName = styled.p`
    color: #f65261;
    font-size: 20px;
    margin: 0;

    span {
        font-weight: bold;
    }
`;

export default Logo;
