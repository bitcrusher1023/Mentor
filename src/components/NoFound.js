import React from 'react';
import styled from 'styled-components';

const NoFound = () => {
    return (
        <Content>No Movie Found</Content>
    );
};

const Content = styled.p`
    padding: 160px 0;
    color: #fff;
    font-size: 40px;
    text-align: center;
    margin: 0;
`;

export default NoFound;
