import { configureStore } from "@reduxjs/toolkit"
import functionSlice from "./reducers/userReducer"
import cartReducer from "./reducers/cartReducer"
const store = configureStore({
    reducer: {
        functions: functionSlice,
        cart: cartReducer,
    },
    // middleware: (getDefaultMiddleware)=>{
    //     return getDefaultMiddleware().concat(producsApi.middleware)
    // }
})

export default store