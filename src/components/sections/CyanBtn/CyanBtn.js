import React from 'react';
import './CyanBtn.scss';

function CyanBtn({extraStyle, children, onClick}) {

    return (
        <button
            className={'cyanBtn'}
            style={{...extraStyle}}
            onClick={onClick}
        >{children}</button>
    )
}

export default CyanBtn;