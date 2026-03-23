import React, { useState, useEffect } from "react";
import "../css/style.css";

const Contact = () => {

  const [sent, setSent] = useState(false);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 40; i++) {
      arr.push(i);
    }
    setGrid(arr);
  }, []);

  const handleSubmit = () => {
    setSent(true);
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
          <li><a href="/contact" className="active">Contact</a></li>
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
              "url(https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1600&q=85)"
          }}
        ></div>

        <div className="page-hero-content">
          <span className="label">Get in Touch</span>
          <h1>Say <em>Hello</em></h1>
        </div>

      </div>


      {/* CONTACT SECTION */}

      <div className="contact-layout">

        {/* FORM */}

        <div className="contact-form-col">

          <span className="label">Send a Message</span>

          <h2>
            We'd love to <em>hear from you</em>
          </h2>

          <p className="body-text" style={{ marginBottom: "36px", marginTop: "12px" }}>
            Whether you have a question or feedback, please reach out below.
          </p>

          <div className="form-group">
            <label>Full Name *</label>
            <input type="text" placeholder="Marco Rossi" />
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input type="email" placeholder="marco@example.com" />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <select>
              <option>General Enquiry</option>
              <option>Private Dining / Event Hire</option>
              <option>Reservation Assistance</option>
              <option>Press & Media</option>
              <option>Feedback</option>
              <option>Careers</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message *</label>
            <textarea placeholder="How can we help you?"></textarea>
          </div>

          <button
            className="contact-submit"
            onClick={handleSubmit}
            style={{ background: sent ? "#5a7a4a" : "" }}
          >
            {sent ? "Message Sent ✓" : "Send Message"}
          </button>

        </div>


        {/* CONTACT INFO */}

        <div className="contact-info-col">

          <div>

            <p className="info-big">
              We will respond within <br />
              <em>24 hours</em>, always.
            </p>

            <div className="info-block">
              <div className="info-heading">Address</div>
              <p className="info-text">
                Piazza Della Signoria, 12 <br />
                50122 Firenze, Italy
              </p>
            </div>

            <div className="info-block">
              <div className="info-heading">Phone</div>
              <p className="info-text">
                <a href="tel:+390550000000">+39 055 000 0000</a>
              </p>
            </div>

            <div className="info-block">
              <div className="info-heading">Email</div>
              <p className="info-text">
                <a href="mailto:hello@noma.it">hello@noma.it</a>
              </p>
            </div>

            <div className="info-block">
              <div className="info-heading">Opening Hours</div>
              <p className="info-text">
                Tuesday – Thursday: 12:30 – 23:00 <br />
                Friday & Saturday: 12:00 – Late
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* MAP */}

      <div className="map-placeholder">

        <div className="map-grid">
          {grid.map((item) => (
            <div key={item}></div>
          ))}
        </div>

        <div className="map-pin">
          <div className="map-pin-dot"></div>
          <div className="map-pin-label">
            Noma · Piazza della Signoria
          </div>
        </div>

      </div>


      {/* FAQ */}

      <section className="faq-section">

        <div style={{ textAlign: "center" }}>
          <span className="label" style={{ justifyContent: "center", display: "flex" }}>
            Frequently Asked
          </span>

          <h2 className="display">
            Common <em>Questions</em>
          </h2>
        </div>

        <div className="faq-grid">

          <div className="faq-item">
            <div className="faq-q">Do you accommodate dietary requirements?</div>
            <p className="faq-a">
              Yes — we accommodate vegetarian, vegan and gluten-free requests.
            </p>
          </div>

          <div className="faq-item">
            <div className="faq-q">What is your cancellation policy?</div>
            <p className="faq-a">
              Please cancel at least 24 hours in advance.
            </p>
          </div>

          <div className="faq-item">
            <div className="faq-q">Can I book for a large group?</div>
            <p className="faq-a">
              For groups of 7 or more please call us directly.
            </p>
          </div>

          <div className="faq-item">
            <div className="faq-q">Is there a dress code?</div>
            <p className="faq-a">
              Smart casual is recommended.
            </p>
          </div>

        </div>

      </section>


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

export default Contact;