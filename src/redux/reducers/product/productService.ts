import axios from "axios";
import { base_url } from "../../../static/staticData";

const getProducts = async () => {
    const res = await axios.get(`${base_url}/product/`)
    return res.data
}
const getProduct = async (id: string) => {
    const res = await axios.get(`${base_url}/product/${id}`)
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
const review = async ({ star, prodId, comment, title }: { star: number, prodId: string, comment?: string, title: string }) => {
    const res = await axios.put(`${base_url}/product/rating`, { star, prodId, comment, title }, { withCredentials: true })
    return res.data
}
const productService = {
    getProducts,
    getProduct,
    Wishlist,
    GetWishlist,
    review,
}

export default productService