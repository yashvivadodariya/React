import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMenuAsync } from "../services/actions/menuAction";
import { useNavigate } from "react-router-dom";

const AddMenu = ({ category }) => {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [status, setStatus] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: Date.now(),
      name,
      price,
      description,
      image,
      status,
      category
    }

    dispatch(addMenuAsync(obj));

    navigate(`/${category}-list`);
  }

  return (
    <div className="container mt-5">
  <div className="card p-4 shadow">

    <h3 className="text-center mb-4">
      Add {category}
    </h3>

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter Name"
        className="form-control mb-3"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Price"
        className="form-control mb-3"
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Description"
        className="form-control mb-3"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Image URL"
        className="form-control mb-3"
        onChange={(e) => setImage(e.target.value)}
      />

      <select
        className="form-control mb-3"
        onChange={(e) => setStatus(e.target.value === "true")}
      >
        <option value={true}>Available</option>
        <option value={false}>Not Available</option>
      </select>

      <button className="btn btn-success w-100">
        Add Menu
      </button>

    </form>

  </div>
</div>
  )
}

export default AddMenu;