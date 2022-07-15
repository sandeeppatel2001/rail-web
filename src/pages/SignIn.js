import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function SignIn() {
  const phoneNumberRef = useRef();

  const { signUp } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isSuccess = await signUp("Name", phoneNumberRef.current.value);
    console.log(isSuccess);
    if (isSuccess) {
      navigate("/otp");
    } else {
      console.log("There is some error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={phoneNumberRef} />
      <button type="submit" id="sign-in-button">
        SignIn
      </button>
    </form>
  );
}

export default SignIn;
