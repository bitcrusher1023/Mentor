/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputField from '../components/InputField';

const AddMovieModal = ({show, handleShow, initialData, onSubmit}) => {

    const [movieData, setMovieData] = useState(initialData);

    const handleSubmit = e => {
        e.preventDefault();
        const newMoveData = {
            ...movieData,
            id: new Date().getTime()
        };
        onSubmit(newMoveData);
    };

    const handleChange = fieldName => fieldValue => {
        setMovieData({
            ...movieData,
            [fieldName]: fieldValue,
        });
    };

    const handleReset = () => {
        setMovieData({
            ...movieData,
            ...initialData
        });
    };

    return (
        <>
            <Wrapper show={show}>
                <ModalContent>
                    <Title>Add movie</Title>
                    <CloseBtn onClick={handleShow}/>
                    <Form onSubmit={handleSubmit}>
                        <InputField
                            label='Title'
                            value={movieData.title}
                            placeholder='Title here'
                            onChange={handleChange('title')}
                        />
                        <InputField
                            label='Release date'
                            type='date'
                            value={movieData.date}
                            placeholder='Select Date'
                            onChange={handleChange('date')}
                        />
                        <InputField
                            label='Movie url'
                            type='url'
                            value={movieData.url}
                            placeholder='Movie url here'
                            onChange={handleChange('url')}
                        />
                        <InputField
                            label='Overview'
                            value={movieData.overview}
                            placeholder='Overview here'
                            onChange={handleChange('overview')}
                        />
                        <InputField
                            label='Runtime'
                            type='number'
                            value={movieData.runtime}
                            placeholder='Runtime here'
                            onChange={handleChange('runtime')}
                        />
                        <BtnWrap>
                            <ResetBtn onClick={handleReset}>
                                Reset
                            </ResetBtn>
                            <SubmitBtn type="submit" value="Submit" />
                        </BtnWrap>
                    </Form>
                </ModalContent>
                <Overlay />
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
`;

const ModalContent = styled.div`
    width: 50%;
    position: absolute; 
    top: 2rem; 
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 80px;
`;

const ResetBtn = styled.button`
    width: 25%;
    height: 60px;
    padding: 10px 20px;
    background: #232323;
    font-size: 1.6rem;
    color: #f65261;
    outline: 1px solid #f65261;
    border: none;
    text-transform: uppercase;
`;

const SubmitBtn = styled.input`
    width: 25%;
    height: 60px;
    margin-left: 16px;
    padding: 10px 20px;
    background: #f65261;
    font-size: 1.6rem;
    color: #fff;
    outline: 1px solid #f65261;
    border: none;
    text-transform: uppercase;
`;

AddMovieModal.propTypes = {
    show: PropTypes.bool,
    handleShow: PropTypes.func,
    onSubmit: PropTypes.func
};

AddMovieModal.defaultProps = {
    show: false,
    handleShow: () => {},
    onSubmit: () => {}
};

export default AddMovieModal;
