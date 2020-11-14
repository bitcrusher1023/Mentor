import React from 'react';
import styled from 'styled-components';

const SearchBtn = () => {
    return (
        <SearchWrap>
            <SearchBlock>
                <SearchCircle />
                <SearchRectangle />
            </SearchBlock>
        </SearchWrap>
    );
};

const SearchWrap = styled.div`
    position: relative;
    width: 40px;
    height: 30px;
`;

const SearchBlock = styled.div`
    position: relative;
    width: 20px;
    margin: 0 auto;
    padding: 10px 0;
    text-align: center;
`;

const SearchCircle = styled.div`
    width: 10px;
    height: 10px;
    border: 4px solid #f65261;
    border-radius: 50%;
`;

const SearchRectangle = styled.div`
    position: absolute;
    right: 15px;
    bottom: 10px;
    width: 12px;
    transform: rotate(140deg);
    border: 1.5px solid #f65261;
`;

export default SearchBtn;
