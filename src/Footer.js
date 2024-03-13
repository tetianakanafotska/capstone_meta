import React from "react";
import logo from "./footer_logo.png"
import Nav from "./Nav";

const Footer = () => (
        <footer>
            <img src = {logo} alt="logo"></img>
            <h4>Shortcuts</h4>
            <Nav/>
            <h4>Contact</h4>
            <p>
            Little Lemon <br/>
            1234 Broadway <br/>
            New York, NY 10001 <br/>
            </p>
            <h4>Follow us</h4>
            <ul>
                <li>
                    <a href = "#">Instagram</a>
                </li>
                <li>
                    <a href = "#">Facebook</a>
                </li>
            </ul>
        </footer>
    )

export default Footer;