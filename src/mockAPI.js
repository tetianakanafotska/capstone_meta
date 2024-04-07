const availableTimesByDate = {
  "2024-04-07": ["10:00", "11:00", "12:00"],
  "2024-04-08": ["11:00", "12:00", "16:00"],
  "2024-04-09": ["09:00", "13:00", "17:00"],
  "2024-04-10": ["12:00", "13:00", "14:00"],
  "2024-04-11": ["14:00", "15:00", "16:00"],
  "2024-04-12": ["10:00", "11:00", "12:00"],
  "2024-04-13": ["14:00", "15:00", "16:00"],
  "2024-04-14": ["10:00", "11:00", "12:00"],
  "2024-04-15": ["14:00", "15:00", "16:00"],
  "2024-04-16": ["10:00", "11:00", "12:00"],
  "2024-04-17": ["14:00", "15:00", "16:00"],
  "2024-04-18": ["10:00", "11:00", "12:00"],
  "2024-04-19": ["14:00", "15:00", "16:00"],
  "2024-04-20": ["10:00", "11:00", "12:00"],
  "2024-04-21": ["14:00", "15:00", "16:00"],
  "2024-04-22": ["10:00", "11:00", "12:00"],
  "2024-04-23": ["14:00", "15:00", "16:00"],
  "2024-04-24": ["10:00", "11:00", "12:00"],
  "2024-04-25": ["14:00", "15:00", "16:00"],
  "2024-04-26": ["10:00", "11:00", "12:00"],
  "2024-04-27": ["14:00", "15:00", "16:00"],
  "2024-04-28": ["14:00", "15:00", "16:00"],
  "2024-04-29": ["13:00", "15:00", "16:00"],
};

const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableTimesByDate[date]) {
        resolve(availableTimesByDate[date]);
      } else {
        reject(new Error("No available times for the selected date."));
      }
    }, 100);
  });
};

const submitAPI = (formInputs) => {
  availableTimesByDate[formInputs.date] = availableTimesByDate[
    formInputs.date
  ].filter((time) => time !== formInputs.time);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formInputs) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 100); // Simulate API delay
  });
};

export { fetchAPI, submitAPI };
