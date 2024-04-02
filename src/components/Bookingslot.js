import React from "react";

const BookingSlot = ({ time, booked }) => {
  return (
    <li style={{ textDecoration: booked ? "line-through" : "none" }}>{time}</li>
  );
};

export default BookingSlot;
