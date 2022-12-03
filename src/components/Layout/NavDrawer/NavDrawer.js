import React, {useState,useEffect} from 'react';
import './NavDrawer.scss';
import Drawer from "./Drawer/Drawer";

function NavDrawer() {

    const [showDrawer, setShowDrawer] = useState(false)

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer)
    }

    const handleClickOutside = (event) => {
        if (!document.getElementById('drawer').contains(event.target)) {
            setShowDrawer(false)
        }
    }

    useEffect(() => {
        if (showDrawer) {
            document.addEventListener("mousedown", handleClickOutside, {once: true});
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [showDrawer]);


    return (
        <>
            <div className={'NavDrawer'}>
                <img src='/images/logo.svg' alt='logo'/>
                <i onClick={toggleDrawer} className={`fa-solid fa-bars`}></i>
            </div>
            {showDrawer && <Drawer />}
        </>
    )
}

export default NavDrawer;