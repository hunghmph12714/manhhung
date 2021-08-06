import instance from "./instance";

export const getAll = () => {
    const url = `/products?_expand=category`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
export const edit = (item) => {
    const url = `/products/${item.id}`;
    return instance.put(url, item);
};
export const add = (item) => {
    const url = "/products";
    return instance.post(url, item);
};
export const getAllCateId = (idCate) => {
    const url = `/products?_expand=category&categoryId=${idCate}`;
    return instance.get(url);
};
export const getAllCateId_Ne = (idCate, id) => {
    const url = `/products?_expand=category&categoryId=${idCate}&id_ne=${id}`;
    return instance.get(url);
};
export const getAllDesc = (type) => {
    const url = `/products?_sort=price&_oderby=${type}`;
    return instance.get(url);
};
export const getSearch = (value) => {
    const url = `/products?name_like=${value.search}&_sort=${value.sort}&_order=${value.order}`;
    return instance.get(url);
};
export const getFinter = (value) => {
    const url = `/products?_sort=${value.sort}&_order=${value.order}`;
    return instance.get(url);
};
export const getNewProduct = () => {
    const url = `/products?_limit=8}`;
    return instance.get(url);
};
export const getAllPage = (page) => {
    const url = `/products?_page=${page}&_limit=8`;
    return instance.get(url);
};