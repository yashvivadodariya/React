import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuAsync, updateMenuAsync } from "../services/actions/menuAction";
import { useNavigate, useParams } from "react-router-dom";

const EditMenu = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { menu } = useSelector(state => state);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });

  // fetch data
  useEffect(() => {
    dispatch(getMenuAsync(id));
  }, [dispatch, id]);

  // set data
  useEffect(() => {
    if (menu) {
      setFormData({
        name: menu.name || "",
        price: menu.price || "",
        description: menu.description || "",
        image: menu.image || "",
      });
    }
  }, [menu]);

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      ...formData,
      id: id, // ✅ Firebase string id
      price: Number(formData.price),
      category: menu.category
    };

    dispatch(updateMenuAsync(obj));
    navigate(`/${menu.category}-list`);
  };

  return (
    <>
      {/* ───────── CSS (UNCHANGED) ───────── */}
      <style>{`
        :root {
          --gold:#C9A84C;
          --dark:#0E0D0B;
          --dark2:#1A1814;
          --cream:#F5F0E8;
        }

        .reservation-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
        }

        .reservation-img {
          position: relative;
        }

        .reservation-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s;
        }

        .reservation-img:hover img {
          transform: scale(1.05);
        }

        .reservation-img-overlay {
          position: absolute;
          inset: 0;
          background: rgba(14,13,11,.4);
        }

        .reservation-form {
          background: var(--cream);
          color: var(--dark);
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

        .form-field {
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
        }

        .form-field label {
          font-size: 10px;
          letter-spacing: .2em;
          margin-bottom: 6px;
        }

        .form-field input {
          border: none;
          border-bottom: 1px solid rgba(0,0,0,.2);
          padding: 10px 0;
          outline: none;
          background: transparent;
        }

        .form-field input:focus {
          border-bottom: 1px solid var(--gold);
        }

        .btn-dark {
          margin-top: 30px;
          padding: 16px;
          background: var(--dark);
          color: var(--cream);
          border: none;
          letter-spacing: .2em;
          cursor: pointer;
        }
      `}</style>

      {/* ───────── UI (SAME) ───────── */}
      <div className="reservation-section">

        {/* LEFT IMAGE */}
        <div className="reservation-img">
          <img
            src={formData.image || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"}
            alt="preview"
          />
          <div className="reservation-img-overlay"></div>
        </div>

        {/* RIGHT FORM */}
        <div className="reservation-form">

          <span className="label">Edit Item</span>

          <h2>
            Refine <em>Your Dish</em>
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="form-row">
              <div className="form-field">
                <label>Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label>Price</label>
                <input
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-field">
              <label>Description</label>
              <input
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label>Image URL</label>
              <input
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </div>

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