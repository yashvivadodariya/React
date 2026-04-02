import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenuAsync, deleteMenuAsync } from "../services/actions/menuAction";
import { useNavigate } from "react-router-dom";

const MenuList = ({ category }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ✅ FIX: correct state access
  const { menus = [] } = useSelector(state => state.menu);

  useEffect(() => {
    dispatch(getAllMenuAsync());
  }, [dispatch]);

  // ✅ safe filter (avoid crash if category undefined)
  const filtered = menus.filter(
    (m) =>
      m.category &&
      category &&
      m.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <>
      <style>{`
.menu-page {
  background: var(--dark);
  padding: 100px 60px;
  min-height: 100vh;
}

.menu-title {
  text-align: center;
  margin-bottom: 60px;
}

.menu-title h2 {
  font-family: var(--serif);
  font-size: 42px;
  color: var(--cream);
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.menu-card {
  background: var(--dark2);
  border: 1px solid rgba(245,240,232,.08);
  overflow: hidden;
  transition: transform .3s, border .3s;
}

.menu-card:hover {
  transform: translateY(-6px);
  border: 1px solid var(--gold);
}

.menu-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.menu-content {
  padding: 25px;
}

.menu-name {
  font-family: var(--serif);
  font-size: 20px;
  color: var(--cream);
  margin-bottom: 10px;
}

.menu-desc {
  font-size: 13px;
  color: rgba(245,240,232,.6);
  margin-bottom: 15px;
}

.menu-price {
  color: var(--gold);
  font-size: 14px;
  margin-bottom: 10px;
}

.menu-status {
  font-size: 11px;
  margin-bottom: 15px;
}

.status-yes {
  color: var(--gold);
}

.status-no {
  color: red;
}

.menu-actions {
  display: flex;
  justify-content: space-between;
}

.btn-del, .btn-edit {
  padding: 8px 14px;
  font-size: 11px;
  border: 1px solid var(--gold);
  background: transparent;
  color: var(--gold);
  cursor: pointer;
}

.btn-del:hover {
  background: red;
  border-color: red;
  color: #fff;
}

.btn-edit:hover {
  background: var(--gold);
  color: var(--dark);
}

.empty {
  text-align: center;
  color: var(--cream);
}
`}</style>

      <div className="menu-page">

        <div className="menu-title">
          <h2>
            {category} <em>Menu</em>
          </h2>
        </div>

        {filtered.length > 0 ? (

          <div className="menu-grid">

            {filtered.map((m) => (

              <div className="menu-card" key={m.id}>

                <img
                  src={m.image || "https://via.placeholder.com/300"}
                  className="menu-img"
                />

                <div className="menu-content">

                  <h3 className="menu-name">{m.name}</h3>

                  <p className="menu-desc">{m.description}</p>

                  <div className="menu-price">₹ {m.price}</div>

                  <div className="menu-status">
                    Status:
                    <span className={m.status ? "status-yes" : "status-no"}>
                      {m.status ? " Available" : " Not Available"}
                    </span>
                  </div>

                  <div className="menu-actions">

                    <button
                      className="btn-del"
                      onClick={() => dispatch(deleteMenuAsync(m.id))}
                    >
                      Delete
                    </button>

                    <button
                      className="btn-edit"
                      onClick={() => navigate(`/edit-menu/${m.id}`)}
                    >
                      Edit
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (
          <h4 className="empty">No Data Found</h4>
        )}

      </div>
    </>


  );
};

export default MenuList;
