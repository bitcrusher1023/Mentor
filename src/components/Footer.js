import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const Footer = () => {
    return (
        <FooterWrap>
            <Logo/>
        </FooterWrap>
    );
};

const FooterWrap = styled.footer`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
    padding: 20px;
    background: #424242;
`;

export default Footer;
