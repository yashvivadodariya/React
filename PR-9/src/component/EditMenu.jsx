import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMenu, updateMenu } from "../services/actions/menuAction";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EditMenu = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { menu } = useSelector(state => state);

    const [formData, setFormData] = useState({
        id: "",
        name: "",
        category: "",
        description: "",
        price: "",
        img: ""
    });

    useEffect(() => {
        dispatch(getMenu(id));
    }, [id]);

    useEffect(() => {
        if (menu) {
            setFormData(menu);
        }
    }, [menu]);

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

        dispatch(updateMenu(formData));

        navigate("/");
    };

    return (
        <>
            <h2>Edit Menu</h2>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Label>Dish Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    >
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
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Dish Image</Form.Label>
                    <Form.Control
                        type="file"
                        name="img"
                        onChange={handleChange}
                    />
                    <br />
                    {formData.img && (
                        <img src={formData.img} width={120} />
                    )}
                </Form.Group>

                <Button type="submit">Update Menu</Button>

            </Form>
        </>
    );
};

export default EditMenu;