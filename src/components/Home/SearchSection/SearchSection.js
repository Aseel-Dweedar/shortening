import React from 'react';
import './SearchSection.scss'
import CyanBtn from "../../../sections/CyanBtn/CyanBtn";
import {useSelector} from "react-redux";

function SearchSection() {

    const screenWidth = useSelector(state => state.home.screenWidth)

    return (
        <div className={'searchSection'}>
            <div className={'emailContainer'}>
                <input className={'email'} type='text' placeholder='Shorten a link here'/>
                <CyanBtn
                    onClick={() => {
                    }}
                    extraStyle={{
                        width: screenWidth > 375 ? '20%' : '100%',
                        height: '100%',
                        borderRadius: '6px'
                    }}
                >Shorten It!</CyanBtn>
            </div>
            <h1>hi</h1>
            <br/>
            <h1>hi</h1>
            <br/>
            <h1>hi</h1>
            <br/>
            <h1>hi</h1>
            <br/>
            <h1>hi</h1>
        </div>
    )
}

export default SearchSection;