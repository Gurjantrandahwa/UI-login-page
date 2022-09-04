import React from "react";
import "./signIn.css";
import {Button} from "@mui/material";
import {AiOutlineGoogle} from "react-icons/ai";
import {FaFacebook} from "react-icons/fa";

function SignIn() {
    return <div className={"sign-in-container "}>
        <div className={"text-container"}>
            <h1>Welcome to our community</h1>
            <p>A whole new productive journey starts right here</p>
        </div>
        <div className={"form-container"}>
            <form>
                <h2>Sign In</h2>
                <p>Don't have an account? <span className={"color-violet"}>Sign Up</span></p>
                <input type={"email"}
                       placeholder={"Email"}/><br/>
                <input type={"password"}
                       placeholder={"Password"}/><br/>
                <p className={"forget"}>Forget your password?</p>
                <Button>Sign in</Button>
            </form>
            <p className={"divider"}>or</p>
            <div className={"button-container"}>
                <Button>Google</Button>
                <Button>Facebook</Button>
            </div>
        </div>
    </div>
}

export default SignIn