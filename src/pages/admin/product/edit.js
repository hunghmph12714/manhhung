import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { get } from "../../../api/productAPI";

const EditProductForm = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const { id } = useParams();
    const history = useHistory();


    console.log(useParams());

    const [product, setProduct] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await get(id);
                setProduct(data);
                reset(data);
            } catch (error) {

            }
        };
        getProduct();
    }, []);

    const onSubmit = (data) => {
        const newItem = {
            id,
            ...data
        };
        console.log(newItem);
        props.onEdit(newItem);
        history.push("/admin/product");
    };
    return (
        <>
            {/* {JSON.stringify(product)} */}
            {/* {JSON.stringify(controlValue)} */}
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="h2">cập nhật sản phẩm</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Tên sản phẩm</label>
                    <input
                        type="text"
                        defaultValue={product.name}
                        className="form-control"
                        {...register("name", { required: true })}
                    />
                    {errors.name && (
                        <span className="d-block mt-2 text-danger">
                            Bắt buộc phải nhập trường này
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Giá sản phẩm</label>
                    <input
                        type="number"
                        defaultValue={product.price}
                        className="form-control"
                        {...register("price", { required: true })}
                    />
                    {errors.name && (
                        <span className="d-block mt-2 text-danger">
                            Bắt buộc phải nhập trường này
                        </span>
                    )}
                </div>  <div className="mb-3">
                    <label className="form-label">Ảnh sản phẩm</label>
                    <input
                        type="text"
                        defaultValue={product.image}
                        className="form-control"
                        {...register("image", { required: true })}
                    />
                    {errors.name && (
                        <span className="d-block mt-2 text-danger">
                            Bắt buộc phải nhập trường này
                        </span>
                    )}
                </div> <div className="mb-3">
                    <select className="form-control " {...register("categoryId", { required: true })} defaultValue={product.categoryId}>
                        {props.dataCate.map((item) => (
                            <option value={item.id} >{item.name}</option>
                        ))}
                        {/* <option value="0">Hết hàng</option> */}

                    </select>  {errors.name && (
                        <span className="d-block mt-2 text-danger">
                            Bắt buộc phải nhập trường này
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <select
                        className="form-control"
                        {...register("status")}
                        defaultValue={product.status}
                    >
                        <option value="true">Hết hàng</option>
                        <option value="false">Còn hàng</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">
                    Cập nhật
                </button>
            </form>
        </>
    );
};
export default EditProductForm;
