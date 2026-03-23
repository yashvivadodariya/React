import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuAsync, updateMenuAsync } from "../services/actions/menuAction";
import { useNavigate, useParams } from "react-router-dom";

const EditMenu = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { menu } = useSelector(state => state);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(getMenuAsync(id));
  }, []);

  useEffect(() => {
    if(menu){
      setName(menu.name);
      setPrice(menu.price);
      setDescription(menu.description);
      setImage(menu.image);
    }
  }, [menu]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: Number(id),
      name,
      price,
      description,
      image,
      category: menu.category
    }

    dispatch(updateMenuAsync(obj));
    navigate(`/${menu.category}-list`);
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        <span style={styles.label}>Edit Menu</span>

        <h2 style={styles.heading}>
          Refine Your <em>Dish</em>
        </h2>

        <form onSubmit={handleSubmit} style={styles.form}>

          <div style={styles.field}>
            <label>Name</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} />
          </div>

          <div style={styles.field}>
            <label>Price</label>
            <input value={price} onChange={(e)=>setPrice(e.target.value)} />
          </div>

          <div style={styles.field}>
            <label>Description</label>
            <input value={description} onChange={(e)=>setDescription(e.target.value)} />
          </div>

          <div style={styles.field}>
            <label>Image URL</label>
            <input value={image} onChange={(e)=>setImage(e.target.value)} />
          </div>

          <button type="submit" style={styles.button}>
            Update Menu →
          </button>

        </form>
      </div>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "var(--dark)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px"
  },

  card: {
    width: "420px",
    background: "var(--dark2)",
    padding: "50px",
    border: "1px solid rgba(201,168,76,0.2)",
  },

  label: {
    fontSize: "10px",
    letterSpacing: ".3em",
    textTransform: "uppercase",
    color: "var(--gold)",
    marginBottom: "20px",
    display: "block"
  },

  heading: {
    fontFamily: "var(--serif)",
    fontSize: "32px",
    fontWeight: "300",
    color: "var(--cream)",
    marginBottom: "40px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "25px"
  },

  field: {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  },

  fieldLabel: {
    fontSize: "10px",
    letterSpacing: ".2em",
    textTransform: "uppercase",
    color: "rgba(245,240,232,0.5)"
  },

  input: {
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(245,240,232,0.2)",
    padding: "10px 0",
    color: "var(--cream)",
    fontSize: "14px",
    outline: "none"
  },

  button: {
    marginTop: "20px",
    padding: "16px",
    background: "transparent",
    border: "1px solid var(--gold)",
    color: "var(--gold)",
    letterSpacing: ".2em",
    textTransform: "uppercase",
    cursor: "pointer",
    transition: "0.3s"
  }
};

export default EditMenu;