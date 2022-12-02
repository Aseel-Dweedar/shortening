import React from 'react';
import IntoSection from "./IntoSection/IntoSection";
import SearchSection from "./SearchSection/SearchSection";
import Statistics from "./Statistics/Statistics";

function Home() {


    return (
        <div>
            <IntoSection/>
            <SearchSection/>
            <Statistics/>
        </div>
    )
}

export default Home;