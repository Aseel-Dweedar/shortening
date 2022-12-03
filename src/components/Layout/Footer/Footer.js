import React from 'react';
import './Footer.scss';
import NavItems from '../NavItems/NavItems';
import SocialMedia from "./SocialMedia/SocialMedia";

function Footer() {

    return (
        <footer className={'Footer'}>
                <img className={'logo'} src='/images/logo.svg' alt='logo'/>
                <NavItems isFooter/>
                <SocialMedia/>
        </footer>
    )
}

export default Footer;