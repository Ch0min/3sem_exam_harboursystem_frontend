import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import "../styles/styles.css";

import khavn from "../images/kastrup-havn.png"
import kmarina from "../images/koege-marina.png"


function Harbours() {
    const navigate = useNavigate()

    return (
        <>
            <h1>HARBOURS</h1>
            <div className="harbour-container">
                <div className="harbour1-content">
                    <img src={khavn} width="500px" height="250px"/>
                    <h2>Kastrup Lystbådehavn</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>
                    <button onClick={() => navigate("/harbourkastruphavn")}>See Boats</button>
                </div>
                <div className="harbour2-content">
                    <img src={kmarina} width="500px" height="250px"/>
                    <h2>Køge Marina</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    </p>
                    <button onClick={() => navigate("/harbourkoegemarina")}>See Boats</button>
                </div>
            </div>

        </>
    );
}

export default Harbours;