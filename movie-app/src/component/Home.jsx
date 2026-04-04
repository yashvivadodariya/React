import { useState, useEffect, useRef } from "react";

/* ─── DATA ─── */
const slides = [
  { title: "Avatar", year: "2022", rating: "8.7", age: "13+", duration: "3h 12m", tags: ["Action", "Sci-Fi", "Adventure"], img: "https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg", desc: "Return to Pandora — a world unlike any other. Jake Sully and his family face new threats as they explore the oceans of Pandora in this breathtaking sequel." },
  { title: "Inception", year: "2010", rating: "8.8", age: "13+", duration: "2h 28m", tags: ["Sci-Fi", "Thriller", "Action"], img: "https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", desc: "A skilled thief is offered a chance to have his criminal record erased — if he can plant an idea inside someone's dream." },
  { title: "Joker", year: "2019", rating: "8.4", age: "18+", duration: "2h 2m", tags: ["Crime", "Drama", "Thriller"], img: "https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", desc: "A failed comedian descends into madness and becomes the iconic Clown Prince of Crime — Gotham's most dangerous villain." },
  { title: "Avengers", year: "2019", rating: "8.0", age: "13+", duration: "3h 1m", tags: ["Action", "Adventure", "Sci-Fi"], img: "https://image.tmdb.org/t/p/original/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg", desc: "After Thanos destroyed half the universe, the Avengers assemble once more to undo the destruction and restore balance." },
];

const trending = [
  { title: "Avatar", img: "https://image.tmdb.org/t/p/w500/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg", rating: "8.7", year: "2022", tags: ["Action", "Sci-Fi"] },
  { title: "Joker", img: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", rating: "8.4", year: "2019", tags: ["Crime", "Drama"] },
  { title: "Inception", img: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", rating: "8.8", year: "2010", tags: ["Sci-Fi", "Thriller"] },
  { title: "Titanic", img: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", rating: "7.9", year: "1997", tags: ["Drama", "Romance"] },
  { title: "Avengers", img: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg", rating: "8.0", year: "2019", tags: ["Action", "Adventure"] },
  { title: "Batman", img: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", rating: "7.8", year: "2022", tags: ["Action", "Crime"] },
  { title: "Titanic", img: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", rating: "7.9", year: "1997", tags: ["Drama", "Romance"] },
  { title: "Inception", img: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", rating: "8.8", year: "2010", tags: ["Sci-Fi", "Thriller"] },
];

const latest = [
  { title: "Batman", img: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", rating: "7.8", year: "2022", tags: ["Action", "Crime"] },
  { title: "Avengers", img: "https://image.tmdb.org/t/p/w500/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg", rating: "8.0", year: "2019", tags: ["Action", "Adventure"] },
  { title: "Titanic", img: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", rating: "7.9", year: "1997", tags: ["Drama"] },
  { title: "Joker", img: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", rating: "8.4", year: "2019", tags: ["Crime", "Drama"] },
  { title: "Avatar", img: "https://image.tmdb.org/t/p/w500/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg", rating: "8.7", year: "2022", tags: ["Action", "Sci-Fi"] },
  { title: "Inception", img: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", rating: "8.8", year: "2010", tags: ["Sci-Fi"] },
  { title: "Batman", img: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", rating: "7.8", year: "2022", tags: ["Action"] },
];

const navLinks = ["Home", "Movies", "TV Shows", "Genre", "Pricing"];

/* ─── MOVIE CARD ─── */
function MovieCard({ movie }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        minWidth: "185px", maxWidth: "185px", borderRadius: "10px",
        overflow: "hidden", cursor: "pointer", position: "relative",
        transform: hovered ? "scale(1.06)" : "scale(1)",
        transition: "transform 0.3s ease",
        boxShadow: hovered ? "0 20px 50px rgba(0,0,0,0.7)" : "none",
        flexShrink: 0,
      }}
    >
      <img src={movie.img} alt={movie.title} style={{ width: "100%", display: "block", aspectRatio: "2/3", objectFit: "cover" }} />

      {/* hover overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.1) 100%)",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s",
        display: "flex", flexDirection: "column", justifyContent: "flex-end",
        padding: "14px",
      }}>
        {/* play btn */}
        <div style={{
          width: "40px", height: "40px", borderRadius: "50%",
          background: "#e50914", display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: "10px", fontSize: "14px",
        }}>▶</div>
        <div style={{ fontSize: "13px", fontWeight: 700, marginBottom: "4px", color: "#fff" }}>{movie.title}</div>
        <div style={{ fontSize: "11px", color: "#aaa", marginBottom: "6px" }}>{movie.year} • ⭐ {movie.rating}</div>
        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
          {movie.tags.map((t, i) => (
            <span key={i} style={{
              fontSize: "9px", padding: "2px 7px", borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.25)", color: "#ccc",
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* rating badge always visible */}
      <div style={{
        position: "absolute", top: "8px", right: "8px",
        background: "rgba(0,0,0,0.7)", borderRadius: "4px",
        fontSize: "10px", fontWeight: 700, padding: "2px 6px", color: "#f5c518",
      }}>⭐ {movie.rating}</div>
    </div>
  );
}

/* ─── ROW SECTION ─── */
function MovieRow({ title, movies }) {
  const ref = useRef();
  const scroll = (dir) => {
    ref.current.scrollBy({ left: dir * 600, behavior: "smooth" });
  };
  return (
    <div style={{ marginBottom: "48px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px", padding: "0 50px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "4px", height: "20px", background: "#e50914", borderRadius: "2px" }} />
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 700, letterSpacing: "0.3px" }}>{title}</h2>
        </div>
        <a href="#" style={{ fontSize: "12px", color: "#e50914", textDecoration: "none", fontWeight: 600, letterSpacing: "0.5px" }}>VIEW ALL →</a>
      </div>

      <div style={{ position: "relative" }}>
        {/* left arrow */}
        <button onClick={() => scroll(-1)} style={{
          position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)",
          zIndex: 10, background: "rgba(0,0,0,0.75)", border: "1px solid rgba(255,255,255,0.15)",
          color: "#fff", fontSize: "20px", width: "38px", height: "38px",
          borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        }}>‹</button>

        <div ref={ref} style={{
          display: "flex", gap: "16px", overflowX: "auto", padding: "10px 50px",
          scrollbarWidth: "none", msOverflowStyle: "none",
        }}>
          {movies.map((m, i) => <MovieCard key={i} movie={m} />)}
        </div>

        {/* right arrow */}
        <button onClick={() => scroll(1)} style={{
          position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)",
          zIndex: 10, background: "rgba(0,0,0,0.75)", border: "1px solid rgba(255,255,255,0.15)",
          color: "#fff", fontSize: "20px", width: "38px", height: "38px",
          borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
        }}>›</button>
      </div>
    </div>
  );
}

/* ─── MAIN HOME ─── */
export default function Home() {
  const [cur, setCur] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Auto-slide
  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setCur(c => (c + 1) % slides.length); setVisible(true); }, 350);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  // Navbar scroll
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const goTo = (i) => {
    setVisible(false);
    setTimeout(() => { setCur(i); setVisible(true); }, 350);
  };

  const s = slides[cur];

  return (
    <div style={{ background: "#0d0d0d", color: "#fff", minHeight: "100vh", fontFamily: "'Segoe UI', Tahoma, sans-serif" }}>
      {/* ══ HERO SLIDER ══ */}
      <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        {/* BG image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${s.img})`,
          backgroundSize: "cover", backgroundPosition: "center 20%",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease",
        }} />
        {/* Gradient overlays */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.92) 35%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.05) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #0d0d0d 0%, transparent 55%)" }} />

        {/* Hero content */}
        <div style={{
          position: "absolute", top: "50%", left: "50px",
          transform: "translateY(-50%)",
          maxWidth: "520px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease, transform 0.4s ease",
          marginTop: "20px",
        }}>
          {/* Tags */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
            {s.tags.map((t, i) => (
              <span key={i} style={{
                fontSize: "11px", padding: "4px 12px", borderRadius: "20px",
                background: i === 0 ? "#e50914" : "rgba(255,255,255,0.12)",
                color: "#fff", fontWeight: 600, letterSpacing: "0.5px",
              }}>{t}</span>
            ))}
          </div>

          <h1 style={{
            fontSize: "62px", fontWeight: 900, lineHeight: 1,
            margin: "0 0 16px", letterSpacing: "-1px",
            textShadow: "0 2px 30px rgba(0,0,0,0.4)",
          }}>{s.title}</h1>

          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
            <span style={{ background: "#e50914", borderRadius: "4px", padding: "2px 8px", fontSize: "11px", fontWeight: 700 }}>HD</span>
            <span style={{ color: "#f5c518", fontSize: "13px", fontWeight: 700 }}>⭐ {s.rating}</span>
            <span style={{ color: "#aaa", fontSize: "12px" }}>{s.year}</span>
            <span style={{ color: "#aaa", fontSize: "12px" }}>{s.age}</span>
            <span style={{ color: "#aaa", fontSize: "12px" }}>⏱ {s.duration}</span>
          </div>

          <p style={{ color: "#ccc", fontSize: "14.5px", lineHeight: 1.75, marginBottom: "28px" }}>{s.desc}</p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
            <button style={{
              padding: "14px 32px", background: "#e50914", border: "none",
              color: "#fff", fontSize: "15px", fontWeight: 800,
              borderRadius: "8px", cursor: "pointer", letterSpacing: "0.3px",
              display: "flex", alignItems: "center", gap: "8px",
              boxShadow: "0 4px 20px rgba(229,9,20,0.5)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 6px 30px rgba(229,9,20,0.7)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(229,9,20,0.5)"; }}
            >▶ Play Now</button>

            <button style={{
              padding: "13px 28px", background: "rgba(255,255,255,0.1)",
              border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff",
              fontSize: "14px", fontWeight: 600, borderRadius: "8px", cursor: "pointer",
              backdropFilter: "blur(8px)", transition: "background 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
            >+ Watchlist</button>

            <button style={{
              width: "46px", height: "46px", borderRadius: "50%",
              background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.25)",
              color: "#fff", fontSize: "18px", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              backdropFilter: "blur(8px)",
            }}>ℹ</button>
          </div>
        </div>

        {/* Slide number */}
        <div style={{ position: "absolute", bottom: "50px", right: "50px", fontSize: "13px", color: "#666" }}>
          <span style={{ color: "#fff", fontWeight: 700, fontSize: "20px" }}>0{cur + 1}</span>
          <span style={{ margin: "0 4px" }}>/</span>0{slides.length}
        </div>

        {/* Prev / Next */}
        {[{ side: "left", val: "18px", fn: () => goTo((cur - 1 + slides.length) % slides.length), char: "‹" },
          { side: "right", val: "18px", fn: () => goTo((cur + 1) % slides.length), char: "›" }].map(({ side, val, fn, char }) => (
          <button key={side} onClick={fn} style={{
            position: "absolute", [side]: val, top: "50%", transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.12)",
            color: "#fff", fontSize: "26px", width: "48px", height: "48px",
            borderRadius: "50%", cursor: "pointer", zIndex: 10,
            display: "flex", alignItems: "center", justifyContent: "center",
            backdropFilter: "blur(6px)", transition: "background 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(229,9,20,0.7)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(0,0,0,0.5)"}
          >{char}</button>
        ))}

        {/* Dots */}
        <div style={{ position: "absolute", bottom: "28px", left: "50px", display: "flex", gap: "8px" }}>
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              height: "3px", width: i === cur ? "32px" : "16px",
              border: "none", cursor: "pointer", padding: 0, borderRadius: "2px",
              background: i === cur ? "#e50914" : "rgba(255,255,255,0.25)",
              transition: "all 0.4s",
            }} />
          ))}
        </div>
      </div>

      {/* ══ MOVIE ROWS ══ */}
      <div style={{ paddingTop: "48px" }}>
        <MovieRow title="🔥 Trending Now" movies={trending} />
        <MovieRow title="🆕 Latest Releases" movies={latest} />
        <MovieRow title="⭐ Top Rated" movies={[...trending].reverse()} />
      </div>

      {/* ══ FOOTER ══ */}
      <footer style={{
        borderTop: "1px solid #1e1e1e", padding: "40px 50px 30px",
        display: "flex", justifyContent: "space-between", alignItems: "flex-start",
        flexWrap: "wrap", gap: "24px",
      }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
            <div style={{ width: "28px", height: "28px", background: "#e50914", borderRadius: "5px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>▶</div>
            <span style={{ fontWeight: 900, fontSize: "18px", letterSpacing: "1px" }}>STREAMIT</span>
          </div>
          <p style={{ fontSize: "12px", color: "#555", maxWidth: "240px", lineHeight: 1.6 }}>Your ultimate destination for movies, shows & entertainment.</p>
        </div>
        <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
          {[["Pages", ["Home", "Movies", "TV Shows", "Pricing"]], ["Support", ["FAQ", "Contact", "Privacy", "Terms"]]].map(([heading, links]) => (
            <div key={heading}>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#e50914", letterSpacing: "1.5px", marginBottom: "12px", textTransform: "uppercase" }}>{heading}</div>
              {links.map(l => (
                <div key={l} style={{ marginBottom: "8px" }}>
                  <a href="#" style={{ color: "#666", textDecoration: "none", fontSize: "13px", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "#fff"}
                    onMouseLeave={e => e.target.style.color = "#666"}
                  >{l}</a>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ fontSize: "12px", color: "#444", alignSelf: "flex-end" }}>© 2026 Streamit. All Rights Reserved.</div>
      </footer>

    </div>
  );
}
