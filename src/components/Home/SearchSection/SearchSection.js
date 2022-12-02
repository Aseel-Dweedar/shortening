import React from 'react';
import './SearchSection.scss'

function SearchSection() {

    return (
        <div className={'searchSection'}>
            <div className={'emailContainer'}>
                <input className={'email'} type='text' placeholder='Shorten a link here'/>
                <button className={'submit'}>Shorten It!</button>
            </div>
        </div>
    )
}

export default SearchSection;