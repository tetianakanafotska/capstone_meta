import React from "react";
import MarioAdrian1 from "./images/MarioAdrian1.jpg";
import MarioAdrian2 from "./images/MarioAdrian2.jpg"

const Testimonials = () => (
            <article className="about">
                <div>
                    <h2>About</h2>
                    <h4>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</h4>
                </div>
                <div>
                    <img className="img1" src={MarioAdrian1} alt="chef brothers in a kitchen" width="305px"></img>
                </div>
                <div>
                    <img className="img2" src={MarioAdrian2} alt="chef brothers laughing" width="330px"></img>
                </div>
            </article>
    )

export default Testimonials;