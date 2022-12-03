import React from 'react';
import './AuthBtn.scss';
import CyanBtn from "../../../sections/CyanBtn/CyanBtn";

function AuthBtn(props) {

    return (
        <div className={`AuthBtn ${props.isMobile ? 'MobileBtn' : ""}`}>
            <button className={'Login'}>Login</button>
            <CyanBtn
                onClick={() => {
                }}
                extraStyle={{
                    width: '100%',
                    height: '35px',
                    fontSize: '15px',
                    borderRadius: '20px'
                }}
            >Sign Up</CyanBtn>
        </div>
    )
}

export default AuthBtn;