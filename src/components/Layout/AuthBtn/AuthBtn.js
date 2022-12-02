import React from 'react';
import './AuthBtn.scss';

function AuthBtn(props) {

    return (
        <div className={`AuthBtn ${props.isMobile ? 'MobileItems' : ""}`}>
            <button className={'Login'}>Login</button>
            <button className={'SignUp'}>Sign Up</button>
        </div>
    )
}

export default AuthBtn;