import instance from "./instance";

export const getAllUser = () => {
    const url = "/users";
    return instance.get(url);
};
export const getUser = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
};
export const removeUser = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url);
};
export const editUser = (item) => {
    const url = `/users/${item.id}`;
    return instance.put(url, item);
};
export const addUser = (item) => {
    const url = "/users";
    return instance.post(url, item);
};