import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteMenu, getAllMenu } from "../services/actions/menuAction";
import { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";

const Home = () => {

    const { menus } = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit-menu/${id}`);
    };

    const handleDelete = (id) => {
        dispatch(deleteMenu(id));
    };

    useEffect(() => {
        dispatch(getAllMenu());
    }, []);

    return (
        <>
            <h2>HOME</h2>

            {menus.length > 0 ? (
                <Table bordered>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>NAME</th>
                            <th>DESCRIPTION</th>
                            <th>CATEGORY</th>
                            <th>PRICE</th>
                            <th>IMAGE</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            menus.map(menu => (
                                <tr key={menu.id}>
                                    <td>{menu.id}</td>
                                    <td>{menu.name}</td>
                                    <td>{menu.description}</td>
                                    <td>{menu.category}</td>
                                    <td>{menu.price}</td>
                                    <td>
                                        <img src={menu.img} width={80} />
                                    </td>
                                    <td>
                                        <Button onClick={() => handleEdit(menu.id)}>
                                            <FaEdit />
                                        </Button>

                                        <Button
                                            variant="danger"
                                            onClick={() => handleDelete(menu.id)}
                                        >
                                            <FaTrash />
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            ) : (
                "No Data Found"
            )}
        </>
    );
};

export default Home;