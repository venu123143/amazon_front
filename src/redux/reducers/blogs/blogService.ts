import axios from "axios";
import { base_url } from "../../../static/staticData";

const getBlogs = async () => {
    const res = await axios.get(`${base_url}/blog/`)
    return res.data
}

const getblog = async (id: string) => {
    const res = await axios.get(`${base_url}/blog/${id}`)
    return res.data
}

const BlogService = {
    getBlogs,
    getblog,
}

export default BlogService