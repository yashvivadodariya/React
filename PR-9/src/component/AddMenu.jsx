import generateUniqueId from "generate-unique-id";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMenu } from "../services/actions/menuAction";

const AddMenu = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        description: "",
        price: "",
        img: ""
    });

    const handleChange = (e) => {

        const { name, value, files } = e.target;

        if (name === "img") {
            setFormData({
                ...formData,
                img: URL.createObjectURL(files[0])
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const newMenu = {
            ...formData,
            id: generateUniqueId({ length: 6, useLetters: false })
        };

        dispatch(addMenu(newMenu));
        navigate("/");
    };

    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label>Dish Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Dish name"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                >
                    <option>Select Category</option>
                    <option>Starter</option>
                    <option>Main Course</option>
                    <option>Dessert</option>
                    <option>Drinks</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter About Dish"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter Dish Price"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Dish Image</Form.Label>
                <Form.Control
                    type="file"
                    name="img"
                    onChange={handleChange}
                />
            </Form.Group>

            <Button type="submit">Add Menu</Button>

        </Form>
    );
};

export default AddMenu;