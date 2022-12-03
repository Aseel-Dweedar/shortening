import React from 'react';
import './SocialMedia.scss';
import {Link} from "react-router-dom";

const items = [
    {
        name:'facebook',
        path:"/"
    },
    {
        name:'twitter',
        path:"/"
    },
    {
        name:'instagram',
        path:"/"
    },
    {
        name:'pinterest',
        path:"/"
    },
]

function SocialMedia() {

    return (
        <div className='SocialMedia'>
            {
                items.map((item,i) => (
                    <div key={i} className='SocialMediaItem'>
                        <Link to={item.path}>
                            <div className={'iconWrapper'}>
                                <img className={'SocialMediaItem'} src={`/images/icon-${item.name}.svg`} alt={item.name}/>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default SocialMedia;