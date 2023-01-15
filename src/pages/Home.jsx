import React from 'react';
import {Outlet} from "react-router-dom";
import "../styles/main.css";

function Home() {

    return (
        <div>

            <h1>Welcome</h1>


            <Outlet/>
        </div>
    );
}

export default Home;