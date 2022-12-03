import React from 'react';
import './Card.scss'

function Card({item}) {

    return (
        <div className={'cardContainer'}>
            <div className={'imgWrapper'}>
                <img src={item.src} alt={'static'}/>
            </div>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
        </div>
    )
}

export default Card;