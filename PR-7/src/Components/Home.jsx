import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { getStorageData, setStorageData } from "../services/storageData";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [pages, setPages] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    let data = getStorageData();
    let newData = data.filter(product => product.id != id)

    setPages(newData);
    setStorageData(newData);
  }

  const handleEdit = (id) => {
    navigate(`/edit-page/${id}`);
  }

  useEffect(() => {
    let data = getStorageData();
    setPages(data);
  }, [])

  return (
   <Container fluid className="products-container">
  <h2 className="products-heading">All Products</h2>

  <Row>
    {pages.map((product) => (
      <Col md={4} key={product.id} className="mb-4">

        <Card className="product-card h-100">
          <div className="image-wrapper">
            <Card.Img
              variant="top"
              src={product.image}
              className="product-image"
            />
          </div>

          <Card.Body>
            <Card.Title className="product-title">
              {product.title}
            </Card.Title>

            <Card.Text className="product-desc">
              {product.description}
            </Card.Text>

            <Card.Text className="product-category">
              Category: <span>{product.category}</span>
            </Card.Text>

            <div className="button-group">
              <Button
                className="edit-btn"
                onClick={() => handleEdit(product.id)}
              >
                Edit
              </Button>

              <Button
                className="delete-btn"
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
