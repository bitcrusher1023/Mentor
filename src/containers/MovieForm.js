/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CloseButton from '../components/CloseButton';
import { addMovie, updateMovie } from '../store/actions/moviesActions';
import { getAllMovies } from '../store/selectors';

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

    const customValidationSchema = Yup.object().shape({
        title: Yup.string('Provide a Title').required('Title is Required'),
        release_date: Yup.string('Provide a Release date').required('Release date is Required'),
        poster_path: Yup.string('').url('Provide a Valid URL').required('URL is Required'),
        overview: Yup.string('').min(10, 'Must be 10 characters or more').required('Overview is Required'),
        runtime: Yup.string('Provide a Runtime').min(0, 'Must be 0 characters or more').required('Runtime is Required'),
        genres: Yup.string('Choose a Genres').required('Genres is Required'),
    });

    const dispatch = useDispatch();
    const movies = useSelector(getAllMovies);

    const moviesUpdate = (originalMovies, movieToUpdate) => {
        const index = originalMovies.findIndex(movie => movie.id === movieToUpdate.id);
        movies.splice(index, 1, movieToUpdate);
        return [...originalMovies];
    };

    const formik = useFormik({
        initialValues: {...initialData },
        validationSchema: customValidationSchema,
        onSubmit: values => {
            if (initialData.id) {
                const updatedMovies = moviesUpdate(movies, values);
                dispatch(updateMovie(values, updatedMovies));
            } else {
                dispatch(addMovie(values));
            }
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
                        type="text"
                        placeholder='Title here'
                        {...formik.getFieldProps('title')}
                    />
                    {formik.touched.title && formik.errors.title ? (
                        <ErrorMessage>{formik.errors.title}</ErrorMessage>
                    ) : null}
                    <Label htmlFor="release_date">Release date</Label>
                    <Input
                        id="release_date"
                        type="date"
                        placeholder='Select Date'
                        {...formik.getFieldProps('release_date')}
                    />
                    {formik.touched.release_date && formik.errors.release_date ? (
                        <ErrorMessage>{formik.errors.release_date}</ErrorMessage>
                    ) : null}
                    <Label htmlFor="poster_path">Movie url</Label>
                    <Input
                        id="poster_path"
                        type="url"
                        placeholder='Movie url here'
                        {...formik.getFieldProps('poster_path')}
                    />
                    {formik.touched.poster_path && formik.errors.poster_path ? (
                        <ErrorMessage>{formik.errors.poster_path}</ErrorMessage>
                    ) : null}
                    <Label htmlFor="overview">Overview</Label>
                    <Input
                        id="overview"
                        type="text"
                        placeholder='Overview here'
                        {...formik.getFieldProps('overview')}
                    />
                    {formik.touched.overview && formik.errors.overview ? (
                        <ErrorMessage>{formik.errors.overview}</ErrorMessage>
                    ) : null}
                    <Label htmlFor="runtime">Runtime</Label>
                    <Input
                        id="runtime"
                        type="number"
                        placeholder='Runtime here'
                        {...formik.getFieldProps('runtime')}
                    />
                    {formik.touched.runtime && formik.errors.runtime ? (
                        <ErrorMessage>{formik.errors.runtime}</ErrorMessage>
                    ) : null}
                    <Label htmlFor="genres">Genre</Label>
                    <SelectField
                        id="genres"
                        name="genres"
                        multiple
                        value={formik.values.genres}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        { options.map(opt => {
                            return <option key={opt.value} value={opt.value} label={opt.label} />;
                        })}
                    </SelectField>
                    {formik.touched.genres && formik.errors.genres ? (
                        <ErrorMessage>{formik.errors.genres}</ErrorMessage>
                    ) : null}
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
    display: inline-block;
    box-sizing: border-box;
    height: 50px;
    margin: 20px 0;
    padding: 10px 20px;
    border-color: #232323;
    border: none;
    font-size: 16px;
    text-transform: uppercase;
    color: #fff;
    border-image: none;
    outline: 0px;
    appearance: none;
    background: transparent;
    background-repeat: no-repeat;
    background-image: linear-gradient(45deg, transparent 50%, #f65261 50%), linear-gradient(135deg, #f65261 57%, transparent 50%);
    background-position: right 13px top 1em, right 10px top 1em;
    background-size: 5px 5px, 5px 5px;
    opacity: 0.8;
    font-size: 18px;
    background-color: #424242;

    &:focus {
        border: 1px dotted #f65261;
    }

    option {
        padding: 4px 20px;
        color: #555;
        font-size: 20px;
    }
`;

const ErrorMessage = styled.div`
    color: red;
    margin: -10px 0 20px;
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
