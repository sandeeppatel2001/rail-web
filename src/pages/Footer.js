import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Footer() {
  return (
    <div className="fotter">
      <nav className="nav">
        <ul className="li">
          <Link to="/ticket-booking" className="li">
            Home
          </Link>
        </ul>
        <ul className="li">
          <Link to="/profile" className="li">
            Profile
          </Link>
        </ul>
        {/* <ul className="li">Wallet</ul> */}
      </nav>
    </div>
  );
}

export default Footer;
