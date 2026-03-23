import React, { useState } from "react";
import "../css/style.css";

const Book = () => {

  const [submitted, setSubmitted] = useState(false);

  const submitForm = () => {
    setSubmitted(true);
  };

  return (
    <>
      {/* NAVBAR */}

      <nav className="nav dark-logo">
        <a href="/" className="nav-logo">NOMA</a>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <a href="/book" className="nav-cta">Reserve a Table</a>

        <button className="nav-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* HERO */}

      <div className="page-hero">

        <div
          className="page-hero-bg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1600&q=85)"
          }}
        ></div>

        <div className="page-hero-content">
          <span className="label">Reservations</span>
          <h1>Book a <em>Table</em></h1>
        </div>

      </div>


      {/* BOOKING LAYOUT */}

      <div className="booking-layout">

        {/* FORM */}

        <div className="booking-form-col">

          <span className="label">Your Reservation</span>

          <h2 style={{
            fontFamily: "Cormorant Garamond",
            fontSize: "2rem",
            fontWeight: "300",
            marginBottom: "8px"
          }}>
            Reserve your evening
          </h2>

          <p className="body-text">
            Reservations are recommended. We hold tables for 15 minutes past booking time.
          </p>


          {/* DETAILS */}

          <div className="form-section-title">Your Details</div>

          <div className="form-row">

            <div className="form-group">
              <label>First Name *</label>
              <input type="text" placeholder="Marco" />
            </div>

            <div className="form-group">
              <label>Last Name *</label>
              <input type="text" placeholder="Rossi" />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input type="email" placeholder="marco@example.com" />
            </div>

            <div className="form-group">
              <label>Phone *</label>
              <input type="tel" placeholder="+39 055 000 0000" />
            </div>

          </div>


          {/* RESERVATION */}

          <div className="form-section-title">Your Reservation</div>

          <div className="form-row">

            <div className="form-group">
              <label>Date *</label>
              <input type="date" />
            </div>

            <div className="form-group">
              <label>Time *</label>
              <select>
                <option>12:30 PM</option>
                <option>1:00 PM</option>
                <option>1:30 PM</option>
                <option>7:00 PM</option>
                <option>7:30 PM</option>
                <option>8:00 PM</option>
                <option>8:30 PM</option>
              </select>
            </div>

            <div className="form-group">
              <label>Number of Guests *</label>
              <select>
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5 People</option>
              </select>
            </div>

            <div className="form-group">
              <label>Occasion</label>
              <select>
                <option>No special occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Business Dinner</option>
              </select>
            </div>

            <div className="form-group full">
              <label>Special Request</label>
              <textarea placeholder="Any allergies or requests"></textarea>
            </div>

          </div>


          {/* SUBMIT */}

          <button
            className="booking-submit"
            onClick={submitForm}
            style={{
              background: submitted ? "#5a7a4a" : ""
            }}
          >
            {submitted ? "Request Sent ✓" : "Confirm Reservation"}
          </button>

          <p style={{ fontSize: ".7rem", marginTop: "16px" }}>
            ✦ We will send a confirmation to your email within 2 hours.
          </p>

          {submitted && (
            <div className="success-msg show">
              ✦ Thank you — your reservation request has been received.
              We will confirm by email within 2 hours.
            </div>
          )}

        </div>


        {/* SIDEBAR */}

        <div className="booking-sidebar">

          <span className="sidebar-logo">NOMA</span>

          <div className="sidebar-section">
            <div className="sidebar-heading">Address</div>
            <p className="sidebar-text">
              Piazza Della Signoria, 12 <br />
              50122 Firenze, Italy
            </p>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-heading">Opening Hours</div>
            <p className="sidebar-text">
              Tuesday – Thursday <br />
              12:30 PM – 11:00 PM <br /><br />
              Friday & Saturday <br />
              12:00 PM – Late
            </p>
          </div>

          <div className="sidebar-section">
            <div className="sidebar-heading">Reservations</div>
            <p className="sidebar-text">
              For parties of 7 or more please call:
              <br />
              <a href="tel:+390550000000">+39 055 000 0000</a>
            </p>
          </div>

        </div>

      </div>


      {/* FOOTER */}

      <footer>

        <div className="footer-inner">

          <div>
            <span className="footer-logo">NOMA</span>
            <p className="footer-tagline">
              A celebration of Mediterranean ingredients and beautiful moments.
            </p>
          </div>

          <div>
            <div className="footer-heading">Visit Us</div>
            <ul className="footer-list">
              <li>Piazza Della Signoria, 12</li>
              <li>50122 Firenze, Italy</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 Noma Firenze. All rights reserved.
          </span>
        </div>

      </footer>

    </>
  );
};

export default Book;