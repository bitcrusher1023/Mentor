import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Logo from './Logo';
import SearchBar from '../containers/SearchBar';
import AddMovie from './AddMovie';

const Header = ({ searchValue, searchOnChange, handleKeyDown, handleSearch }) => {
    return (
        <Wrapper>
            <WrapBg>
                <HeaderTop>
                    <Logo><span>Netflix</span>roulette</Logo>
                    <AddMovie/>
                </HeaderTop>
                <SearchBar
                    searchValue = {searchValue} 
                    searchOnChange = {searchOnChange}
                    handleKeyDown = {handleKeyDown}
                    handleSearch = {handleSearch}
                />
            </WrapBg>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    width: 100%;
    height: 460px;
    font-family: Helvetica, sans-serif;
    background-image: url('https://www.indiewire.com/wp-content/uploads/2018/10/Netflix-menu-1.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 14%;
`;

const WrapBg = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px 80px;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
`;

const HeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
`;

Header.propTypes = {
    searchValue: PropTypes.string,
    searchOnChange: PropTypes.func,
    handleKeyDown: PropTypes.func,
    handleSearch: PropTypes.func
};

Header.defaultProps = {
    searchValue: '',
    searchOnChange: () => {},
    handleKeyDown: () => {},
    handleSearch: () => {}
};

export default Header;
