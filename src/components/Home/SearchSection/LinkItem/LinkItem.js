import React from 'react';
import './LinkItem.scss'
import CyanBtn from "../../../sections/CyanBtn/CyanBtn";
import {useSelector} from "react-redux";

function LinkItem({link, onCopyClicked, copiedText, idx}) {

    const screenWidth = useSelector(state => state.home.screenWidth)

    return (
        <div className={'linkContainer'}>
            <p className={'originalLink'}>{link.original}</p>
            <div className={'shortenLink'}>
                <p>{link.shorten}</p>
                {
                    copiedText ?
                        <button className={'copied'}>Copied!</button> :
                        <CyanBtn
                            onClick={() => onCopyClicked(link.shorten, idx)}
                            extraStyle={{
                                width: screenWidth > 375 ? '130px' : '100%',
                                height: screenWidth > 375 ? '100%' : '40px',
                                borderRadius: '6px',
                                fontSize: '15px'
                            }}
                        >Copy</CyanBtn>
                }
            </div>

        </div>
    )
}

export default LinkItem;