import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface CartItem {
    _id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    category: {
        _id: string;
        title: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
    brand: {
        _id: string;
        title: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
    tags: string[];
    quantity: number;
    sold: number;
    images: {
        url: string;
        asset_id: string;
        public_id: string;
    }[];
    color: {
        _id: string;
        title: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    }[];
    seller: any;
    totalRating: number;
    ratings: any[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    cartQuantity: number;
}
interface CartState {
    cartItems: CartItem[];
    cartTotalQuantity: number;
    cartTotalAmount: number;
    cartQuantity: number;
    totalPrice: number;
    gst: number;
    shipping: number;
}

const initialState: CartState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems") as string) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    cartQuantity: 0,
    totalPrice: 0,
    gst: 0,
    shipping: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    //generate action creator and handle state for that perticual action creator.
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item: any) => item?._id === action.payload?._id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.success(`Item Quantity is increased`, {
                    position: 'bottom-left'
                })
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                state.cartQuantity = state.cartQuantity + 1
                toast.success(`An item added to cart`, {
                    position: 'bottom-left'
                })
            }



            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter((cartItem: any) => cartItem._id !== action.payload._id)
            state.cartItems = nextCartItems
            state.cartQuantity = state.cartQuantity - 1
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.error(`An item removed from cart`, {
                position: 'bottom-left'
            })
        },
        descreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item: any) => item?._id === action.payload?._id)
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.info(`An item Quantity is decreased`, {
                    position: 'bottom-left'
                })
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter((cartItem: any) => cartItem?._id !== action.payload?._id)
                state.cartItems = nextCartItems
                state.cartQuantity = state.cartQuantity - 1
                toast.error(`An item removed from cart`, {
                    position: 'bottom-left'
                })
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        clearCart(state) {
            state.cartItems = []
            state.cartQuantity = 0
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.error(`your cart is Empty Now`, {
                position: 'bottom-left'
            })
        },
        cartTotal(state) {
            let { totalPrice, quantity } = state.cartItems.reduce((cartAmount: any, cartItem: any) => {
                const { price, cartQuantity } = cartItem;
                const total = price * cartQuantity
                cartAmount.totalPrice += total;
                cartAmount.quantity += cartQuantity;
                return cartAmount
            }, {
                totalPrice: 0,
                quantity: 0,
            })
            state.cartTotalAmount = totalPrice;
            state.cartTotalQuantity = quantity;
        },
        calculateTaxes(state) {
            if (state.cartTotalAmount < 199) {
                state.shipping = 40
            } else {
                state.shipping = 0
            }
            state.gst = parseFloat((0.05 * state.cartTotalAmount).toFixed(2))
            state.totalPrice = state.cartTotalAmount + state.shipping + state.gst
        }

    }
})

// this is our action creator.
export const { addToCart, removeFromCart, descreaseCart, clearCart, cartTotal, calculateTaxes } = cartSlice.actions

export default cartSlice.reducer;