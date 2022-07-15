import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {},
      },
      auth
    );
  };

  async function signUp(name, phoneNumber) {
    setCurrentUser({ name, phoneNumber, verify: false });
    return await sendOTP(phoneNumber);
  }

  async function sendOTP(phoneNumber) {
    try {
      setUpRecaptcha();
      const appVerifier = window.recaptchaVerifier;

      phoneNumber = "+91" + phoneNumber;

      const result = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      window.confirmationResult = result;
      return true;
    } catch (error) {
      return false;
    }
  }

  async function verifyOTP(otp) {
    try {
      const confirmationResult = window.confirmationResult;
      const user = await confirmationResult.confirm(otp);
      setCurrentUser((user) => ({ ...user, verify: true }));
      return true;
    } catch (error) {
      return false;
    }
  }

  function getUserDetail() {
    return currentUser;
  }

  function logout() {
    return auth.signOut();
  }

  const value = {
    currentUser,
    signUp,
    sendOTP,
    verifyOTP,
    logout,
    setUpRecaptcha,
    getUserDetail,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
