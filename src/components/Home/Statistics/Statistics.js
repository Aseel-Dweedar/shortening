import React from 'react';
import './Statistics.scss';
import Card from "../../sections/Card/Card";

const cards = [
    {
        src: '/images/icon-brand-recognition.svg',
        title:'Brand Recognition',
        description:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
    },
    {
        src: '/images/icon-detailed-records.svg',
        title:'Detailed Records',
        description:"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    },
    {
        src: '/images/icon-fully-customizable.svg',
        title:'Fully Customizable',
        description:"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    },
]

function Statistics() {

    return (
        <div className={'statisticsContainer'}>
            <div className={'title'}>
                <h3>Advanced Statistics</h3>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className={'cardsContainer'}>
                <div className={'cross-line'}></div>
                <div className={'cards'}>
                {
                    cards.map((item,i) => (
                        <div key={i} className={`card-${i}`}>
                            <Card item={item} />
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Statistics;