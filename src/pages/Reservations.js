import React, {useState} from "react";
import BookingForm from "../components/BookingForm";

const Reservations = () => {

    const updateTimes=()=>{
        
    }

    const [availableTimes, setAvailableTimes] = useState([
        "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ]);
    
    return (
    <>
    <h1>Little Lemon Reserve-a-Table</h1>
    <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
    </>

)}

export default Reservations;