import axios from "axios"
import { base_url } from "../../../static/staticData";

const createRazorOrder = async (cartItems: any[], cartTotalAmount: number) => {
    const res = await axios.post(`${base_url}/product/create-raziropay-session`, { cartItems, cartTotalAmount });
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
    createRazorOrder,
}
export default orderService