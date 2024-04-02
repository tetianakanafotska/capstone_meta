import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Menu from "./pages/Menu.js";
import Reservations from "./pages/Reservations.js";
import OrderOnline from "./pages/OrderOnline.js";
import Login from "./pages/Login.js";
import ConfirmedBooking from "./pages/ ConfirmedBooking.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order_online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
