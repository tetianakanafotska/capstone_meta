import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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
    const expectedTimes = ["10:00", "11:00", "12:00"];
    const times = await updateTimes(selectedDate);
    expect(times).toEqual(expectedTimes);
  });
});

describe("initializeTimes function", () => {
  test("should return an array of initial times", async () => {
    const expectedTimes = ["10:00", "11:00", "12:00"];
    const times = await initializeTimes(); // Using await to handle the asynchronous nature

    expect(times).toEqual(expectedTimes);
  });
});

describe("input fields perform validation", () => {
  test("date input", async () => {
    render(
      <Router>
        <Reservations />
      </Router>
    );
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("id", "date");
    fireEvent.change(dateInput, { target: { value: "2024-06-01" } });
    fireEvent.blur(dateInput);
    await waitFor(() => {
      expect(
        screen.getByText("Oops, you can only book up to 3 weeks in advance")
      ).toBeInTheDocument();
    });
  });
});
test("number input", async () => {
  render(
    <Router>
      <Reservations />
    </Router>
  );
  const numberOfGuestsInput = screen.getByLabelText("Number of guests");
  expect(numberOfGuestsInput).toBeInTheDocument();
  expect(numberOfGuestsInput).toHaveAttribute("type", "number");
  expect(numberOfGuestsInput).toHaveAttribute("id", "numberOfGuests");
  fireEvent.change(numberOfGuestsInput, { target: { value: "0" } });
  fireEvent.blur(numberOfGuestsInput);
  await waitFor(() => {
    expect(
      screen.getByText("Number of guests cannot be 0")
    ).toBeInTheDocument();
  });
});

test("first name input", async () => {
  render(
    <Router>
      <Reservations />
    </Router>
  );
  const firstNameInput = screen.getByLabelText("First name");
  expect(firstNameInput).toBeInTheDocument();
  expect(firstNameInput).toHaveAttribute("type", "text");
  expect(firstNameInput).toHaveAttribute("id", "firstName");
  fireEvent.change(firstNameInput, { target: { value: "t" } });
  fireEvent.blur(firstNameInput);
  await waitFor(() => {
    expect(
      screen.getByText("Should be more than 2 characters")
    ).toBeInTheDocument();
  });
});

test("last name input", async () => {
  render(
    <Router>
      <Reservations />
    </Router>
  );
  const lastNameInput = screen.getByLabelText("Last name");
  expect(lastNameInput).toBeInTheDocument();
  expect(lastNameInput).toHaveAttribute("type", "text");
  expect(lastNameInput).toHaveAttribute("id", "lastName");
  fireEvent.change(lastNameInput, { target: { value: "t" } });
  fireEvent.blur(lastNameInput);
  await waitFor(() => {
    expect(
      screen.getByText("Should be more than 2 characters")
    ).toBeInTheDocument();
  });
});

test("email input", () => {
  render(
    <Router>
      <Reservations />
    </Router>
  );
  const emailInput = screen.getByLabelText("Email");
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveAttribute("type", "email");
  expect(emailInput).toHaveAttribute("id", "email");
});
