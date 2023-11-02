import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./reducers/users/userSlice"
import cartReducer from "./reducers/cart/cartSlice"
import productReducer from "./reducers/product/productSlice"
import blogReducer from "./reducers/blogs/blogSlice"
import orderReducer from "./reducers/orders/orderSlice"
import filterReducer from "./reducers/filters/filterSlice"
const Store = configureStore({
    reducer: {
        user: userSlice,
        cart: cartReducer,
        product: productReducer,
        blog: blogReducer,
        orders: orderReducer,
        filters: filterReducer
    },
})


export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export default Store