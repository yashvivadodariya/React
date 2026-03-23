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

    let data = getStorageData() || [];

    let updatedData = data.map((prod) => {
      if (prod.id == id) {
        return {
          ...formData,
          price: Number(formData.price),
          quantity: Number(formData.quantity)
        };
      } else {
        return prod;
      }
    });

    setStorageData(updatedData);
    navigate("/");
  };

  useEffect(() => {
    if (id) {
      let data = getStorageData() || [];
      let record = data.find((prod) => prod.id == id);

      if (record) {
        setFormData(record);
      }
    }
  }, [id]);

  return (
    <Container className="mt-3">
      <h2>Edit Page</h2>

      <Form onSubmit={handleSubmit}>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Title</Form.Label>
          <Col sm="4">
            <Form.Control 
              type="text" 
              name="title" 
              value={formData.title} 
              onChange={handleChange} 
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Description</Form.Label>
          <Col sm="4">
            <Form.Control 
              type="text" 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Price</Form.Label>
          <Col sm="4">
            <Form.Control 
              type="number" 
              name="price" 
              value={formData.price} 
              onChange={handleChange} 
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Category</Form.Label>
          <Col sm="4">
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
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Quantity</Form.Label>
          <Col sm="4">
            <Form.Control 
              type="number" 
              name="quantity" 
              value={formData.quantity} 
              onChange={handleChange} 
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Image</Form.Label>
          <Col sm="4">
            <Form.Control 
              type="text" 
              name="image" 
              value={formData.image} 
              onChange={handleChange} 
              placeholder="Product Image URL" 
              required
            />
          </Col>
        </Form.Group>

        <Button variant="secondary" onClick={() => navigate("/")}>
          Back
        </Button>{" "}
        <Button type="submit">
          Update Page
        </Button>

      </Form>
    </Container>
  );
};

export default EditPage;