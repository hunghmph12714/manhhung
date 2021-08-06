import { getAllUser, removeUser } from "../../../api/userAPI";
import { useEffect, useState } from "react";
// import { getAllUser } from "../../api/userAPI";
import { Link } from "react-router-dom";
// import instance from "../../api/instance";

const ListUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await getAllUser();
                setUsers(data);
            } catch (error) { }
        };
        getUser();
    }, []);



    const onHandleRemoveUser = async (id) => {
        try {
            const { data } = await removeUser(id);
            const newUsers = users.filter((item) => item.id !== id);
            setUsers(newUsers);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <hr />
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="h2">Quản lý danh mục</h2>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to="/admin/user/add" className="btn btn-sm btn-outline-primary">
                        Thêm User
                    </Link>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm ">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Email</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>

                                {/* <td>{item.price}</td> */}
                                <td className="text-right">
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => onHandleRemoveUser(item.id)}
                                    >
                                        Delete
                                    </button>
                                    <Link
                                        className="btn btn-primary btn-sm ms-1"
                                        to={`/admin/user/${item.id}/edit`}
                                    >
                                        Edit
                                    </Link>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ListUser;