import { useEffect, useState } from "react";
import { Button, Form, Col, Container, Row } from "react-bootstrap";
import { getStorageData, setStorageData } from "../services/storageData";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const initialState = {
    id: "",
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    quantity: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = getStorageData();

    let updatedData = data.map((prod) => {
      if (prod.id == id) {
        return formData;
      } else {
        return prod;
      }
    });

    setStorageData(updatedData);
    setFormData(initialState);
    navigate("/");
  };

  useEffect(() => {
    if (id) {
      let data = getStorageData();
      let record = data.find((prod) => prod.id == id);

      if (record) {
        setFormData(record);
      }
    }
  }, [id]);
  return (
    <>
     <Container className="edit-container">
  <div className="edit-card">
    <h2 className="edit-heading">Edit Product</h2>

    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="edit-input"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="edit-input"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="edit-input"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="edit-input"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="text"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="edit-input"
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="edit-input"
        />
      </Form.Group>

      <div className="edit-btn-group">
        <Button
          variant="light"
          className="back-btn"
          onClick={() => navigate("/")}
        >
          Back
        </Button>

        <Button type="submit" className="update-btn">
          Update Product
        </Button>
      </div>

    </Form>
  </div>
</Container>  
    </>
  );
};

export default EditPage;
