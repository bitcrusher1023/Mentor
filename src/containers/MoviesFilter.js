/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getFilters } from '../store/selectors';
import { resetFilters, toggleFilter } from '../store/actions/filtersActions';

const MoviesFilter = () => {
    const filters = useSelector(getFilters, shallowEqual);
    const dispatch = useDispatch();
    const allFiltersUnchecked = Object.values(filters).includes(true);
    console.log(filters);
    console.log('render-asdasd');
    const handleResetFilters = useCallback(() => {
        dispatch(resetFilters());
    }, [dispatch]);

    const handleToggleFilter = useCallback((ev) => {
        ev.preventDefault();
        dispatch(toggleFilter(ev.currentTarget.dataset.name.toLowerCase()));
    }, [dispatch]);

    return (
        <Form>
            <Ul>
                <li onClick={handleResetFilters}>
                    <Input
                        id = "all"
                        type="checkbox"
                        checked={!allFiltersUnchecked}
                        onChange={() => {}}
                    />
                    <Label htmlFor="all">All</Label>
                </li>
                {
                    Object.keys(filters).map((key) =>
                        <li  key={key} data-name={key} onClick={handleToggleFilter}>
                            <Input 
                                id={key}
                                type="checkbox"
                                checked={filters[key]}
                                onChange={() => {}}
                            />
                            <Label htmlFor={key}>{key}</Label>
                        </li>)
                }
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
