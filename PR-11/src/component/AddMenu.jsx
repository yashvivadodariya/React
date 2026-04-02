import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMenuAsync } from "../services/actions/menuAction";
import { useNavigate } from "react-router-dom";

const AddMenuPage = ({ category }) => {
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
      { method: "POST", body: data }
    );

    const result = await res.json();
    return result.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";
    if (image) imageUrl = await uploadImage();

    const newMenu = {
      ...formData,
      price: Number(formData.price),
      category,
      image: imageUrl,
    };

    dispatch(addMenuAsync(newMenu));
    navigate(`/${category}-list`);
  };

  const styles = {
    page: {
      minHeight: "100vh",
      background: "#0E0D0B",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Jost', sans-serif",
      padding: "40px",
    },

    box: {
      width: "950px",
      height: "600px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      background: "#1A1814",
      border: "1px solid rgba(201,168,76,.25)",
      boxShadow: "0 30px 80px rgba(0,0,0,.6)",
      overflow: "hidden",
    },

    left: {
      position: "relative",
    },

    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "contrast(1.1) brightness(.85)",
    },

    overlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(to top, rgba(14,13,11,.85), transparent)",
    },

    right: {
      padding: "60px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color: "#F5F0E8",
    },

    label: {
      fontSize: "10px",
      letterSpacing: "0.3em",
      color: "#C9A84C",
      textTransform: "uppercase",
      marginBottom: "10px",
    },

    title: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: "34px",
      fontWeight: "300",
      marginBottom: "10px",
    },

    sub: {
      fontSize: "13px",
      color: "rgba(245,240,232,.5)",
      marginBottom: "30px",
    },

    input: {
      background: "transparent",
      border: "none",
      borderBottom: "1px solid rgba(245,240,232,.2)",
      padding: "12px 0",
      color: "#F5F0E8",
      outline: "none",
      marginBottom: "20px",
      fontSize: "14px",
    },

    textarea: {
      background: "transparent",
      border: "none",
      borderBottom: "1px solid rgba(245,240,232,.2)",
      padding: "12px 0",
      color: "#F5F0E8",
      outline: "none",
      marginBottom: "20px",
      fontSize: "14px",
      resize: "none",
      height: "70px",
    },

    select: {
      background: "transparent",
      border: "none",
      borderBottom: "1px solid rgba(245,240,232,.2)",
      padding: "12px 0",
      color: "#F5F0E8",
      marginBottom: "25px",
      outline: "none",
    },

    btn: {
      background: "#C9A84C",
      color: "#0E0D0B",
      border: "none",
      padding: "14px",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      cursor: "pointer",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>

        <div style={styles.left}>
          <img
            style={styles.img}
            src={
              preview ||
              "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
            }
          />
          <div style={styles.overlay}></div>
        </div>

        <div style={styles.right}>
          <div style={styles.label}>Add Dish</div>
          <div style={styles.title}>Create Your Menu</div>
          <div style={styles.sub}>
          </div>

          <input
            style={styles.input}
            placeholder="Dish Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            style={styles.input}
            placeholder="Price"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />

          <textarea
            style={styles.textarea}
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <input
            style={styles.input}
            type="file"
            onChange={handleImageChange}
          />

          <select
            style={styles.select}
            name="status"
            value={formData.status ? "true" : "false"}
            onChange={handleChange}
          >
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>

          <button style={styles.btn}>
            Add Menu
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddMenuPage;