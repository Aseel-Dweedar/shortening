import React, {useEffect, useState} from 'react'
import Navbar from "./Navbar/Navbar";
import NavDrawer from "./NavDrawer/NavDrawer";
import {useDispatch} from 'react-redux';
import {resize} from '../../store/home/homeSlice';
import {setAllLinks} from "../../store/shortenLinks/shortenLinksSlice";
import Footer from "./Footer/Footer";

function Layout(props) {

    const dispatch = useDispatch()

    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    const loadLinksFromSession = () => {
        let allLinks = JSON.parse(sessionStorage.getItem("shortenLinks") || "[]")
        dispatch(setAllLinks(allLinks))
    }

    useEffect(() => {
        // set screen width
        setWidth(window.innerWidth)

        // load from session
        loadLinksFromSession()

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
            {props.children}
            <Footer/>
        </>
    )
}

export default Layout