import React from "react";
import Dishcard from "./Dishcard.js";


const Highlights = () => (
            <article className="highlights">
                <>
                <h2>This week specials!</h2>
                <div>
                    <button className="mainbutton">Menu</button>
                </div>
                </>
            <Dishcard/>
            </article>
    )

export default Highlights;
