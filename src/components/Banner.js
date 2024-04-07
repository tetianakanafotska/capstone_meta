import React from "react";
import restaurantfood from "../images/restaurantfood.jpg";
import { Link } from "react-router-dom";

const Banner = () => (
  <article className="banner">
    <img src={restaurantfood} alt="waiter serving food" width="390px"></img>
    <h1>Little Lemon</h1>
    <h3>Chicago</h3>
    <h4>
      We are a family owned Mediterranean restaurant focused on traditional
      recipes with a modern twist.
    </h4>

    <Link to="../reservations">
      <button className="mainbutton">Reserve table</button>
    </Link>
  </article>
);

export default Banner;
