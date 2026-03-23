import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { getStorageData, setStorageData } from "../services/storageData";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [pages, setPages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let data = getStorageData() || [];
    setPages(data);
  }, []);

  const handleDelete = (id) => {
    let data = getStorageData() || [];
    let newData = data.filter(product => product.id != id);

    setPages(newData);
    setStorageData(newData);
  };

  const handleEdit = (id) => {
    navigate(`/edit-page/${id}`);
  };

  // ✅ Search in title, category, price, quantity
  const filteredProducts = pages.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.price.toString().includes(searchTerm) ||
    product.quantity.toString().includes(searchTerm)
  );

  // ✅ Sort by Price Ascending
  const handleAscending = () => {
    let sorted = [...pages].sort((a, b) =>
      Number(a.price) - Number(b.price)
    );
    setPages(sorted);
  };

  // ✅ Sort by Price Descending
  const handleDescending = () => {
    let sorted = [...pages].sort((a, b) =>
      Number(b.price) - Number(a.price)
    );
    setPages(sorted);
  };

  return (
    <Container fluid className="mt-4">
      <h2 className="text-center mb-4">All Products</h2>

      <Row className="mb-4">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>

        <Col md={4}>
          <Button variant="success" onClick={handleAscending} className="me-2">
            Price Low to High
          </Button>

          <Button variant="info" onClick={handleDescending}>
            Price High to Low
          </Button>
        </Col>
      </Row>

      <Row>
        {filteredProducts.map((product) => (
          <Col md={4} key={product.id} className="mb-4">

            <Card className="shadow h-100">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>

                <Card.Text>
                  <b>Category:</b> {product.category}
                </Card.Text>

                <Card.Text>
                  <b>Price:</b> {product.price}
                </Card.Text>

                <Card.Text>
                  <b>Quantity:</b> {product.quantity}
                </Card.Text>

                <div className="d-flex justify-content-between">
                  <Button
                    variant="warning"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </div>

              </Card.Body>
            </Card>

          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;