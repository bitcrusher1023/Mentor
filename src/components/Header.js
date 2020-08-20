import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Header = (props) => {
    const { searchValue, searchOnChange, handleSearch } = props;
    return (
        <Wrapper>
            <WrapBg>
                <Logo><span>Netflix</span>roulette</Logo>
                <SearchBar
                    searchValue = {searchValue} 
                    searchOnChange = {searchOnChange}
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

const Logo = styled.p`
    color: #f65261;
    font-size: 20px;

    span {
        font-weight: bold;
    }
`;

Header.propTypes = {
    searchValue: PropTypes.string,
    searchOnChange: PropTypes.func,
    handleSearch: PropTypes.func
};

Header.defaultProps = {
    searchValue: '',
    searchOnChange: () => {},
    handleSearch: () => {}
};

export default Header;