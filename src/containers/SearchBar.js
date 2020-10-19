import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import getMovies from '../store/actions/moviesActions';
import { setSearchValue } from '../store/actions/searchActions';

const SearchBar = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(getMovies({searchValue: value}));
    };

    const handleSearchByEnter = (ev) => {
        if (ev.key === 'Enter') {
            dispatch(getMovies({searchValue: value}));
        }
    };

    const handleSetValue = (ev) => {
        setValue(ev.target.value);
        dispatch(setSearchValue(ev.target.value));
    };

    return (
        <>
            <SearchText>find your movies</SearchText>
            <Wrapper>
                <SearchInput type="text"
                    placeholder = 'What do you want to watch?'
                    value = {value}
                    onChange = {handleSetValue}
                    onKeyDown = {handleSearchByEnter}
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

export default SearchBar;
