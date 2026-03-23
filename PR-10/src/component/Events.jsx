import React, { useState } from "react";
import "../css/style.css";

const Events = () => {

  const [filter, setFilter] = useState("all");

  const events = [
    {
      id: 1,
      category: "dining",
      title: "Cocktails Night",
      catLabel: "Bar & Cocktails",
      img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=700&q=80",
      desc: "An evening of signature cocktails curated by our head mixologist.",
      date: "Friday, 21 March 2026",
      time: "8:00 PM – 11:30 PM",
      seats: "Open seating",
      price: "Entry: 35€ per person"
    },
    {
      id: 2,
      category: "wine",
      title: "Wine Wednesday",
      catLabel: "Wine",
      img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=700&q=80",
      desc: "Guided tasting led by our sommelier with six wines and small bites.",
      date: "Wednesday, 26 March 2026",
      time: "6:00 PM – 9:00 PM",
      seats: "20 guests only",
      price: "95€ per person"
    },
    {
      id: 3,
      category: "dining",
      title: "Sea Food & Wine",
      catLabel: "Chef's Table",
      img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=700&q=80",
      desc: "A dedicated seafood lunch featuring the morning's catch.",
      date: "Friday, 4 April 2026",
      time: "12:30 PM – 5:00 PM",
      seats: "12 guests only",
      price: "145€ per person"
    },
    {
      id: 4,
      category: "private",
      title: "Chef's Table Evening",
      catLabel: "Exclusive",
      img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80",
      desc: "An intimate 8-course experience at the kitchen counter.",
      date: "Saturday, 19 April 2026",
      time: "7:30 PM – Late",
      seats: "6 guests maximum",
      price: "280€ per person"
    }
  ];

  const filteredEvents =
    filter === "all" ? events : events.filter(e => e.category === filter);

  return (
    <>
      {/* HERO */}

      <div className="page-hero">
        <div
          className="page-hero-bg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=1600&q=85)"
          }}
        ></div>

        <div className="page-hero-content">
          <span className="label">Private Dining & Events</span>
          <h1>
            Upcoming <em>Evenings</em>
          </h1>
        </div>
      </div>

      {/* EVENTS SECTION */}

      <section className="section">

        {/* FILTERS */}

        <div className="events-filters">

          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Events
          </button>

          <button
            className={`filter-btn ${filter === "dining" ? "active" : ""}`}
            onClick={() => setFilter("dining")}
          >
            Dining
          </button>

          <button
            className={`filter-btn ${filter === "wine" ? "active" : ""}`}
            onClick={() => setFilter("wine")}
          >
            Wine
          </button>

          <button
            className={`filter-btn ${filter === "private" ? "active" : ""}`}
            onClick={() => setFilter("private")}
          >
            Private
          </button>

        </div>

        {/* EVENTS GRID */}

        <div className="events-grid">

          {filteredEvents.map((event) => (
            <div className="event-full-card" key={event.id}>

              <img src={event.img} alt={event.title} />

              <div className="event-full-body">

                <div>

                  <div className="event-full-cat">{event.catLabel}</div>

                  <div className="event-full-name">{event.title}</div>

                  <p className="event-full-desc">{event.desc}</p>

                  <div className="event-full-meta">

                    <div className="event-meta-item">
                      <span className="event-meta-label">Date</span>
                      <span className="event-meta-value">{event.date}</span>
                    </div>

                    <div className="event-meta-item">
                      <span className="event-meta-label">Time</span>
                      <span className="event-meta-value">{event.time}</span>
                    </div>

                    <div className="event-meta-item">
                      <span className="event-meta-label">Seats</span>
                      <span className="event-meta-value">{event.seats}</span>
                    </div>

                  </div>

                  <div className="event-price-tag">{event.price}</div>

                </div>

                <a
                  href="/book"
                  className="btn btn-dark"
                  style={{ marginTop: "24px", display: "inline-block" }}
                >
                  Reserve Your Seat
                </a>

              </div>

            </div>
          ))}

        </div>
      </section>


      {/* PRIVATE CTA */}

      <div className="private-cta">

        <div>
          <span className="label">Private Hire</span>

          <h2>
            Plan your own <em>unforgettable</em> evening
          </h2>

          <p>
            Noma is available for exclusive hire for birthdays, corporate dinners,
            and private celebrations.
          </p>

          <a
            href="/contact"
            className="btn btn-gold"
            style={{ marginTop: "36px", display: "inline-block" }}
          >
            Enquire Now
          </a>
        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?w=700&q=80"
            alt="Private dining"
            style={{ width: "100%", height: "420px", objectFit: "cover" }}
          />

        </div>

      </div>
    </>
  );
};

export default Events;