import React from "react";
import logo from "./images/footer_logo.png"
import Nav from "./Nav";

const Footer = () => (
        <footer>
            <div>
                <img src = {logo} alt="logo" width="100px"></img>
            </div>
            <div>
                <h4>Shortcuts</h4>
                <Nav/>
            </div>
            <div>
                <h4>Contact</h4>
                <p>
                Little Lemon <br/>
                1234 Broadway <br/>
                New York, NY 10001 <br/>
                </p>
            </div>
            <div>
                <h4>Follow us</h4>
                <ul>
                    <li>
                        <a href = "#">Instagram</a>
                    </li>
                    <li>
                        <a href = "#">Facebook</a>
                    </li>
                </ul>
            </div>
        </footer>
    )

export default Footer;