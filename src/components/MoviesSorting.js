/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const  MoviesSorting = props => {
    const { sortingOnChange } = props;

    return (
        <form className="filter-menu">
            <label htmlFor="seriesInput">Sort By</label>
            <select id="seriesInput" onChange={sortingOnChange}>
                <option value="date">release date</option>
                <option value="title">title</option>
                <option value="description">description</option>
                <option value="Holy Trinity">Holy Trinity</option>
            </select>
        </form>
    );
};

MoviesSorting.propTypes = {
    sortingOnChange: PropTypes.func
};

MoviesSorting.defaultProps = {
    sortingOnChange: () => {}
};

export default MoviesSorting;