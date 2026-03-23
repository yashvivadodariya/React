import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteMenu, getAllMenu } from "../services/actions/menuAction";
import { useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import "./Home.css";

const Home = () => {
    const { menus } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit-menu/${id}`);
    };

    const handleDelete = (id) => {
        dispatch(deleteMenu(id));
    };

    useEffect(() => {
        dispatch(getAllMenu());
    }, []);

    return (
        <div className="restaurant-page">

            {/* ── Navbar ── */}
            <nav className="restaurant-navbar">
                <a href="/" className="brand-name">
                    Fi<span>dal</span>go
                </a>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <a href="/book" className="nav-cta">Book a Table</a>
            </nav>

            {/* ── Page Header ── */}
            <div className="page-header">
                <span className="section-label">/ Our Offerings</span>
                <h2>Menu <em>Collection</em></h2>
                <div className="header-divider">
                    <span className="line"></span>
                    <span className="ornament">✦</span>
                    <span className="line"></span>
                </div>
            </div>

            {/* ── Add New Button ── */}
            <button
                className="btn-add-menu"
                onClick={() => navigate("/add-menu")}
            >
                <FaPlus size={9} />
                Add New Item
            </button>

            {/* ── Table / Empty State ── */}
            <div className="menu-table-container">
                {menus.length > 0 ? (
                    <table className="menu-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {menus.map(menu => (
                                <tr key={menu.id}>
                                    <td>{menu.id}</td>
                                    <td className="col-name">{menu.name}</td>
                                    <td className="col-desc">{menu.description}</td>
                                    <td>
                                        <span className="category-badge">
                                            {menu.category}
                                        </span>
                                    </td>
                                    <td className="col-price">
                                        ₹{menu.price}
                                    </td>
                                    <td>
                                        <img
                                            src={menu.img}
                                            alt={menu.name}
                                            className="menu-image"
                                        />
                                    </td>
                                    <td>
                                        <div className="action-buttons">
                                            <button
                                                className="btn-action btn-edit"
                                                onClick={() => handleEdit(menu.id)}
                                                title="Edit"
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                className="btn-action btn-delete"
                                                onClick={() => handleDelete(menu.id)}
                                                title="Delete"
                                            >
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="empty-state">
                        <div className="empty-ornament">✦</div>
                        <h3>No Dishes Found</h3>
                        <p>Start by adding your first menu item</p>
                    </div>
                )}
            </div>

            {/* ── Footer Strip ── */}
            <footer className="restaurant-footer-strip">
                <span className="footer-strip-brand">Fidalgo</span>
                <span className="footer-strip-copy">© 2025 · All Rights Reserved</span>
            </footer>

        </div>
    );
};

export default Home;
