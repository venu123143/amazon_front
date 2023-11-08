import axios from "axios"
import { base_url } from "../../../static/staticData";

const getOrders = async () => {
    const res = await axios.get(`${base_url}/users/orders`, { withCredentials: true });
    return res.data
}
const orders = async (id: string) => {
    const res = await axios.get(`${base_url}/product/orders/${id}`)
    return res.data
}
const updateStatus = async (id: string, Status: string, index: number) => {
    const res = await axios.put(`${base_url}/users/updateorder/${id}`, { Status, index }, { withCredentials: true })
    return res.data
}
const createOrder = async (cartItems: any[], cartTotalAmount: number, orderId: string, paymentId: string, address: any) => {
    const data = {
        shippingInfo: {
            name: address.name,
            mobile: address.mobile,
            address: address.address,
            state: address.state,
            pincode: address.zipcode
        },
        paymentInfo: {
            razorPayOrderId: orderId,
            razorPayPaymentId: paymentId
        },
        orderItems: cartItems.map((cartItem) => ({
            product: cartItem._id,
            quantity: cartItem.cartQuantity,
            color: cartItem.color[0].title,
        })),
        totalPrice: cartTotalAmount
    }
    const res = await axios.post(`${base_url}/users/cart/create`, data, { withCredentials: true });
    return res.data
}


const orderService = {
    createOrder,
    getOrders,
    orders,
    updateStatus
}
export default orderService