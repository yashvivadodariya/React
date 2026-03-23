import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { getStorageData, setStorageData } from "../services/storageData";
import { useNavigate } from "react-router-dom";
import generateUniqueId from "generate-Unique-id"

const AddPage = () => {

  const navigate = useNavigate();

  const initialState = {
    id: "",
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    quantity: ""
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = generateUniqueId({ length: 6, useLetters: false });

    const newProduct = { ...formData, id: newId };

    let data = getStorageData();
    data.push(newProduct);

    setStorageData(data);
    navigate("/");
  };

  return (
   <Container className="custom-container">
  <div className="form-wrapper">
    <h2 className="page-heading">Add Page</h2>

    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-4">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter page title"
          onChange={handleChange}
          className="custom-input"
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          placeholder="Enter description"
          onChange={handleChange}
          className="custom-input"
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          name="image"
          placeholder="Paste image link"
          onChange={handleChange}
          className="custom-input"
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Category</Form.Label>
        <Form.Control
          type="text"
          name="category"
          placeholder="Enter category"
          onChange={handleChange}
          className="custom-input"
        />
      </Form.Group>

      <Button type="submit" className="custom-btn">
        Submit
      </Button>
    </Form>
  </div>
</Container>
  );
};

export default AddPage;
