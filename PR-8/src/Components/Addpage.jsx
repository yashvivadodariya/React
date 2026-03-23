import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { getStorageData, setStorageData } from "../services/storageData";
import { useNavigate } from "react-router-dom";
import generateUniqueId from "generate-unique-id";

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

    const newProduct = { 
      ...formData, 
      id: newId,
      price: Number(formData.price),
      quantity: Number(formData.quantity)
    };

    let data = getStorageData() || [];
    data.push(newProduct);

    setStorageData(data);
    navigate("/");
  };

  return (
    <Container className="mt-4">
      <h2>Add Product</h2>

      <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            name="title" 
            value={formData.title}
            onChange={handleChange} 
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            as="textarea" 
            name="description" 
            value={formData.description}
            onChange={handleChange} 
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control 
            type="text" 
            name="image" 
            value={formData.image}
            onChange={handleChange} 
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select 
            name="category" 
            value={formData.category} 
            onChange={handleChange}
            required
          >
            <option value="">-- Select Category --</option>
            <option value="Fashion">Fashion</option>
            <option value="Electronics">Electronics</option>
            <option value="Grocery">Grocery</option>
            <option value="Beauty">Beauty</option>
            <option value="Furniture">Furniture</option>
            <option value="Sports">Sports</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control 
            type="number" 
            name="price" 
            value={formData.price}
            onChange={handleChange} 
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control 
            type="number" 
            name="quantity" 
            value={formData.quantity}
            onChange={handleChange} 
            required
          />
        </Form.Group>

        <Button type="submit">Submit</Button>

      </Form>
    </Container>
  );
};

export default AddPage;