import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBar = (props) => {
    const { inputValue, moviesFilterOnChange, handleSearch } = props;
    return (
        <>
            <input type="text" value = {inputValue} onChange = {moviesFilterOnChange} placeholder = 'Search ...'/>
            <button type="button" onClick = {handleSearch}> Search </button>
        </>
    );
};

SearchBar.propTypes = {
    inputValue: PropTypes.string,
    moviesFilterOnChange: PropTypes.func,
    handleSearch: PropTypes.func
};

SearchBar.defaultProps = {
    inputValue: '',
    moviesFilterOnChange: () => {},
    handleSearch: () => {}
};

export default SearchBar;