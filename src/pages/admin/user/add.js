import { addCate } from "../../../api/categoryAPI";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";


const AddUserForm = () => {
    const history = useHistory()
    const [users, setUssers] = useState([]);


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
            setUssers([...users, data]);
            reset(data)
        } catch (error) {
            console.log(error);
        }
        // };
        // history.push("/admin/category");
        // onHandleAdd()

    };

    return (
        <>
            {/* {JSON.stringify(controlValue)} */}
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="h2">Theem user mục</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("username", { required: true })}
                    />
                    {errors.name && (
                        <span className="d-block mt-2 text-danger">
                            Bắt buộc phải nhập trường này
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register("email", { required: true })}
                    />
                    {errors.name && (
                        <span className="d-block mt-2 text-danger">
                            Bắt buộc phải nhập trường này
                        </span>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        {...register("password", { required: true })}
                    />
                    {errors.name && (
                        <span className="d-block mt-2 text-danger">
                            Bắt buộc phải nhập trường này
                        </span>
                    )}
                </div>

                <button type="submit" className="btn btn-primary">
                    Thêm danh mục
                </button>
            </form>
        </>
    );
};
export default AddUserForm;
