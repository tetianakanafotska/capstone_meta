import React, { useState, useEffect } from "react";

const BookingForm = ({ initialTimesPromise, handleSubmit, updateTimes }) => {
  const [formInputs, setFormInputs] = useState({
    date: new Date().toISOString().split("T")[0],
    time: "",
    numberOfGuests: 1,
    occasion: "Birthday",
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const fetchInitialTimes = async () => {
      try {
        const times = await initialTimesPromise;
        setAvailableTimes(times);
      } catch (error) {
        console.error("Error fetching available times:", error);
      }
    };
    fetchInitialTimes();
  }, [initialTimesPromise]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormInputs({ ...formInputs, [id]: value });
  };

  const handleDateChange = async (event) => {
    const { id, value } = event.target;
    setFormInputs({ ...formInputs, [id]: value });
    const selectedDate = event.target.value;
    try {
      const times = await updateTimes(selectedDate); // dispatch updatetimes function that takes selectedDate as arg
      setAvailableTimes(times);
    } catch (error) {
      console.error("Error updating times:", error);
    }
  };

  console.log(formInputs.time);
  console.log(formInputs);

  return (
    <form onSubmit={(event) => handleSubmit(event, formInputs)}>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        onChange={handleDateChange}
        defaultValue={formInputs.date}
      />
      <label htmlFor="time">Choose time</label>
      <select id="time" onChange={handleInputChange}>
        {availableTimes.map((slot) => {
          return <option key={slot}>{slot}</option>;
        })}
      </select>
      <label htmlFor="numberOfGuests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        id="numberOfGuests"
        onChange={handleInputChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formInputs.occasion}
        onChange={handleInputChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
