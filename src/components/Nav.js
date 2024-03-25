import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => (
        <nav>
            <ul>
                <li>
                    <Link to= "/">Home</Link>
                </li>
                <li>
                    <Link to= "/about">About</Link>
                </li>
                <li>
                    <Link to= "/menu">Menu</Link>
                </li>
                <li>
                    <Link to= "/reservations">Reservations</Link>
                </li>
                <li>
                    <Link to= "/order_online">Order online</Link>
                </li>
                <li>
                    <Link to= "/login">Login</Link>
                </li>
            </ul>
        </nav>
    )

export default Nav;