/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSortingValue, sortMovies } from '../store/actions/sortingActions';

const MoviesSorting = () => {
    const dispatch = useDispatch();

    const sortingOnChange = (ev) => {
        dispatch(setSortingValue(ev.target.value));
        dispatch(sortMovies());

    };

    return (
        <Form className="filter-menu">
            <Label htmlFor="seriesInput">Sort By</Label>
            <Select id="seriesInput" onChange={sortingOnChange}>
                <option value="release_date">release date</option>
                <option value="title">movie name</option>
                <option value="genres">genre</option>
            </Select>
        </Form>
    );
};

const Form = styled.form`
    margin: 2px 0 6px;;
`;

const Label = styled.label`
    text-transform: uppercase;
    padding: 0 20px;
    color: #555;
`;

const Select = styled.select`
    display: inline-block;
    box-sizing: border-box;
    padding: 0.6em 2em 0.2em 0.5em;
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

    &:focus {
        border: 1px dotted #f65261;
    }

    option {
        color: #555;
    }
`;

export default MoviesSorting;
