import React, { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../mockAPI.js";
import { useNavigate } from "react-router-dom";

export const initializeTimes = async () => {
  try {
    const currentDate = new Date().toISOString().split("T")[0];
    const initialTimes = await fetchAPI(currentDate);
    return initialTimes;
  } catch (error) {
    console.error("Error initializing times:", error);
    return [];
  }
};

export const updateTimes = async (selectedDate) => {
  try {
    const times = await fetchAPI(selectedDate);
    return times;
  } catch (error) {
    console.error("Error updating times:", error);
    return [];
  }
};

const Reservations = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event, formInputs) => {
    event.preventDefault();
    try {
      const submissionResult = await submitAPI(formInputs);
      if (submissionResult === true) {
        console.log("Form submitted successfully:", formInputs);
        navigate("/booking-confirmed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  //reducer - whatever comes out of it, becomes the new state, regardless what the state is named

  const reducer = (state, action) => {
    // reducer should be the updateTimes function
    if (action.type === "updateTimes") {
      return updateTimes(action.selectedDate);
    } else {
      return state;
    }
  };

  const [initialTimes, dispatch] = useReducer(reducer, initializeTimes());
  // reducer should have availabletimes, dispatch, avaibaetimes shoulf be init with initializeTimes
  //updateTimes will change the availableTimes based on the selected date.

  return (
    <>
      <section id="reservations">
        <h1>Little Lemon Reserve-a-Table</h1>
        <BookingForm
          initialTimesPromise={initialTimes}
          handleSubmit={handleSubmit}
          updateTimes={updateTimes}
        />
      </section>
    </>
  );
};

export default Reservations;
