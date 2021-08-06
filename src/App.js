// import { getCate } from "api/categoryAPI";
import { getAllCate, removeCate } from "api/categoryAPI";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { getAll, getAllPage, getFinter, getSearch } from "./api/productAPI";
import { remove } from "./api/productAPI";
import { add, edit } from "./api/productAPI";
import Routes from "./Routes"

// import "./styles.css";

export default function App(props) {
  const history = useHistory()
  const [page, setpage] = useState([])
  // const [pagesize] = useState(8)
  const [products, setProducts] = useState([]);
  useEffect(() => {

    // const getProducts = async () => {

    //   try {
    //     // const params = {
    //     //   page: page,
    //     //   pagesize: pagesize
    //     // }

    //     const { data } = await getAll();
    //     setProducts(data);
    //     // console.log(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getProducts();
    // history.push("/admin/product");
    const getPageProducts = async (page) => {
      if (page == null) {
        page = 1
      }
      try {
        const { data } = await getAllPage(page);
        setProducts(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPageProducts(page)
  }, [props]);
  // Phân trag
  const getPageProducts = async (page) => {

    try {
      // if (page == null) {
      //   page == 1
      // }

      const { data } = await getAllPage(page);

      setProducts(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };


  // Xoa san pham
  const onHandleRemove = async (id) => {
    try {
      const { data } = await remove(id);
      const newProducts = products.filter((item) => item.id !== id);
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
  // Them san pham
  const onHandleAdd = async (item) => {
    try {

      const { data } = await add(item)
      // const data = await response.json();
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };
  //sửa sản phẩm
  const onHandleEdit = async (item) => {
    // console.log("app.js", item);
    try {
      const { data } = await edit(item);
      console.log(data);
      const newProducts = products.map((product) =>
        product.id == data.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
  // DANH SACH CATEGORY
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      try {
        const { data } = await getAllCate();
        setCategories(data);
      } catch (error) { }
    };
    getCategory();
  }, []);
  //Xoa CATEGORY
  const onHandleRemoveCate = async (id) => {
    try {
      const { data } = await removeCate(id);
      const newCategories = categories.filter((item) => item.id !== id);
      setCategories(newCategories);
    } catch (error) {
      console.log(error);
    }
  };

  //Search Product


  const OnSearch = async (value) => {
    try {
      if (!value.sort || !value.order) {
        value.sort = "name";
        value.order = "asc"
      }

      const { data } = await getSearch(value);
      setProducts(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const OnFinter = async (value) => {
    try {

      const { data } = await getFinter(value);
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // history.push("/admin/product");

  // Sp mới nhất



  return (

    <Routes data={products} onRemove={onHandleRemove} onAdd={onHandleAdd}
      onEdit={onHandleEdit} dataCate={categories}
      onRemoveCate={onHandleRemoveCate} onFinter={OnFinter}
      onSearch={OnSearch} onPage={getPageProducts} />

  );
}
