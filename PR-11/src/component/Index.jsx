import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const Index = () => {
  const [activeTab, setActiveTab] = useState("Starters");

  const marqueeItems = [
    "Fine Mediterranean Cuisine",
    "3 Michelin Stars",
    "Est. 2012 · Firenze",
    "Chef Marco Rossi",
    "Seasonal Ingredients",
    "200+ Wine Labels",
  ];

  const galleryItems = [
    { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", label: "Chef's Table", tall: true },
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", label: "Seasonal Plates" },
    { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80", label: "Wine Cellar" },
    { src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=600&q=80", label: "Fresh Produce" },
    { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80", label: "Garden to Table" },
  ];

  return (
    <>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">Est. 2012 · Firenze, Italy</div>
          <h1 className="hero-title">
            Good Times,<br />
            <em>Great Tastes</em>
          </h1>
          <p className="hero-sub">
            A culinary journey through the finest Mediterranean ingredients,
            crafted with intention and served with soul.
          </p>
          <div className="hero-actions">
            <Link to="/menu-list" className="btn-gold">Explore Menu</Link>
            <Link to="/book" className="btn-outline">Reserve a Table</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-line"></div>
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className="marquee-strip">
        <div className="marquee-inner">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <React.Fragment key={i}>
              <span className="marquee-item">{item}</span>
              <span className="marquee-dot">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── ABOUT STRIP ── */}
      <section className="about-strip">
        <div className="about-strip-img">
          <img
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=900&q=80"
            alt="Restaurant Interior"
          />
          <div className="about-img-overlay"></div>
          <div className="about-img-badge">
            <div className="num">12+</div>
            <div className="lbl">Years of Excellence</div>
          </div>
        </div>
        <div className="about-strip-text">
          <span className="label">Our Philosophy</span>
          <h2>
            Noma is for everyone who collects <em>beautiful moments</em>
          </h2>
          <p className="body-text">
            Born from an obsession with seasonal ingredients and honest cooking,
            Noma has been Florence's most intimate fine dining destination since
            2012. Led by Chef Marco Rossi, our kitchen honours tradition while
            embracing the contemporary.
          </p>
          <Link to="/about" className="text-link">Discover our story</Link>
        </div>
      </section>

      {/* ── MENU PREVIEW ── */}
      <section className="menu-preview">
        <div className="menu-preview-header">
          <div>
            <span className="label">Seasonal Selection</span>
            <h2>Crafted with the <em>finest</em> ingredients</h2>
          </div>
          <div className="menu-header-right">
            <p>Every dish is a testament to our commitment to seasonal, locally-sourced ingredients.</p>
            <div className="menu-tabs">
              {["Starters", "Mains", "Desserts"].map((tab) => (
                <button
                  key={tab}
                  className={`tab ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="menu-grid">
          <div className="menu-col">
            <div className="menu-col-title">Homemade Spreads</div>
            <div className="menu-item">
              <span className="menu-item-name">White Fish Roe Taramas</span>
              <span className="menu-item-price">9€</span>
            </div>
            <div className="menu-item">
              <span className="menu-item-name">Santorini Fava</span>
              <span className="menu-item-price">9€</span>
            </div>
            <div className="menu-item">
              <span className="menu-item-name">Aubergine Purée</span>
              <span className="menu-item-price">8€</span>
            </div>
          </div>

          <div className="menu-col">
            <div className="menu-col-title">From the Sea</div>
            <div className="menu-item">
              <span className="menu-item-name">Grilled Octopus</span>
              <span className="menu-item-price">18€</span>
            </div>
            <div className="menu-item">
              <span className="menu-item-name">Octopus Carpaccio</span>
              <span className="menu-item-price">18€</span>
            </div>
            <div className="menu-item">
              <span className="menu-item-name">Steamed Mussels</span>
              <span className="menu-item-price">15€</span>
            </div>
          </div>

          <div className="menu-col">
            <div className="menu-col-title">Appetisers</div>
            <div className="menu-item">
              <span className="menu-item-name">Chèvre Goat Cheese</span>
              <span className="menu-item-price">12€</span>
            </div>
            <div className="menu-item">
              <span className="menu-item-name">Feta in Crust</span>
              <span className="menu-item-price">9€</span>
            </div>
            <div className="menu-item">
              <span className="menu-item-name">Smoked Aubergine</span>
              <span className="menu-item-price">10€</span>
            </div>
          </div>

          <div className="menu-col">
            <div className="menu-col-title">Desserts</div>
            <div className="menu-item">
              <span className="menu-item-name">Milk Phyllo Pie</span>
              <span className="menu-item-price">10€</span>
            </div>
            <div className="menu-item">
              <span className="menu-item-name">Pecan Pie &amp; Ice Cream</span>
              <span className="menu-item-price">10€</span>
            </div>
            <div className="menu-item">
              <span className="menu-item-name">Yogurt Mousse</span>
              <span className="menu-item-price">9€</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO GALLERY ── */}
      <div className="photo-gallery" id="gallery">
        {galleryItems.map((item, i) => (
          <div key={i} className={`gallery-item ${item.tall ? "tall" : ""}`}>
            <img src={item.src} alt={item.label} />
            <div className="gallery-item-overlay"></div>
            <div className="gallery-label">
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── STATS BAR ── */}
      <div className="stats-bar">
        {[
          { num: "12+", label: "Years of Excellence" },
          { num: "3",   label: "Michelin Stars" },
          { num: "48",  label: "Seats Available" },
          { num: "200+",label: "Wine Labels" },
        ].map((s, i) => (
          <div className="stat" key={i}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── TESTIMONIAL ── */}
      <section className="testimonial-section">
        <div className="testimonial-inner">
          <div className="stars">★ ★ ★ ★ ★</div>
          <blockquote>
            "An unforgettable evening — every course told a story, and Chef Rossi's
            passion for the Mediterranean was felt in every single bite."
          </blockquote>
          <div className="testimonial-author">— Alessandro M. · Vogue Italia</div>
        </div>
      </section>

      {/* ── CHEF SECTION ── */}
      <section className="chef-section">
        <div className="chef-text">
          <span className="label">The Artisan</span>
          <h2>Guided by <em>passion</em>, driven by craft</h2>
          <p className="body-text">
            Chef Marco Rossi spent a decade studying under Europe's finest culinary
            masters before returning to Florence with a singular vision — food that is
            honest, seasonal, and deeply rooted in Mediterranean tradition.
          </p>
          <div className="chef-signature">Marco Rossi</div>
          <div className="chef-role">Executive Chef &amp; Founder</div>
        </div>
        <div className="chef-img">
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&q=80"
            alt="Chef Marco Rossi"
          />
        </div>
      </section>

      {/* ── RESERVATION ── */}
      <section className="reservation-section">
        <div className="reservation-img">
          <img
            src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=900&q=80"
            alt="Dining Table"
          />
          <div className="reservation-img-overlay"></div>
        </div>
        <div className="reservation-form">
          <span className="label">Reservations</span>
          <h2>Reserve your table at Noma</h2>
          <div className="form-row">
            <div className="form-field">
              <label>First Name</label>
              <input type="text" placeholder="Marco" />
            </div>
            <div className="form-field">
              <label>Last Name</label>
              <input type="text" placeholder="Rossi" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label>Date</label>
              <input type="date" />
            </div>
            <div className="form-field">
              <label>Time</label>
              <select>
                {["19:00","19:30","20:00","20:30","21:00"].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-field">
            <label>Guests</label>
            <select>
              {["2 Guests","3 Guests","4 Guests","5 Guests","6+ Guests"].map(g => (
                <option key={g}>{g}</option>
              ))}
            </select>
          </div>
          <button className="btn-dark">Request Reservation</button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="noma-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-brand-logo">NOMA</span>
            <p>
              Florence's most intimate fine dining destination since 2012.
              A celebration of Mediterranean ingredients and honest cooking.
            </p>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu-list">Our Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Visit Us</h4>
            <ul>
              <li><a href="#">Via Roma 14, Firenze</a></li>
              <li><a href="#">Tue–Sun, 19:00–23:00</a></li>
              <li><a href="#">+39 055 123 4567</a></li>
              <li><a href="#">info@noma.it</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>More</h4>
            <ul>
              <li><Link to="/book">Reservations</Link></li>
              <li><a href="#">Private Dining</a></li>
              <li><a href="#">Gift Cards</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Noma Firenze. All rights reserved.</p>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">TripAdvisor</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Index;
