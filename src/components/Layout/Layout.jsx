import React, {useEffect, useState} from 'react'
import Navbar from "./Navbar/Navbar";
import NavDrawer from "./NavDrawer/NavDrawer";
import {useDispatch} from 'react-redux';
import {resize} from '../../store/home/homeSlice';

function Layout() {

    const dispatch = useDispatch()

    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    useEffect(() => {
        // set screen width
        setWidth(window.innerWidth)

        // listen to resize events
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    useEffect(() => {
        dispatch(resize(width))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width]);


    return (
        <>
            <header>
                {width >= 768 ? <Navbar/> : <NavDrawer/>}
            </header>
        </>
    )
}

export default Layout