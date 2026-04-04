import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllMovieAsync,
  deleteMovieAsync,
} from "../services/actions/movieAction";
import { useNavigate } from "react-router-dom";

const MovieList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { movies = [] } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(getAllMovieAsync());
  }, [dispatch]);

  return (
    <div className="page">
      <style>{`
        .page {
          min-height: 100vh;
          background: #0d0d0d;
          padding: 80px 50px;
          font-family: Arial;
        }

        /* glow */
        .glow {
          position: absolute;
          width: 500px;
          height: 500px;
          background: #e50914;
          filter: blur(200px);
          opacity: 0.2;
          top: 10%;
          left: 20%;
          z-index: 0;
        }

        .title {
          text-align: center;
          color: white;
          font-size: 40px;
          font-weight: 700;
          margin-bottom: 50px;
          letter-spacing: 2px;
        }

        .title span {
          color: #e50914;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          position: relative;
          z-index: 2;
        }

        .card {
          background: rgba(20,20,20,0.85);
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          transition: 0.3s;
          backdrop-filter: blur(10px);
        }

        .card:hover {
          transform: translateY(-8px);
          border: 1px solid #e50914;
          box-shadow: 0 10px 30px rgba(229,9,20,0.3);
        }

        .img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .content {
          padding: 15px;
          color: white;
        }

        .name {
          font-size: 18px;
          font-weight: 600;
        }

        .desc {
          font-size: 12px;
          color: #aaa;
          margin: 8px 0;
        }

        .price {
          color: #e50914;
          font-weight: bold;
        }

        .status {
          font-size: 12px;
          margin: 8px 0;
        }

        .yes {
          color: #22c55e;
        }

        .no {
          color: red;
        }

        .btns {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }

        .btn {
          padding: 6px 10px;
          border: none;
          cursor: pointer;
          font-size: 12px;
          border-radius: 6px;
          transition: 0.3s;
        }

        .del {
          background: transparent;
          border: 1px solid red;
          color: red;
        }

        .del:hover {
          background: red;
          color: white;
        }

        .edit {
          background: transparent;
          border: 1px solid #e50914;
          color: #e50914;
        }

        .edit:hover {
          background: #e50914;
          color: white;
        }

        .empty {
          text-align: center;
          color: white;
        }
      `}</style>

      <div className="glow"></div>

      <h1 className="title">
        🎬 STREAM<span>IT</span> MOVIES
      </h1>

      {movies.length > 0 ? (
        <div className="grid">
          {movies.map((m) => (
            <div className="card" key={m.id}>
              <img
                src={m.image || "https://via.placeholder.com/300"}
                className="img"
              />

              <div className="content">
                <div className="name">{m.name}</div>
                <div className="desc">{m.description}</div>

                <div className="price">⭐ {m.price}</div>
                <div className="btns">
                  <button
                    className="btn del"
                    onClick={() => dispatch(deleteMovieAsync(m.id))}
                  >
                    Delete
                  </button>

                  <button
                    className="btn edit"
                    onClick={() => navigate(`/edit-movie/${m.id}`)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h3 className="empty">No Movies Found</h3>
      )}
    </div>
  );
};

export default MovieList;