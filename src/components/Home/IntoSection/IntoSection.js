import React from 'react';
import './IntoSection.scss'

function IntoSection() {


    return (
        <div className={'container'}>
            <div className={'intro'}>
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                <button>Get Started</button>
            </div>
            <img src={'/images/illustration-working.svg'} alt={'working'}/>
        </div>
    )
}

export default IntoSection;