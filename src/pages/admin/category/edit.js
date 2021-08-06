import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { editCate, getCate } from "../../../api/categoryAPI";

const EditCategoryForm = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const { id } = useParams();
    const history = useHistory();


    console.log(useParams());

    const [category, setCategory] = useState({});

    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await getCate(id);
                setCategory(data);
                // reset(data);
            } catch (error) {

            }
        };
        getCategory();
    }, []);

    const onSubmit = async (data) => {
        const newItem = {
            id,
            ...data
        };
        // console.log(newItem);
        // props.onEdit(newItem);
        try {
            const { data } = await editCate(newItem);
            console.log(data);
            const newCategory = data.map((category) =>
                category.id == data.id ? data : category
            );
            setCategory(newCategory);
            reset(data)
        } catch (error) {
            console.log(error);
        }
        history.push("/admin/category");
    };



    return (
        <>
            {/* {JSON.stringify(category)} */}
            {/* {JSON.stringify(controlValue)} */}
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="h2">cập nhật sản phẩm</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Tên sản phẩm</label>
                    <input
                        type="text"
                        defaultValue={category.name}
                        className="form-control"
                        {...register("name", { required: true })}
                    />
                    {errors.name && (
                        <span className="d-block mt-2 text-danger">
                            Bắt buộc phải nhập trường này
                        </span>
                    )}
                </div>


                <button type="submit" className="btn btn-primary">
                    Cập nhật
                </button>
            </form>
        </>
    );
};
export default EditCategoryForm;
