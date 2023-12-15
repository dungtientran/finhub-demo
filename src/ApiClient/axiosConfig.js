import axios from "axios";
const cmsUrl = process.env.REACT_APP_CMS_URL;

export const API_URL = 'https://35j85drxff.execute-api.ap-southeast-1.amazonaws.com/dev/'

const axiosConfig = axios.create({
    baseURL: cmsUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosConfig