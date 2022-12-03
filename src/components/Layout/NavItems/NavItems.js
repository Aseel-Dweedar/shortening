import React from 'react';
import './NavItems.scss';
import items from '../../../data/navigation.json';
import {Link} from "react-router-dom";

function NavItems(props) {

    return (
        <div className={`navItems ${props.isMobile ? 'mobileItems' : ""} ${props.isFooter ? 'footerItems' : ""}`}>
            {
                items.map(item => (
                    <div key={item.id} className='item'>
                        <Link className={'itemLink'} to={'/'}>{item.name}</Link>
                        {
                            props.isFooter &&
                            <div className={'optionsContainer'}>
                                {item.options.map((option, i) => (
                                    <Link key={i} to={'/'}>{option.name}</Link>
                                ))}
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default NavItems;