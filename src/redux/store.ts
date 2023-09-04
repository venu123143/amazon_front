import { configureStore } from "@reduxjs/toolkit"
import functionSlice from "./reducers/userReducer"

const store = configureStore({
    reducer: {
        functions: functionSlice
    }
})

export default store