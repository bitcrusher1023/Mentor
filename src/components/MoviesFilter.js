/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MoviesFilter = (props) => {
    const { onClickAll, all, onClick, filters } = props;
    return (
        <>
            <Form>
                <Ul>
                    <li onClick={onClickAll}>
                        <Input
                            id = "all"
                            type="checkbox"
                            checked={all}
                            onChange={() => {}}
                        />
                        <Label htmlFor="all">All</Label>
                    </li>
                    {filters.map((filter, i) =>
                        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                        <li  key={i} data-index={i} onClick={onClick} >
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
        </>
    );
};

const Form = styled.form`
    display: flex;
    margin: 30px 0 40px 0;
`;

const Input = styled.input`
    display: none;

    &:checked~label {
        border-bottom: 2px solid #f65261;
    }
`;

const Label = styled.label`
    color: #fff;
    font-weight: 700;
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

MoviesFilter.propTypes = {
    all: PropTypes.bool.isRequired,
    onClickAll: PropTypes.func,
    onClick: PropTypes.func,
    filters: PropTypes.array.isRequired
};

MoviesFilter.defaultProps = {
    onClickAll: () => {},
    onClick: () => {}
};

export default MoviesFilter;