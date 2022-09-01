import React from "react";
import "./signIn.css";
import {Button} from "@mui/material";
import {AiOutlineGoogle, AiFillApple} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";

function SignIn() {

    return <div className={"sign-in-container"}>

        <div className={"text-container"}>
            <h1>Welcome to our community</h1>
            <p>A whole new productive journey starts right here</p>
        </div>
        <div className={"form-container"}>
            <form>
                <input type={"email"}
                       placeholder={"Enter your email address"}/><br/>
                <input type={"password"}
                       placeholder={"Password"}/><br/>
                <input type={"checkbox"}/><span>Keep me login</span>
                <span>Recovery Password</span><br/>
                <Button>sign in</Button>
            </form>
            <p>or continue with</p>
            <AiOutlineGoogle/>
            <AiFillApple/>
            <BsFacebook/>
        </div>
    </div>
}

export default SignIn