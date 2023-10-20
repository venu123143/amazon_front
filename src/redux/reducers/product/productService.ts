import axios from "axios";
import { base_url } from "../../../static/staticData";

const getProducts = async () => {
    const res = await axios.get(`${base_url}/product/`)
    return res.data
}
const Wishlist = async (prodId: string) => {
    const res = await axios.put(`${base_url}/product/wishlist`, { prodId }, { withCredentials: true })
    return res.data
}

const GetWishlist = async () => {
    const res = await axios.get(`${base_url}/users/wishlist`, { withCredentials: true })  
    return res.data
}
const productService = {
    getProducts,
    Wishlist,
    GetWishlist
}

export default productService