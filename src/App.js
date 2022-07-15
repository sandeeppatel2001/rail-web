import "./App.css";
import SignIn from "./pages/SignIn";
import "./firebase";
import { Route, Routes } from "react-router-dom";
import Otp from "./pages/Otp";
import TicketBooking from "./pages/TicketBooking";
import Profile from "./pages/Profile";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/ticket-booking" element={<TicketBooking />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
