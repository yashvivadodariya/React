import React, { useState } from "react";
import "../css/style.css";

const Gallery = () => {

  const images = [
    {
      src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80",
      caption: "Seasonal Plate",
      category: "food"
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
      caption: "The Dining Room",
      category: "interior"
    },
    {
      src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
      caption: "Chef's Creation",
      category: "food"
    },
    {
      src: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80",
      caption: "Morning Mise en Place",
      category: "kitchen"
    },
    {
      src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80",
      caption: "The Interior",
      category: "interior"
    },
    {
      src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3b24?w=600&q=80",
      caption: "Autumn Menu",
      category: "food"
    },
    {
      src: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=600&q=80",
      caption: "The Detail",
      category: "interior"
    },
    {
      src: "https://images.unsplash.com/photo-1497534446932-c925b458314e?w=600&q=80",
      caption: "Dessert Plating",
      category: "food"
    },
    {
      src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80",
      caption: "The Cellar",
      category: "interior"
    },
    {
      src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80",
      caption: "Table Setting",
      category: "events"
    },
    {
      src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
      caption: "Cocktails Evening",
      category: "events"
    },
    {
      src: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80",
      caption: "Seafood Special",
      category: "food"
    }
  ];

  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(false);
  const [current, setCurrent] = useState(0);

  const filteredImages =
    filter === "all" ? images : images.filter(img => img.category === filter);

  const openLightbox = (index) => {
    setCurrent(index);
    setLightbox(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightbox(false);
    document.body.style.overflow = "";
  };

  const changeImage = (dir) => {
    setCurrent((prev) => (prev + dir + images.length) % images.length);
  };

  return (
    <>
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
          <span className="label">Visual Stories</span>
          <h1>
            Our <em>Gallery</em>
          </h1>
        </div>

      </div>

      {/* GALLERY */}

      <section className="section">

        {/* FILTERS */}

        <div className="gallery-filters">

          <button
            className={`gal-filter ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={`gal-filter ${filter === "food" ? "active" : ""}`}
            onClick={() => setFilter("food")}
          >
            Food & Drink
          </button>

          <button
            className={`gal-filter ${filter === "interior" ? "active" : ""}`}
            onClick={() => setFilter("interior")}
          >
            Interior
          </button>

          <button
            className={`gal-filter ${filter === "events" ? "active" : ""}`}
            onClick={() => setFilter("events")}
          >
            Events
          </button>

          <button
            className={`gal-filter ${filter === "kitchen" ? "active" : ""}`}
            onClick={() => setFilter("kitchen")}
          >
            Kitchen
          </button>

        </div>

        {/* MASONRY GRID */}

        <div className="masonry">

          {filteredImages.map((img, index) => (

            <div
              key={index}
              className="masonry-item"
              onClick={() => openLightbox(index)}
            >

              <img src={img.src} alt={img.caption} />

              <div className="masonry-overlay">
                <span className="masonry-caption">{img.caption}</span>
              </div>

            </div>

          ))}

        </div>

      </section>

      {/* LIGHTBOX */}

      {lightbox && (
        <div className="lightbox open">

          <button className="lightbox-close" onClick={closeLightbox}>
            ✕
          </button>

          <button
            className="lightbox-prev"
            onClick={() => changeImage(-1)}
          >
            ‹
          </button>

          <img src={images[current].src} alt="" />

          <button
            className="lightbox-next"
            onClick={() => changeImage(1)}
          >
            ›
          </button>

        </div>
      )}

    </>
  );
};

export default Gallery;