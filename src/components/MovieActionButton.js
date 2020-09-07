import React from 'react';
import styled from 'styled-components';

const MovieActionButton = ({handleShowOptions}) => {
    return (
        <ActionIcon onClick={handleShowOptions}/>
    );
};

const ActionIcon = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    padding: 10px;
    margin: 30px 20px;
    border-radius: 50%;
    background-image: radial-gradient(circle,white 4px,transparent 5px);
    background-size: 100% 33.33%;
    background-color: #232323;
    cursor: pointer;
`;

export default MovieActionButton;
