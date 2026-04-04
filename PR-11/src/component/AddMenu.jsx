import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovieAsync } from "../services/actions/movieAction"; // ✅ FIX
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
    try {
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
    } catch (error) {
      console.log("Upload error:", error);
      return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";
    if (image) {
      imageUrl = await uploadImage();
    }

    // ✅ SAFE DATA (NO ERROR)
    const newMovie = {
      name: formData.name || "Test Movie",
      price: Number(formData.price) || 0,
      description: formData.description || "",
      status: formData.status ?? true,
      image: imageUrl || "",
    };

    console.log("FINAL DATA:", newMovie);

    dispatch(addMovieAsync(newMovie)); // ✅ FIXED
    navigate("/movie-list");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0E0D0B",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white"
    }}>

      <form onSubmit={handleSubmit} style={{
        width: "400px",
        padding: "30px",
        background: "#1A1814",
        border: "1px solid #C9A84C"
      }}>

        <h2>Add Movie 🎬</h2>

        <input
          placeholder="Movie Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          placeholder="Price"
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <textarea
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="file"
          onChange={handleImageChange}
          style={{ marginBottom: "10px" }}
        />

        <select
          name="status"
          value={formData.status ? "true" : "false"}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px" }}
        >
          <option value="true">Available</option>
          <option value="false">Not Available</option>
        </select>

        <button type="submit" style={{
          width: "100%",
          padding: "10px",
          background: "#C9A84C",
          border: "none"
        }}>
          Add Movie
        </button>

      </form>
    </div>
  );
};

export default AddMovie;