import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuAsync, deleteMenuAsync } from "../services/actions/menuAction";
import { useNavigate } from "react-router-dom";

const MenuList = ({ category }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { menus = [] } = useSelector(state => state);

  useEffect(() => {
    dispatch(getAllMenuAsync());
  }, []);

  const filtered = menus.filter(
    m => m.category?.toLowerCase() === category.toLowerCase()
  );

  const handleEdit = (id) => {
    navigate(`/edit-menu/${id}`);
  }

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4 text-capitalize">
        {category} Menu
      </h2>

      <div className="row">

        {
          filtered.length > 0 ? (
            filtered.map((m) => (

              <div className="col-md-4 mb-4" key={m.id}>

                <div className="card shadow h-100">

                  {/* IMAGE */}
                  <img
                    src={m.image || "https://via.placeholder.com/300"}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />

                  <div className="card-body">

                    <h5 className="card-title">{m.name}</h5>

                    <p className="card-text text-muted">
                      {m.description}
                    </p>

                    <h6 className="text-success">
                      ₹ {m.price}
                    </h6>

                    <p>
                      Status:{" "}
                      <span className={m.status ? "text-success" : "text-danger"}>
                        {m.status ? "Available" : "Not Available"}
                      </span>
                    </p>

                  </div>

                  <div className="card-footer d-flex justify-content-between">

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => dispatch(deleteMenuAsync(m.id))}
                    >
                      Delete
                    </button>

                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEdit(m.id)}
                    >
                      Edit
                    </button>

                  </div>

                </div>

              </div>

            ))
          ) : (
            <h5 className="text-center">No Data Found</h5>
          )
        }

      </div>
    </div>
  )
}

export default MenuList;