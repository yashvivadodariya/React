import { useEffect, useState } from "react";
import "./App.css";
import { Badge, Button, Card, Col, Form, Row } from "react-bootstrap";
import generateUniqueId from "generate-unique-id";

const getSessionData = () => {
  try {
    const data = sessionStorage.getItem("employees");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

function App() {

  const initialState = {
    id: "",
    name: "",
    email: "",
    salary: "",
    department: "",
    image: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [employees, setEmployees] = useState(getSessionData());
  const [isEdit, setIsEdit] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEdit) {
      const newEmployee = {
        ...formData,
        id: generateUniqueId({ length: 6, useLetters: false }),
      };
      setEmployees([...employees, newEmployee]);
    } else {
      const updated = employees.map((emp) =>
        emp.id === formData.id ? formData : emp
      );
      setEmployees(updated);
      setIsEdit(false);
    }

    setFormData(initialState);
  };

  const handleDelete = (id) => {
    const updated = employees.filter((emp) => emp.id !== id);
    setEmployees(updated);
  };

  const handleEdit = (id) => {
    const record = employees.find((emp) => emp.id === id);
    if (record) {
      setFormData(record);
      setIsEdit(true);
    }
  };

  useEffect(() => {
    sessionStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <>
      <h2 className="text-center mt-3">Employee Form</h2>

      <Form onSubmit={handleSubmit} className="container">

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Name</Form.Label>
          <Col sm="4">
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter employee name"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Email</Form.Label>
          <Col sm="4">
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Salary</Form.Label>
          <Col sm="4">
            <Form.Control
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Enter salary"
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Department</Form.Label>
          <Col sm="4">
            <Form.Select
              name="department"
              onChange={handleChange}
              value={formData.department}
              required
            >
              <option value="">Select Department</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Graphics">Graphics</option>
              <option value="Video Editer">Video Editer</option>
              <option value="Manager">Manager</option>
              <option value="HR">HR</option>
              <option value="Full Stack">Full Stack</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">Image URL</Form.Label>
          <Col sm="4">
            <Form.Control
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Paste image link"
            />
          </Col>
        </Form.Group>

        <Button type="submit" className="ms-5">
          {isEdit ? "Update" : "Add"} Employee
        </Button>

      </Form>

      <h2 className="text-center">Employee List</h2>

      <div className="d-flex gap-4 flex-wrap justify-content-center p-3">
        {employees.map((emp) => (
          <Card style={{ width: "18rem" }} key={emp.id}>
            <Card.Img variant="top" src={emp.image || "https://via.placeholder.com/300x200?text=No+Image"}/>
            <Card.Body>
              <Card.Title>{emp.name}</Card.Title>
              <Card.Text>{emp.email}</Card.Text>

              <p>Salary: <strong>{emp.salary}</strong></p>
              <Badge bg="primary">{emp.department}</Badge>
              <br /><br />

              <Button variant="warning" onClick={() => handleEdit(emp.id)}>
                Edit
              </Button>{" "}
              <Button variant="danger" onClick={() => handleDelete(emp.id)}>
                Delete
              </Button>

            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default App;
