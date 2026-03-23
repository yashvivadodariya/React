import React, { useState } from "react";
import "../css/style.css"; 

const Menu = () => {
  const [activeTab, setActiveTab] = useState("food");

  const TabButton = ({ id, label }) => (
    <button
      className={`menu-tab ${activeTab === id ? "active" : ""}`}
      onClick={() => setActiveTab(id)}
    >
      {label}
    </button>
  );

  return (
    <>
      <div className="page-hero">
        <div
          className="page-hero-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=85')",
          }}
        ></div>

        <div className="page-hero-content">
          <span className="label">Our Kitchen</span>
          <h1>
            The <em>Menu</em>
          </h1>
        </div>
      </div>

      <section className="section">
        <div className="chef-note">
          <p>
            "Every dish on this menu begins with a single question: what is at
            its absolute peak today? We source daily from trusted producers
            across Tuscany and the Ligurian coast."
          </p>
          <cite>— Chef Marco Rossi</cite>
        </div>

        {/* Tabs */}

        <div className="menu-tabs">
          <TabButton id="food" label="Food Menu" />
          <TabButton id="wine" label="Wine List" />
          <TabButton id="cocktails" label="Cocktails" />
          <TabButton id="desserts" label="Desserts & Cheese" />
        </div>

        {/* FOOD */}

        {activeTab === "food" && (
          <div className="menu-panel active">

            <div className="menu-section-title">Homemade Spreads & Bread</div>

            <div className="menu-items-grid">

              <div className="menu-entry">
                <div className="menu-entry-info">
                  <div className="menu-entry-name">
                    White Fish Roe Taramas
                  </div>
                  <div className="menu-entry-desc">
                    House-smoked roe, cold-pressed olive oil, grilled sourdough
                  </div>
                </div>
                <div className="menu-entry-price">9€</div>
              </div>

              <div className="menu-entry">
                <div className="menu-entry-info">
                  <div className="menu-entry-name">
                    Santorini Fava Split Peas
                  </div>
                  <div className="menu-entry-desc">
                    Slow-cooked yellow split peas, capers, red onion, olive oil
                  </div>
                </div>
                <div className="menu-entry-price">9€</div>
              </div>

            </div>

            <div className="menu-section-title">Appetisers</div>

            <div className="menu-items-grid">

              <div className="menu-entry">
                <div className="menu-entry-info">
                  <div className="menu-entry-name">Chèvre Goat Cheese</div>
                  <div className="menu-entry-desc">
                    Aged chèvre, fig & port jam, toasted walnuts, rocket
                  </div>
                </div>
                <div className="menu-entry-price">12€</div>
              </div>

              <div className="menu-entry">
                <div className="menu-entry-info">
                  <div className="menu-entry-name">
                    Tuna Crudo
                    <span className="menu-entry-badge">Chef's Pick</span>
                  </div>
                  <div className="menu-entry-desc">
                    Bluefin tuna, ponzu, ginger oil, cucumber, sesame
                  </div>
                </div>
                <div className="menu-entry-price">22€</div>
              </div>

            </div>

          </div>
        )}

        {/* WINE */}

        {activeTab === "wine" && (
          <div className="menu-panel active">

            <div className="menu-section-title">White Wines</div>

            <div className="wine-list">

              <div className="wine-entry">
                <div className="wine-year">2022</div>

                <div>
                  <div className="wine-name">
                    Vermentino di Sardegna, Capichera
                  </div>
                  <div className="wine-region">Sardinia, Italy</div>
                </div>

                <div className="wine-price">48€</div>
              </div>

              <div className="wine-entry">
                <div className="wine-year">2021</div>

                <div>
                  <div className="wine-name">
                    Gavi di Gavi "Etichetta Nera"
                  </div>
                  <div className="wine-region">Piedmont, Italy</div>
                </div>

                <div className="wine-price">62€</div>
              </div>

            </div>

          </div>
        )}

        {/* COCKTAILS */}

        {activeTab === "cocktails" && (
          <div className="menu-panel active">

            <div className="menu-section-title">Signature Cocktails</div>

            <div className="menu-items-grid">

              <div className="menu-entry">
                <div className="menu-entry-info">
                  <div className="menu-entry-name">Noma Negroni</div>
                  <div className="menu-entry-desc">
                    House-infused bitter orange gin, Campari, sweet vermouth
                  </div>
                </div>
                <div className="menu-entry-price">16€</div>
              </div>

              <div className="menu-entry">
                <div className="menu-entry-info">
                  <div className="menu-entry-name">Tuscan Spritz</div>
                  <div className="menu-entry-desc">
                    Aperol, Prosecco Superiore, elderflower
                  </div>
                </div>
                <div className="menu-entry-price">14€</div>
              </div>

            </div>

          </div>
        )}

        {/* DESSERT */}

        {activeTab === "desserts" && (
          <div className="menu-panel active">

            <div className="menu-section-title">Desserts</div>

            <div className="menu-items-grid">

              <div className="menu-entry">
                <div className="menu-entry-info">
                  <div className="menu-entry-name">
                    Dark Chocolate Fondant
                    <span className="menu-entry-badge">Chef's Pick</span>
                  </div>
                  <div className="menu-entry-desc">
                    Valrhona 72%, vanilla ice cream
                  </div>
                </div>
                <div className="menu-entry-price">13€</div>
              </div>

              <div className="menu-entry">
                <div className="menu-entry-info">
                  <div className="menu-entry-name">
                    Cannoli Siciliani
                  </div>
                  <div className="menu-entry-desc">
                    Ricotta, candied citrus, pistachio
                  </div>
                </div>
                <div className="menu-entry-price">11€</div>
              </div>

            </div>

          </div>
        )}

      </section>
    </>
  );
};

export default Menu;