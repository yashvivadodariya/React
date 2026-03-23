import React from "react";
import "../css/style.css";

const About = () => {
  return (
    <>
      <nav id="mainNav" className="dark-nav">
        <a href="/" className="nav-logo">NOMA</a>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <a href="/book" className="nav-cta">Reserve</a>

        <div className="nav-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
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

        <div className="page-hero-overlay"></div>

        <span className="page-hero-eyebrow">Est. 2012, Florence</span>
        <h1 className="page-hero-title">
          About <em>Noma</em>
        </h1>
      </div>

      {/* INTRO */}
      <div className="about-intro">

        <div className="about-intro-img reveal-left">
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&q=80"
            alt="Restaurant interior"
          />
        </div>

        <div className="reveal-right">
          <span className="label">Our Beginning</span>

          <h2 className="heading">
            Born from a love of <em>honest</em> food
          </h2>

          <p className="body-text">
            Noma opened its doors in the spring of 2012 on the edge of Piazza
            Della Signoria. What began as a humble trattoria has grown into one
            of Florence's most celebrated dining rooms — yet our values have
            never changed.
          </p>

          <p className="body-text" style={{ marginTop: "14px" }}>
            We believe a great restaurant is not about spectacle. It is about
            hospitality — the feeling that someone has thought carefully about
            your comfort, your pleasure, your evening.
          </p>

          <a href="/book" className="link-arrow" style={{ marginTop: "36px" }}>
            Reserve your table
          </a>
        </div>

      </div>

      {/* PHILOSOPHY */}
      <section className="philosophy">

        <div className="phil-grid">

          <div className="reveal">
            <p className="phil-quote">
              "Source <em>impeccably</em>, cook simply, serve <em>generously</em>."
            </p>

            <p className="phil-attr">— Chef Marco Rossi, Founder</p>
          </div>

          <div className="reveal d2">
            <span className="label label-dark">Our Philosophy</span>

            <p className="phil-text">
              Every plate at Noma begins long before the kitchen. It begins at
              the market at 5am, where Chef Marco walks the stalls, touching,
              smelling, tasting — choosing only what is extraordinary that day.
            </p>

            <p className="phil-text">
              This daily commitment to ingredient quality is why our menu
              changes constantly. We follow the seasons without apology.
            </p>

            <a
              href="/menu"
              className="btn btn-outline-gold"
              style={{ marginTop: "36px", display: "inline-block" }}
            >
              View the menu
            </a>
          </div>

        </div>

      </section>

      {/* TEAM */}
      <section className="team-section">

        <div className="reveal">
          <span className="label">The People</span>
          <h2 className="heading">
            Our <em>team</em>
          </h2>
        </div>

        <div className="team-grid">

          <div className="team-card reveal">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&q=80"
              alt="Sous Chef"
            />

            <div className="team-card-info">
              <div className="team-name">Sofia Esposito</div>
              <div className="team-role">Sous Chef</div>
            </div>
          </div>

          <div className="team-card reveal d1">
            <img
              src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=500&q=80"
              alt="Sommelier"
            />

            <div className="team-card-info">
              <div className="team-name">Lucas Ferreira</div>
              <div className="team-role">Head Sommelier</div>
            </div>
          </div>

          <div className="team-card reveal d2">
            <img
              src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=500&q=80"
              alt="Pastry Chef"
            />

            <div className="team-card-info">
              <div className="team-name">Camille Laurent</div>
              <div className="team-role">Pastry Chef</div>
            </div>
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-grid">

          <div>
            <span className="footer-logo">NOMA</span>

            <p className="footer-tagline">
              A celebration of Mediterranean ingredients, honest cooking,
              and beautiful moments.
            </p>
          </div>

          <div>
            <div className="footer-heading">Visit Us</div>

            <ul className="footer-list">
              <li>Piazza Della Signoria, 12</li>
              <li>50122 Firenze, Italy</li>
              <li style={{ marginTop: "10px" }}>
                <a href="tel:+390550000000">+39 055 000 0000</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-heading">Hours</div>

            <ul className="footer-list">
              <li>Tue – Thu: 12:30 – 23:00</li>
              <li>Fri & Sat: 12:00 – Late</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 Noma Firenze. All rights reserved.
          </span>

          <div className="footer-social">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Pinterest</a>
          </div>
        </div>

      </footer>
    </>
  );
};

export default About;