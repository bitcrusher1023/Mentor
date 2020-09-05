import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBar = (props) => {
    const { searchValue, searchOnChange, handleKeyDown, handleSearch } = props;
    return (
        <>
            <SearchText>find your movies</SearchText>
            <Wrapper>
                <SearchInput type="text"
                    placeholder = 'What do you want to watch?'
                    value = {searchValue}
                    onChange = {searchOnChange}
                    onKeyDown = {handleKeyDown}
                />
                <Button type="button" onClick = {handleSearch}> Search </Button>
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-item: center;
    width: 90%;
    margin: 0 auto;
`;

const SearchText = styled.p`
    width: 90%;
    text-transform: uppercase;
    color: #fff;
    font-size: 40px;
    margin: 50px auto 40px;
`;

const SearchInput = styled.input`
    width: 74%;
    height: 40px;
    border: none;
    opacity: 0.8;
    color: #555;
    font-size: 18px;
    background: #232323;
    padding: 10px 20px;
`;

const Button = styled.button`
    width: 20%;
    height: 60px;
    padding: 10px 20px;
    background: #f65261;
    font-size: 20px;
    color: #fff;
    text-transform: uppercase;
`;

SearchBar.propTypes = {
    searchValue: PropTypes.string,
    searchOnChange: PropTypes.func,
    handleKeyDown: PropTypes.func,
    handleSearch: PropTypes.func
};

SearchBar.defaultProps = {
    searchValue: '',
    searchOnChange: () => {},
    handleKeyDown: () => {},
    handleSearch: () => {}
};

export default SearchBar;
