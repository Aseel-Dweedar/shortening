import React from 'react';
import './CyanBtn.scss';

function CyanBtn({extraStyle, children, onClick, type}) {

    return (
        <button
            type={type}
            className={'cyanBtn'}
            style={{...extraStyle}}
            onClick={onClick}
        >{children}</button>
    )
}

export default CyanBtn;