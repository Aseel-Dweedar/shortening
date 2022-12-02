import React from 'react';
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <Layout/>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;