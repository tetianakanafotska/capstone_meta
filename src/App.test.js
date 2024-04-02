import { render, screen } from "@testing-library/react";
import Reservations from "./pages/Reservations";
import { updateTimes, initializeTimes } from "./pages/Reservations";
import { BrowserRouter as Router } from "react-router-dom";

test("Renders the BookingForm heading", () => {
  render(
    <Router>
      <Reservations />
    </Router>
  );
  const headingElement = screen.getByText("Little Lemon Reserve-a-Table");
  expect(headingElement).toBeInTheDocument();
});

describe("updateTimes function", () => {
  test("should return an array of times based on selected date", async () => {
    const selectedDate = "2024-04-20";
    const expectedTimes = ["14:00", "15:00", "16:00"];
    const times = await updateTimes(selectedDate);
    expect(times).toEqual(expectedTimes);
  });
});

describe("initializeTimes function", () => {
  describe("initializeTimes function", () => {
    test("should return an array of initial times", async () => {
      const expectedTimes = ["09:00", "13:00", "17:00"];
      const times = await initializeTimes(); // Using await to handle the asynchronous nature

      expect(times).toEqual(expectedTimes);
    });
  });
});
