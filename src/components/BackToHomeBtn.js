import React from 'react';
import styled from 'styled-components';

const BackToHomeBtn = () => {
    return (
        <Button>Go back to home</Button>
    );
};

const Button = styled.button`
    height: 60px;
    padding: 10px 20px;
    background: #232323;
    font-size: 1.6rem;
    color: #f65261;
    outline: 1px solid #f65261;
    border: none;
    text-transform: uppercase;
`;

export default BackToHomeBtn;
