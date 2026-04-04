import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovieAsync } from "../services/actions/movieAction";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    status: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "status" ? value === "true" : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "MenuImage");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dg5p06d68/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    return result.secure_url || "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";
    if (image) imageUrl = await uploadImage();

    const newMovie = {
      name: formData.name,
      price: Number(formData.price),
      description: formData.description,
      status: formData.status,
      image: imageUrl,
    };

    dispatch(addMovieAsync(newMovie));
    navigate("/movie-list");
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

        /* glow effect */
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

        .file {
          margin-bottom: 10px;
          color: white;
        }

        .preview {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 10px;
          border: 1px solid rgba(255,255,255,0.1);
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
        }

        .btn:hover {
          background: #ff1a1a;
        }

        select.input {
          cursor: pointer;
        }
      `}</style>

      <div className="glow"></div>

      <form className="card" onSubmit={handleSubmit}>
        <div className="title">
          ADD <span>MOVIE</span> 🎬
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
          className="file"
          type="file"
          onChange={handleImageChange}
        />

        {preview && <img src={preview} className="preview" />}

        <button className="btn" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;