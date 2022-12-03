import React, {useState, useEffect} from 'react';
import './NavDrawer.scss';
import Drawer from "./Drawer/Drawer";

function NavDrawer() {

    const [showDrawer, setShowDrawer] = useState(false)
    const [up, setUp] = useState("");

    const toggleDrawer = () => {
        if (showDrawer) {
            setUp("up")
            setTimeout(() => {
                setShowDrawer(!showDrawer)
                setUp("")
            }, 280)
        } else {
            setShowDrawer(!showDrawer)
        }
    }

    const handleClickOutside = (event) => {
        if (!document.getElementById('drawer').contains(event.target) &&
            !document.getElementById('drawer-icon').contains(event.target)
        ) {
            toggleDrawer()
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
                <i id='drawer-icon' onClick={toggleDrawer} className={`fa-solid fa-bars`}></i>
            </div>
            {showDrawer && <Drawer class={up}/>}
        </>
    )
}

export default NavDrawer;