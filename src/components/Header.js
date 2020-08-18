import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = () => {
    return (
        <Wrapper>
            <WrapBg>
                <p><span>Netflix</span>roulette</p>
            </WrapBg>
        </Wrapper>
    );
};

const Wrapper = styled.header`
    width: 100%;
    height: 460px;
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

export default Header;