import React from "react";
import { useAuth } from "../context/AuthContext";
import Footer from "./Footer";
import "./Profile.css";
function Profile() {
  const { currentUser } = useAuth();
  return (
    <div className="cent">
      <div className="profile">
        <h1 className="head">PROFILE</h1>
        <img src="/profilelogo.jpg" alt="profile" />
        <div className="name">
          <div>
            <p className="input">Name : {currentUser?.name}</p>
            {/* <input type="text" placeholder="Name" className="place" /> */}
          </div>

          <div>
            <p className="input">Contact Number : {currentUser?.phoneNumber}</p>
            {/* <input type="text" placeholder="Mobile No." className="place" /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
