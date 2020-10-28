/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, {useState} from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CloseButton from '../components/CloseButton';
import { addMovie } from '../store/actions/moviesActions';

const MovieForm = ({handleShow, initialData }) => {

    const options = [
        { value: '', label: 'Select a genre' },
        { value: 'Action', label: 'Action' },
        { value: 'Adventure', label: 'Adventure' },
        { value: 'Animation', label: 'Animation' },
        { value: 'Drama', label: 'Drama' },
        { value: 'Romance', label: 'Romance' },
        { value: 'Family', label: 'Family' },
        { value: 'Fantasy', label: 'Fantasy' },
        { value: 'Comedy', label: 'Comedy' },
    ];

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {...initialData },
        onSubmit: values => {
            dispatch(addMovie(values));
            handleShow();
        },
    });

    return (
        <Wrapper>
            <ModalContent>
                <Title>Add movie</Title>
                <div onClick={handleShow}>
                    <CloseButton/>
                </div>
                <Form onSubmit={formik.handleSubmit}>
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        name="title"
                        type="text"
                        placeholder='Title here'
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                    <Label htmlFor="release_date">Release date</Label>
                    <Input
                        id="release_date"
                        name="release_date"
                        type="date"
                        placeholder='Select Date'
                        onChange={formik.handleChange}
                        value={formik.values.release_date}
                    />
                    <Label htmlFor="poster_path">Release date</Label>
                    <Input
                        id="poster_path"
                        name="poster_path"
                        type="url"
                        placeholder='Movie url here'
                        onChange={formik.handleChange}
                        value={formik.values.poster_path}
                    />
                    <Label htmlFor="overview">Overview</Label>
                    <Input
                        id="overview"
                        name="overview"
                        type="text"
                        placeholder='Overview here'
                        onChange={formik.handleChange}
                        value={formik.values.overview}
                    />
                    <Label htmlFor="runtime">Runtime</Label>
                    <Input
                        id="runtime"
                        name="runtime"
                        type="number"
                        placeholder='Runtime here'
                        onChange={formik.handleChange}
                        value={formik.values.runtime}
                    />
                    {/* <Select
                        id="genres"
                        type="text"
                        name="genres"
                        closeMenuOnSelect={false}
                        isMulti
                        value={formik.values.genres}
                        // onChange={formik.handleChange}
                        onChange={selectedOption => formik.setFieldValue("genres", selectedOption)}
                        options={options}
                        onBlur={formik.handleBlur}
                    /> */}
                    <SelectField
                        name="genres"
                        mode="multiple"
                        multiple
                        // options={options}
                        value={formik.values.genres}
                        onChange={formik.handleChange}
                    >
                        { options.map(opt => {
                            return <option key={opt.value} value={opt.value} label={opt.label} />
                        })}
                    </SelectField>
                    <BtnWrap>
                        <ResetBtn type="reset" onClick={formik.handleReset}>
                            Reset
                        </ResetBtn>
                        <SubmitBtn type="submit" value="Submit" />
                    </BtnWrap>
                </Form>
            </ModalContent>
            <Overlay />
        </Wrapper>
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: #f65261;
    font-size: 1.2rem;
    text-transform: uppercase;
`;

const Input = styled.input`
    height: 30px;
    border: none;
    opacity: 0.8;
    color: #fff;
    font-size: 18px;
    background: #424242;
    padding: 10px 20px;
    margin: 20px 0;
`;

const SelectField = styled.select`
    option {
        font-size: 20px;
        padding: 4px 20px;
    }
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

MovieForm.propTypes = {
    handleShow: PropTypes.func,
    initialData: PropTypes.object
};

MovieForm.defaultProps = {
    handleShow: () => {}
};

export default MovieForm;
