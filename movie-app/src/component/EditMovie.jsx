import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieAsync, updateMovieAsync } from "../services/actions/movieAction";
import { useNavigate, useParams } from "react-router-dom";

const EditMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { movie } = useSelector((state) => state.movie);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    status: true,
    image: "",
  });

  useEffect(() => {
    dispatch(getMovieAsync(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (movie) {
      setFormData({
        name: movie.name || "",
        price: movie.price || "",
        description: movie.description || "",
        status: movie.status ?? true,
        image: movie.image || "",
      });
    }
  }, [movie]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "status" ? value === "true" : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedMovie = {
      ...formData,
      id,
      price: Number(formData.price),
    };

    const success = await dispatch(updateMovieAsync(updatedMovie));

    if (success) navigate("/movie-list");
  };

  return (
    <div className="page">
      <style>{`
        .page {
          min-height: 100vh;
          background: #0d0d0d;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: Arial;
          position: relative;
          overflow: hidden;
        }

        .glow {
          position: absolute;
          width: 500px;
          height: 500px;
          background: #e50914;
          filter: blur(200px);
          opacity: 0.2;
          top: 10%;
          left: 20%;
        }

        .card {
          width: 420px;
          padding: 35px;
          background: rgba(20,20,20,0.9);
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.8);
          color: white;
          z-index: 2;
        }

        .title {
          text-align: center;
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 25px;
        }

        .title span {
          color: #e50914;
        }

        .input {
          width: 100%;
          margin-bottom: 12px;
          padding: 10px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          outline: none;
          border-radius: 6px;
        }

        textarea.input {
          height: 80px;
          resize: none;
        }

        .btn {
          width: 100%;
          padding: 12px;
          background: #e50914;
          border: none;
          color: white;
          font-weight: bold;
          cursor: pointer;
          border-radius: 6px;
          transition: 0.3s;
          margin-top: 10px;
        }

        .btn:hover {
          background: #ff1a1a;
        }
      `}</style>

      <div className="glow"></div>

      <form className="card" onSubmit={handleSubmit}>
        <div className="title">
          EDIT <span>MOVIE</span> 🎬
        </div>

        <input
          className="input"
          placeholder="Movie Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          className="input"
          placeholder="Price"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <textarea
          className="input"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          className="input"
          placeholder="Image URL"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <button className="btn" type="submit">
          Update Movie
        </button>
      </form>
    </div>
  );
};

export default EditMovie;