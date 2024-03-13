import React from "react";
import logo from './logo.png'
import Nav from "./Nav";

const Header = () => (
        <header>
            <img src = {logo} alt="logo"></img>
            <Nav/>
        </header>
    )

export default Header;