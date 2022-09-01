import React from "react";
import "./navbar.css";
import {Button} from "@mui/material";

function Navbar() {
    return <div className={"nav-container"}>
        <nav>
            <ul>
                <span className={"color"}><li>Home</li></span>
                <li>About</li>
                <li>Top-up</li>
                <li>Help</li>
            </ul>
            <div className={"button-wrapper"}>
                <Button className={"sign-in"}>Sign In</Button>
                <Button className={"register"}>Register</Button>
            </div>

        </nav>

    </div>
}

export default Navbar