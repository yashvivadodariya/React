import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMenuAsync } from "../services/actions/menuAction";
import { useNavigate } from "react-router-dom";

const AddMenuPage = ({ category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    status: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "status" ? value === "true" : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMenu = {
      ...formData,
      price: Number(formData.price),
      category,
    };

    dispatch(addMenuAsync(newMenu));
    navigate(`/${category}-list`);

    setFormData({
      name: "",
      price: "",
      description: "",
      image: "",
      status: true,
    });
  };

  return (
    <>
      <style>{`
        :root {
          --gold:#C9A84C;
          --dark:#0E0D0B;
          --cream:#F5F0E8;
        }

        .reservation-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
        }

        .reservation-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .reservation-form {
          background: var(--cream);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px;
        }

        .label {
          font-size: 10px;
          letter-spacing: .3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }

        .reservation-form h2 {
          font-size: 32px;
          margin-bottom: 40px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .reservation-form input,
        .reservation-form select {
          border: none;
          border-bottom: 1px solid rgba(0,0,0,.2);
          padding: 10px 0;
          margin-bottom: 20px;
          outline: none;
          background: transparent;
        }

        .btn-dark {
          margin-top: 20px;
          padding: 16px;
          background: var(--dark);
          color: white;
          border: none;
          cursor: pointer;
          letter-spacing: 2px;
        }
      `}</style>

      {/* MAIN */}
      <div className="reservation-section">

        {/* LEFT IMAGE */}
        <div className="reservation-img">
          <img
            src={
              formData.image ||
              "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
            }
            alt="food"
          />
        </div>

        <div className="reservation-form">

          <span className="label">Add Item</span>

          <h2>
            Create <em>Your Dish</em>
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="number"
                name="price"
                placeholder="Enter Price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              name="description"
              placeholder="Enter Description"
              value={formData.description}
              onChange={handleChange}
            />

            <input
              type="text"
              name="image"
              placeholder="Enter Image URL"
              value={formData.image}
              onChange={handleChange}
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>

            <button className="btn-dark">Add Menu</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMenuPage;