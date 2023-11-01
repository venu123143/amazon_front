import axios from "axios"
import { base_url } from "../../../static/staticData";

const getOrders = async () => {
    const res = await axios.get(`${base_url}/users/orders`, { withCredentials: true });
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
        orderItems: cartItems,
        totalPrice: cartTotalAmount
    }
    const res = await axios.post(`${base_url}/users/cart/create`, data, { withCredentials: true });
    return res.data
}


const orderService = {
    createOrder,
    getOrders
}
export default orderService