import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./reducers/users/userSlice"
import cartReducer from "./reducers/product/cartSlice"

const Store = configureStore({
    reducer: {
        user: userSlice,
        cart: cartReducer,
    },
})


export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export default Store