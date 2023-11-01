import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../users/userSlice";
import orderService from "./orderService";
import { toast } from "react-toastify"

interface IShippingInfo {
    firstName: string;
    lastName: string;
    address: string;
    city?: string;
    state: string;
    landmark?: string;
    pincode: number;
}

interface IPaymentInfo {
    razorPayOrderId: string;
    razorPayPaymentId: string;
}

interface IOrderItem {
    product: string; // Reference to a Product
    color: string;   // Reference to a Color
    quantity: number;
    price: number;
}

interface IOrder extends Document {
    user: UserState;
    shippingInfo: IShippingInfo;
    paymentInfo: IPaymentInfo;
    orderItems: IOrderItem[];
    paidAt: Date;
    totalPrice: number;
    totalPriceAfterDiscount: number;
    orderStatus: string;
}

export const getOrders = createAsyncThunk('orderSlice/createRazorOrder', async (_, thunkAPI) => {
    try {
        const order = await orderService.getOrders()
        return order
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})
export const Order = createAsyncThunk('orderSlice/Order', async (data: any, thunkAPI) => {
    try {
        const order = await orderService.createOrder(data?.cartItems, data?.cartTotalAmount, data?.orderId, data?.paymentId, data?.address)
        return order
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})
interface OrderState {
    orders: IOrder[],
    createOrder: null,
    isError: boolean,
    isLoading: boolean,
    isSuccess: boolean,
    message: string,
}

const initialState: OrderState = {
    orders: [],
    createOrder: null,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}


const orderSlice = createSlice({
    name: 'orderSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOrders.pending, (state) => {
            state.isLoading = true
        }).addCase(getOrders.fulfilled, (state, action: PayloadAction<any>) => {
            state.orders = action.payload
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
        }).addCase(getOrders.rejected, (state, action: PayloadAction<any>) => {
            state.isError = false
            state.isLoading = false
            state.message = action.payload?.message
            toast.error(state.message, {
                position: "top-right"
            })
        })
        builder.addCase(Order.pending, (state) => {
            state.isLoading = true
        }).addCase(Order.fulfilled, (state, action: PayloadAction<any>) => {
            state.orders = action.payload
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            toast.success("Order created successfully", {
                position: "top-right"
            })
        }).addCase(Order.rejected, (state, action: PayloadAction<any>) => {
            state.isError = false
            state.isLoading = false
            state.message = action.payload?.message
            toast.error(state.message, {
                position: "top-right"
            })
        })
    }
})



export default orderSlice.reducer