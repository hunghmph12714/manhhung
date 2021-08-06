import { addCate } from "../../../api/categoryAPI";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";


const AddCategoryForm = () => {
    const history = useHistory()
    const [categories, setCategories] = useState([]);


    const {
        register,
        handleSubmit,
        formState: { errors }, reset
    } = useForm();
    const onSubmit = async (data) => {
        const newItem = {
            id: Math.random().toString(7).substring(5),
            ...data
        };
        console.log(newItem);

        // props.onAdd(newItem);


        // const onHandleAdd = async (newItem) => {
        try {

            const { data } = await addCate(newItem)
            // const data = await response.json();
            setCategories(data);
            // reset(data)
        } catch (error) {
            console.log(error);
        }
        // };
        history.push("/admin/category");
        // onHandleAdd()

    };

    return (
        <>
            {/* {JSON.stringify(controlValue)} */}
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="h2">Quản lý Danh mục</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Tên danh mục</label>
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
                {/* <div className="mb-3">
                    <label className="form-label">Giá sản phẩm</label>
                    <input
                        type="number"
                        className="form-control"
                        {...register("price")}
                    />
                </div>
                <div className="mb-3">
                    <select className="form-control" {...register("status")}>
                        <option value="0">Hết hàng</option>
                        <option value="1">Còn hàng</option>
                    </select>
                </div> */}

                <button type="submit" className="btn btn-primary">
                    Thêm danh mục
                </button>
            </form>
        </>
    );
};
export default AddCategoryForm;
