import React from "react";
import sarah from "../images/sarah.png"
import emily from "../images/emily.png"
import david from "../images/david.png"
import michel from "../images/michel.png"
import star from "../images/star.png"

const reviews = [
    {
        name: "Sarah J.",
        rating: 5,
        image: sarah,
        text: "The food was nothing short of spectacular - every dish bursting with authentic flavors and fresh ingredients."
    },
    {
        name: "Emily C.",
        rating: 4,
        image: emily,
        text: "Don't miss out on their hummus and falafel; they're simply divine."
    },
    {
        name: "David J.",
        rating: 5,
        image: david,
        text: "The cozy atmosphere and friendly service made our dining experience even more memorable."
    },
    {
        name: "Michel R.",
        rating: 5,
        image: michel,
        text: "This place is definitely worth a visit if you're in the mood for authentic Mediterranean fare!"
    }
]


const Reviewcard= () => {

    const createArray=(a)=>{
        let array=[];
    for (let i=1;i<=a;i++){
        array.push(i);
    }
    return array;
    }
    

    return (
        <article className="cardscroll">
            {reviews.map((review)=> {
                const ratingArray = createArray(review.rating);
                return (
                    <article className="reviewcard" key={review.name}>

                            {ratingArray.map((starCount)=>(
                                <img key={starCount} src={star} alt="star icon" width="26"></img>
                            ))}
    
                        <div className="review-profile">
                            <img src={review.image} alt={review.name} width="70"></img>
                            <h5>{review.name}</h5>
                        </div>
                        <p>{review.text}</p>

                    </article>
                )
            })
            }
        </article>
    )
    
    }
    
    export default Reviewcard;