import axios from "axios";
import { base_url } from "../../../static/staticData";

const getBrands = async () => {
    const res = await axios.get(`${base_url}/brand/`, { withCredentials: true })
    return res.data
}

const getColor = async () => {
    const res = await axios.get(`${base_url}/color/`, { withCredentials: true })
    return res.data
}

const getProductCategories = async () => {
    const res = await axios.get(`${base_url}/category/`, { withCredentials: true })
    return res.data
}
const GetBlogCategories = async () => {
    const res = await axios.get(`${base_url}/blog`, { withCredentials: true })
    return res.data
}

const filterService = {
    getBrands,
    getColor,
    getProductCategories,
    GetBlogCategories
}
export default filterService