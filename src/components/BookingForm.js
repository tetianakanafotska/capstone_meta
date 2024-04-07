import React, { useState, useEffect } from "react";

const BookingForm = ({ initialTimesPromise, handleSubmit, updateTimes }) => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [errors, setErrors] = useState({
    date: "",
    numberOfGuests: "",
    firstName: "",
    lastName: "",
  });
  const [touched, setTouched] = useState({
    date: false,
    numberOfGuests: false,
    firstName: false,
    lastName: false,
  });

  // show available times on first loading & set the first available time as a default
  useEffect(() => {
    const fetchInitialTimes = async () => {
      try {
        const times = await initialTimesPromise;
        setAvailableTimes(times);
        setFormInputs((prevInputs) => ({
          ...prevInputs,
          time: times[0],
        }));
      } catch (error) {
        console.error("Error fetching available times:", error);
      }
    };
    fetchInitialTimes();
  }, [initialTimesPromise]);

  const [formInputs, setFormInputs] = useState({
    date: new Date().toISOString().split("T")[0],
    time: availableTimes[0],
    numberOfGuests: 1,
    occasion: "Birthday",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  // validation of inputs & error setting
  useEffect(() => {
    const numericValue = parseInt(formInputs.numberOfGuests);
    if (numericValue > 50) {
      setErrors((prevError) => ({
        ...prevError,
        numberOfGuests: "Maximum 50 guests",
      }));
    } else if (numericValue === 0) {
      setErrors((prevError) => ({
        ...prevError,
        numberOfGuests: "Number of guests cannot be 0",
      }));
    } else
      setErrors((prevError) => ({
        ...prevError,
        numberOfGuests: "",
      }));

    const selectedDate = new Date(formInputs.date);
    const today = new Date();
    const differenceInDays = Math.floor(
      (selectedDate - today) / (1000 * 60 * 60 * 24)
    );

    if (differenceInDays > 21) {
      setErrors((prevError) => ({
        ...prevError,
        date: "Oops, you can only book up to 3 weeks in advance",
      }));
    } else if (differenceInDays < -1) {
      setErrors((prevError) => ({
        ...prevError,
        date: "This date is in the past",
      }));
    } else {
      setErrors((prevError) => ({
        ...prevError,
        date: "",
      }));
    }

    if (formInputs.firstName.length > 0 && formInputs.firstName.length < 2) {
      setErrors((prevError) => ({
        ...prevError,
        firstName: "Should be more than 2 characters",
      }));
    } else {
      setErrors((prevError) => ({
        ...prevError,
        firstName: "",
      }));
    }
    if (formInputs.lastName.length > 0 && formInputs.lastName.length < 2) {
      setErrors((prevError) => ({
        ...prevError,
        lastName: "Should be more than 2 characters",
      }));
    } else {
      setErrors((prevError) => ({
        ...prevError,
        lastName: "",
      }));
    }
  }, [
    formInputs.numberOfGuests,
    formInputs.date,
    formInputs.firstName,
    formInputs.lastName,
  ]);

  console.log(errors);

  console.log(formInputs);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormInputs({ ...formInputs, [id]: value });
  };

  const handleDateChange = async (event) => {
    const { id, value } = event.target;
    setFormInputs({ ...formInputs, [id]: value });
    const selectedDate = event.target.value;
    try {
      const times = await updateTimes(selectedDate);
      setAvailableTimes(times);
    } catch (error) {
      console.error("Error updating times:", error);
    }
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  return (
    <form onSubmit={(event) => handleSubmit(event, formInputs, setFormInputs)}>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        onChange={handleDateChange}
        onBlur={() => handleBlur("date")}
        defaultValue={formInputs.date}
        required
      />
      {touched.date && errors.date !== "" && <p>{errors.date}</p>}
      <label htmlFor="time">Choose time</label>
      <select
        id="time"
        onChange={handleInputChange}
        value={formInputs.time}
        required
      >
        {availableTimes.map((slot) => {
          return <option key={slot}>{slot}</option>;
        })}
      </select>
      <label htmlFor="numberOfGuests">Number of guests</label>
      <input
        type="number"
        id="numberOfGuests"
        onChange={handleInputChange}
        max="50"
        min="1"
        value={formInputs.numberOfGuests}
        onBlur={() => handleBlur("numberOfGuests")}
        onKeyDown={(event) => {
          if (/[-]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        required
      />
      {touched.numberOfGuests && errors.numberOfGuests && (
        <p>{errors.numberOfGuests}</p>
      )}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={formInputs.occasion}
        onChange={handleInputChange}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <label htmlFor="firstName">First name</label>
      <input
        type="text"
        id="firstName"
        onChange={handleInputChange}
        minLength={2}
        onBlur={() => handleBlur("firstName")}
        required
      />
      {touched.firstName && errors.firstName !== "" && (
        <p>{errors.firstName}</p>
      )}
      <label htmlFor="lastName">Last name</label>
      <input
        type="text"
        id="lastName"
        onChange={handleInputChange}
        minLength={2}
        onBlur={() => handleBlur("lastName")}
        required
      />
      {touched.lastName && errors.lastName !== "" && <p>{errors.lastName}</p>}
      <label htmlFor="email">Email</label>
      <input type="email" id="email" onChange={handleInputChange} required />

      <label htmlFor="message">Your message (optional)</label>
      <textarea id="message" onChange={handleInputChange} />

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!Object.values(errors).length}
        aria-label="Submit the form"
      />
    </form>
  );
};

export default BookingForm;
