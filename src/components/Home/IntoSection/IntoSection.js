import React from 'react';
import './IntoSection.scss'
import CyanBtn from "../../../sections/CyanBtn/CyanBtn";

function IntoSection() {


    return (
        <div className={'introContainer'}>
            <div className={'intro'}>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <CyanBtn
                    onClick={() => {}}
                    extraStyle={{
                        width: '200px',
                        height: '50px',
                        marginTop: '10px',
                        borderRadius:'25px'
                    }}
                >Get Started</CyanBtn>
            </div>
            <img src={'/images/illustration-working.svg'} alt={'working'}/>
        </div>
    )
}

export default IntoSection;