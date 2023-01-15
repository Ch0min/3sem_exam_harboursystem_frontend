import React from "react";
import {useNavigate} from "react-router";

function SignUpBtn() {
    const navigate = useNavigate()

    return (
        <div className="login-container">
            <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
    );
}

export default SignUpBtn;