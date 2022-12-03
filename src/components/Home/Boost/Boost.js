import React from 'react';
import './Boost.scss'
import CyanBtn from "../../../sections/CyanBtn/CyanBtn";

function Boost() {

    return (
        <div className={'boost'}>
            <h2>Boost Your Links Today</h2>
            <CyanBtn extraStyle={{
                width: '200px',
                height: '50px',
                marginTop: '10px',
                borderRadius: '25px'
            }}
            >Get Started</CyanBtn>
        </div>
    )
}

export default Boost;