import React from "react";
import logo from '../images/logo.png'
import Nav from "./Nav";

const Header = () => (
        <header>
            <img src = {logo} alt="logo" width="250px"></img>
            <Nav/>
        </header>
    )

export default Header;