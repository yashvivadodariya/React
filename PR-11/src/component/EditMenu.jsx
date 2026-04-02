import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuAsync, updateMenuAsync } from "../services/actions/menuAction";
import { useNavigate, useParams } from "react-router-dom";

const EditMenu = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { menu } = useSelector(state => state.menu);

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    status: true,
  });

  // fetch data
  useEffect(() => {
    dispatch(getMenuAsync(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (menu) {
      setFormData({
        name: menu.name || "",
        price: menu.price || "",
        description: menu.description || "",
        image: menu.image || "",
        status: menu.status ?? true,
      });

      setPreview(menu.image || "");
    }


  }, [menu]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "status" ? value === "true" : value,
    });

  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", imageFile);
    data.append("upload_preset", "MenuImage");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dg5p06d68/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    return result.secure_url;
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setPreview("");
    setFormData({
      ...formData,
      image: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = formData.image;

    if (imageFile) {
      imageUrl = await uploadImage();
    }

    const obj = {
      ...formData,
      id: id,
      price: Number(formData.price),
      category: menu.category,
      image: imageUrl
    };

    dispatch(updateMenuAsync(obj));
    navigate(`/${menu.category}-list`);

  };

  return (
    <> <div className="reservation-section">

      <div className="reservation-img">
        <img
          src={
            preview ||
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
          }
          alt="preview"
        />
      </div>

      <div className="reservation-form">

        <span className="label">Edit Item</span>

        <h2>Refine <em>Your Dish</em></h2>

        <form onSubmit={handleSubmit}>

          <div className="form-row">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />

            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
            />
          </div>

          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />

          {/* IMAGE UPLOAD */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          {preview && (
            <button type="button" onClick={handleRemoveImage}>
              Remove Image
            </button>
          )}

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>

          <button className="btn-dark">
            Update Menu
          </button>

        </form>

      </div>

    </div>
    </>


  );
};

export default EditMenu;
