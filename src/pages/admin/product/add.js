import { getAllCate } from "../../../api/categoryAPI";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import firebase from "../../../firebase";

const AddProductForm = (props) => {
    const history = useHistory()

    const {
        register,
        handleSubmit,
        formState: { errors }, reset
    } = useForm();
    const onSubmit = (data) => {


        const productImage = data.image[0]
        console.log(data.image[0].name)
        let storageRef = firebase.storage().ref(`images/${productImage.name}`);
        storageRef.put(productImage).then(function () {
            console.log("Upload thành công");
            storageRef.getDownloadURL().then((url) => {


                console.log(url)
                data.price = Number(data.price)
                data.image = url
                const newItem = {
                    // id: Math.random().toString(7).substring(4,7),

                    ...data
                };
                reset(data)
                console.log(newItem);

                props.onAdd(newItem);


            })




        }).then(() => {
            history.push("/admin/product");

        })


    };


    return (
        <>
            {/* {JSON.stringify(controlValue)} */}
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="h2">Quản lý sản phẩm</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Tên sản phẩm</label>
                    <input
                        type="text"
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
                        className="form-control"
                        {...register("price", { required: true })}
                    />  {errors.name && (
                        <span className="d-block mt-2 text-danger">
                            Bắt buộc phải nhập trường này
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Ảnh sản phẩm</label>
                    <input
                        type="file"
                        id="product-img"
                        className="form-control"
                        {...register("image", { required: true })}
                    />
                    {errors.name && (
                        <span className="d-block mt-2 text-danger">
                            Bắt buộc phải nhập trường này
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <select className="form-control " {...register("categoryId", { required: true })}>
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
                    <select className="form-control" {...register("status", { required: true })}>
                        <option value="false">Hết hàng</option>
                        <option value="true">Còn hàng</option>
                    </select> {errors.name && (
                        <span className="d-block mt-2 text-danger">
                            Bắt buộc phải nhập trường này
                        </span>
                    )}
                </div>


                <button type="submit" className="btn btn-primary">
                    Thêm sản phẩm
                </button>
            </form>
        </>
    );
};
export default AddProductForm;
