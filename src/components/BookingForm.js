import React from "react";
import {useState} from "react";

const BookingForm =({ availableTimes, setAvailableTimes })=>{

const [formInputs, setFormInputs] = useState({
    date:"",
    time:availableTimes[0],
    numberOfGuests:1,
    occasion:"Birthday"
})

const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormInputs({ ...formInputs, [id]: value });
};

const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formInputs)
};

    return (
        <form onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
             <label htmlFor="date">Choose date</label>
            <input type="date" id="date" onChange={handleInputChange}/>
            <label htmlFor="time">Choose time</label>
            <select id="time" onChange={handleInputChange}>
                {availableTimes.map((slot)=>{return (
                    <option key={slot}>{slot}</option>
                )})}
            </select>
            <label htmlFor="numberOfGuests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="numberOfGuests" onChange={handleInputChange}/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={formInputs.occasion} onChange={handleInputChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
             </select>

            <input type="submit" value="Make Your reservation"/>
        </form>
    )
}

export default BookingForm;