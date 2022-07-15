import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { bookTicket } from "../services/firestore.service";
import Footer from "./Footer";
import "./TicketBooking.css";
function TicketBooking() {
  const dateObj = new Date();
  const currentDate = dateObj.toISOString().slice(0, 10);
  const sourceRef = useRef();
  const destinationRef = useRef();
  const dateRef = useRef();

  useEffect(() => {
    dateRef.current.value = currentDate;
  });

  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log();
    await bookTicket(
      currentUser,
      sourceRef.current.value,
      destinationRef.current.value,
      dateRef.current.value
    );
  };

  const swapStation = () => {
    const source = sourceRef.current.value;
    const destination = destinationRef.current.value;
    destinationRef.current.value = source;
    sourceRef.current.value = destination;
  };

  return (
    <div>
      <form className="in" onSubmit={handleSubmit}>
        <h1 className="destiny">DESTINY</h1>
        <div className="input-source">
          <div className="input-destination">
            <img
              src="/train-logo-concept-icon-illustration-design-170455146.jpg"
              height="47px"
              width="50px"
              className="image"
              alt="trainLogo"
            />
            <input
              type="text"
              placeholder="SOURCE-STN."
              className="input"
              id="index1"
              ref={sourceRef}
            />
          </div>

          <img
            src="/swap-2.png"
            width="40px"
            height="40px"
            className="swap"
            alt="clickToSwap"
            onClick={swapStation}
          />
          <div className="input-destination">
            <img
              src="/train-logo-concept-icon-illustration-design-170455146.jpg"
              height="47px"
              width="50px"
              className="image"
              alt="trainLogo"
            />
            <input
              type="text"
              placeholder="DESTINATION-STN."
              className="input"
              id="input2"
              ref={destinationRef}
            />
          </div>
        </div>

        <div className="date">
          <div className="last">
            <ul className="day">
              <p>Day...</p>
            </ul>
            <ul>
              <input type="date" ref={dateRef} min={currentDate} />
            </ul>
          </div>
        </div>
        <div>
          <input
            type="number"
            placeholder="Number of passengers"
            className="input"
            id="input2"
            min="1"
            ref={destinationRef}
          />
        </div>

        <button type="submit" className="get-ticket">
          GET TICKETS
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default TicketBooking;
