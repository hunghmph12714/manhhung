import { getCate } from "../../../api/categoryAPI";
import { Link } from "react-router-dom";
// import { useEffect } from "react/cjs/react.production.min";
import { useEffect, useState } from "react";
import { getAll } from "api/productAPI";


export default function ListProduct(props) {
    // {}
    // console.log(this.props.);

    console.log('props', props);
    // async function CateIdProduct(id) {
    //     const { data } = await getCate(id);
    //     console.log({ data });
    //     return data.name
    // }z
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await getAll();
                setProducts(data);
                console.log('pro', data);

            } catch (error) {
                console.log(error);
            }
        };
        getProduct();
    }, [props]);
    console.log("hung", products)
    return (
        <div>
            <hr />
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="h2">Quản lý sản phẩm</h2>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to="/admin/product/add" className="btn btn-sm btn-outline-primary">
                        Thêm sản phẩm
                    </Link>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Giá</th>
                            <th scope="col">Ảnh</th>

                            <th scope="col">Danh muc</th>
                            <th scope="col"> Xóa, sủa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td><img src={item.image} width={'100px'}></img></td>

                                <td>{item.category.name}</td>

                                <td className="text-right">
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => props.onRemove(item.id)}
                                    >
                                        Delete
                                    </button>
                                    <Link
                                        className="btn btn-primary btn-sm ms-1"
                                        to={`/admin/product/${item.id}/edit`}
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
