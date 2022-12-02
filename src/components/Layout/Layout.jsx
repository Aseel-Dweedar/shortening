import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {resize} from '../../store/home/homeSlice';

function Layout() {

    const dispatch = useDispatch()

    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

    const {screenWidth} = useSelector(state => state.home)

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
    }, [width]);


    return (
        <div>
            {screenWidth}
        </div>
    )
}

export default Layout