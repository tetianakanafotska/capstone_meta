import React from "react";

import greeksalad from "../images/greeksalad.jpg";
import bruschetta from "../images/bruscetta.png";
import grilledfish from "../images/grilledfish.jpeg";
import lemondessert from "../images/lemondessert.png";
import pasta from "../images/pasta.jpg";
import bicycle from "../images/bicycle-24.png";

const dishes= [
    {
        image:greeksalad,
        dishname: "Greek Salad",
        price: "12.99$",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        image:grilledfish,
        dishname: "Grilled Fish",
        price: "20$",
        description: "Tender fillets seasoned with Mediterranean herbs, grilled to perfection, served with charred vegetables and zesty lemon dressing. A taste of the sea, kissed by the Mediterranean sun."
    },
    {
        image:bruschetta,
        dishname: "Bruschetta",
        price: "7.99$",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta."
    },
    {
        image:pasta,
        dishname: "Pasta",
        price: "18.99$",
        description: "Al dente noodles tossed with sun-ripened tomatoes, olives, capers, and basil, finished with a drizzle of extra virgin olive oil. A symphony of flavors reminiscent of the Italian coast."
    },
    {
        image:lemondessert,
        dishname: "Lemon Dessert",
        price: "6.99$",
        description: "A heavenly concoction of tangy lemon curd nestled in a buttery shortcrust pastry, topped with a cloud of whipped cream and a sprinkle of zesty lemon zest. A citrusy symphony that will leave your taste buds singing with delight."
    }
]


const Dishcard= () => {

return (
    <article className="cardscroll">
        {dishes.map((dish)=> (
            <article className="dishcard" key={dish.dishname}>
                <img src={dish.image} alt={dish.dishname} width="269"></img>
                <div className="dishtext">
                    <div className="dishtitle">
                        <h5>{dish.dishname}</h5>
                        <p>{dish.price}</p>
                    </div>
                    <p>{dish.description}</p>
                </div>
                <div>
                    <button>Order a delivery <img className="bicycleicon" src={bicycle} width="17"/> </button>
                </div>
            </article>
        ))
        }
    </article>
)

}

export default Dishcard;