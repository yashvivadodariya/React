import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

const Home = () => {
  return (
    <>

      {/* HERO */}

      <section className="hero">

        <div className="hero-bg"></div>

        <span className="hero-eyebrow">
          Est. 2012 · Firenze, Italy
        </span>

        <h1 className="hero-title">
          Good Times,<br />
          <em>Great Tastes</em>
        </h1>

        <p className="hero-sub">
          A culinary journey through the finest Mediterranean ingredients,
          crafted with intention and served with soul.
        </p>

        <div className="hero-actions">

          <Link to="/menu-list" className="btn btn-gold">
            Explore Menu
          </Link>

          <Link to="/" className="btn btn-outline-light">
            Reserve a Table
          </Link>

        </div>
      </section>


      {/* ABOUT STRIP */}

      <div className="about-strip">

        <div className="about-strip-img"></div>

        <div className="about-strip-text">

          <span className="label">Our Philosophy</span>

          <h2>
            Noma is for everyone who collects <em>beautiful moments</em>
          </h2>

          <p className="body-text" style={{ marginTop: "20px" }}>
            Born from an obsession with seasonal ingredients and honest cooking,
            Noma has been Florence's most intimate fine dining destination since
            2012. Led by Chef Marco Rossi, our kitchen honours tradition while
            embracing the contemporary.
          </p>

          <Link to="/about" className="text-link">
            Discover our story
          </Link>

        </div>

      </div>


      {/* MENU PREVIEW */}

      <section className="menu-preview">

        <div className="menu-preview-header">

          <div>

            <span className="label">Seasonal Selection</span>

            <h2
              className="display"
              style={{ color: "#fff", fontSize: "clamp(2rem,3.5vw,3rem)" }}
            >
              Crafted with the <em>finest</em> ingredients
            </h2>

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
              <span className="menu-item-name">Pecan Pie & Ice Cream</span>
              <span className="menu-item-price">10€</span>
            </div>

            <div className="menu-item">
              <span className="menu-item-name">Yogurt Mousse</span>
              <span className="menu-item-price">9€</span>
            </div>
          </div>

        </div>

      </section>


      {/* STATS */}

      <div className="stats-bar">

        <div className="stat">
          <div className="stat-num">12+</div>
          <div className="stat-label">Years of Excellence</div>
        </div>

        <div className="stat">
          <div className="stat-num">3</div>
          <div className="stat-label">Michelin Stars</div>
        </div>

        <div className="stat">
          <div className="stat-num">48</div>
          <div className="stat-label">Seats Available</div>
        </div>

        <div className="stat">
          <div className="stat-num">200+</div>
          <div className="stat-label">Wine Labels</div>
        </div>

      </div>

    </>
  );
};

export default Home;