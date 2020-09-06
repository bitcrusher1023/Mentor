import React from 'react';
import styled from 'styled-components';

const AddMovie = ({handleShow}) => {
    return (
        <Button onClick={handleShow}>+ Add Movie</Button>
    );
};

const Button = styled.button`
    height: 50px;
    padding: 0px 20px;
    color: #f65261;
    font-size: 20px;
    text-align: center;
    background: hsl(0 0% 33% / 0.7);
    border: 0;
    border-radius: 4px;
    text-transform: uppercase;
    cursor: pointer;
`;

export default AddMovie;
