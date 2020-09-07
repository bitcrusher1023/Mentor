import React from 'react';
import styled from 'styled-components';

const CloseButton = () => {
    return (
        <CloseBtn/>
    );
};

const CloseBtn = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 20px;
    right: 20px;

    &::after {
        content: '';
        height: 30px;
        border-left: 2px solid #fff;
        position: absolute;
        transform: rotate(45deg);
        left: 14px;
    }

    &::before {
        content: '';
        height: 30px;
        border-left: 2px solid #fff;
        position: absolute;
        transform: rotate(-45deg);
        left: 14px;
    }
`;

export default CloseButton;
