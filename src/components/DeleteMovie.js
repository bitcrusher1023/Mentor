/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CloseButton from './CloseButton';

const DeleteMovie = ({handleShowDelete, onDelete}) => {
    return (
        <div>
            <ModalContent>
                <Title>Delete movie</Title>
                <div onClick={handleShowDelete}>
                    <CloseButton/>
                </div>
                <Text>Are you sure you want to delete this movie?</Text>
                <BtnWrap>
                    <ConfirmBtn onClick={onDelete}>
                        Confirm
                    </ConfirmBtn>
                </BtnWrap>
            </ModalContent>
            <Overlay />
        </div>
    );
};

const ModalContent = styled.div`
    width: 40%;
    position: absolute; 
    top: 33rem;
    left: 50%;
    margin-left: -25%;
    padding: 60px;
    z-index: 5;
    background: #232323;
    transition: all 0.8s ease;
`;

const Overlay = styled.div`
    z-index: 3;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
    background: rgb(27 24 24 / 80%);
    backdrop-filter: blur(px);
`;

const Title = styled.p`
    color: #fff;
    font-size: 2.4rem;
    text-transform: uppercase;
    margin-top: 0;
`;

const Text = styled.p`
    color: #fff;
    font-size: 1.6rem;
    margin-top: 0;
`;

const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 80px;
`;

const ConfirmBtn = styled.button`
    width: 30%;
    height: 60px;
    padding: 10px 20px;
    background: #f65261;
    font-size: 1.6rem;
    color: #fff;
    outline: 1px solid #f65261;
    border: none;
    text-transform: uppercase;
`;

DeleteMovie.propTypes = {
    handleShowDelete: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default DeleteMovie;
