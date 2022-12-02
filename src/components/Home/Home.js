import React from 'react';
import IntoSection from "./IntoSection/IntoSection";
import SearchSection from "./SearchSection/SearchSection";
import Statistics from "./Statistics/Statistics";
import Boost from "./Boost/Boost";

function Home() {


    return (
        <div>
            <IntoSection/>
            <SearchSection/>
            <Statistics/>
            <Boost />
        </div>
    )
}

export default Home;