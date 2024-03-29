import React from 'react';
import './Navbar.scss';
import NavItems from '../NavItems/NavItems';
import AuthBtn from "../AuthBtn/AuthBtn";

function Navbar() {

    return (
        <div className={'navbar'}>
            <div className={'logoAndNav'}>
                <img src='/images/logo.svg' alt='logo'/>
                <NavItems/>
            </div>
            <AuthBtn/>
        </div>
    )
}

export default Navbar;