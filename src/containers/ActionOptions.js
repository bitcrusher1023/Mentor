import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ActionOptions = ({handleDeleteMovie, handleEditMovie}) => {

    return (
        <Wrapper>
            <OptionItem onClick={handleDeleteMovie}>
                Delete Movie
            </OptionItem>
            <OptionItem onClick={handleEditMovie}>
                Edit Movie
            </OptionItem>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 140px;
    padding: 20px;
    background-color: #232323;
    cursor: pointer;
`;

const OptionItem = styled.p`
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
`;

ActionOptions.propTypes = {
    handleDeleteMovie: PropTypes.func,
    handleEditMovie: PropTypes.func
};

ActionOptions.defaultProps = {
    handleDeleteMovie: () => {},
    handleEditMovie: () => {}
};

export default ActionOptions;
