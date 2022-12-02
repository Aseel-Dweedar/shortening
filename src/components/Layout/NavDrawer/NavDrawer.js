import React, {useState} from 'react';
import './NavDrawer.scss';

function NavDrawer() {

    const [showDrawer, setShowDrawer] = useState(false)

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer)
    }

    // const drawerRef = useRef(null);
    // const [option, setOption] = useState(null)
    //
    // const handleClickOutside = (event) => {
    //     if (!document.getElementById(option).contains(event.target)) {
    //         setOption(null)
    //     }
    // }
    //
    // useEffect(() => {
    //     if (option) {
    //         document.addEventListener("mousedown", handleClickOutside, {once: true});
    //         return () => {
    //             document.removeEventListener("mousedown", handleClickOutside);
    //         };
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [option]);


    return (
        <>
            <div className={'NavDrawer'}>
                <img src='/images/logo.svg' alt='logo'/>
                <i onClick={toggleDrawer} className={`fa-solid fa-bars`}></i>
            </div>
            {showDrawer &&
                <div>
                    <div>
                        Nav todo
                    </div>
                </div>
            }
        </>
    )
}

export default NavDrawer;