/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setAllFilters, setFilters } from '../store/actions/filtersActions';
import getMovies from '../store/actions/moviesActions';

const MoviesFilter = () => {
    const filtersAll = useSelector(state => state.filters.allFilters);
    const allChecked = useSelector(state => state.filters.allFiltersChecked);

    const [allFilters, setFiltersData] = useState(filtersAll);

    const dispatch = useDispatch();

    const onClickAll = () => {
        dispatch(setAllFilters());
        dispatch(getMovies());
    };

    const onClickFilter = (ev) => {
        ev.preventDefault();
        const { index } = ev.currentTarget.dataset;
        dispatch(setFilters(index));
        dispatch(getMovies());
    };

    return (
        <Form>
            <Ul>
                <li onClick={onClickAll}>
                    <Input
                        id = "all"
                        type="checkbox"
                        checked={allChecked}
                        onChange={() => {}}
                    />
                    <Label htmlFor="all">All</Label>
                </li>
                {allFilters.map((filter, i) =>
                    <li  key={filter.id} data-index={i} onClick={onClickFilter} >
                        <Input 
                            id={filter.name}
                            type="checkbox"
                            checked={filter.status}
                            onChange={() => {}}
                        />
                        <Label htmlFor={filter.name}>{filter.name}</Label>
                    </li>)}
            </Ul>
        </Form>
    );
};

const Form = styled.form`
    display: flex;
`;

const Input = styled.input`
    display: none;

    &:checked~label {
        border-bottom: 2px solid #f65261;
    }
`;

const Label = styled.label`
    color: #fff;
    padding: 5px 10px 20px;
    border-bottom: 2px solid #f65261;
    border-bottom: 2px solid rgb(246 81 94 / 0);
    text-transform: uppercase;
    cursor: pointer;
`;

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    padding: 0;
`;

export default MoviesFilter;
