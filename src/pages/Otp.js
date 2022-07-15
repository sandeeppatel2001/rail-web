import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Otp() {
  const optRef = useRef();
  const { verifyOTP } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = optRef.current.value;
    const isVerified = await verifyOTP(otp);
    if (isVerified) {
      navigate("/ticket-booking");
    } else {
      console.log("There is some error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={optRef} />
      <button type="submit" id="sign-in-button">
        Verify
      </button>
    </form>
  );
}

export default Otp;
