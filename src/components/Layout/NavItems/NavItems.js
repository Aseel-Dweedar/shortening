import React from 'react';
import './NavItems.scss';
import items from '../../../data/navigation.json';
import {Link} from "react-router-dom";

function NavItems(props) {


    return (
        <div className={`NavItems ${props.isMobile ? 'MobileItems' : ""}`}>
            {
                items.map(item => (
                    <div key={item.id} className='Item'>
                        <Link to={'/'}>{item.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export default NavItems;