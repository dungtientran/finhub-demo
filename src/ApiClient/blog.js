import axiosConfig from "./axiosConfig";


export const getBlog = async (queryURL) => {
    try {
        const res = await axiosConfig.get(`/api/typeblogs?${queryURL}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const getBlogDetail = async (id) => {
    try {
        const res = await axiosConfig.get(`/api/blogs/${id}?populate=*`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const getAllBlog = async () => {
    try {
        const res = await axiosConfig.get('/api/blogs?populate=*');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const getViewMoreBlog = async (id, queryURL) => {
    try {
        const res = await axiosConfig.get(`/api/typeblogs/${id}?${queryURL}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const getViewMoreList = async (queryURL) => {
    try {
        const res = await axiosConfig.get(`/api/typeblogs${queryURL}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
export const incrementViews = (id) => {
    axiosConfig.post(`/api/incrementViews/${id}`);
};