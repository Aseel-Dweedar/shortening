import React from 'react';
import './Drawer.scss';
import NavItems from "../../NavItems/NavItems";
import AuthBtn from "../../AuthBtn/AuthBtn";

function Drawer() {

    return (
        <div id={'drawer'} className={'drawerContainer'}>
            <div className={'drawer'}>
                <div className={'itemsSection'}>
                    <NavItems isMobile/>
                </div>
                <div className={'btnSection'}>
                    <AuthBtn isMobile/>
                </div>
            </div>
        </div>
    )
}

export default Drawer;