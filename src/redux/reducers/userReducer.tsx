import { createSlice } from "@reduxjs/toolkit"
const initialState: any = {
    screen: false
}

const slice = createSlice({
    name: 'Function',
    initialState,
    reducers: {
        toggleScroll: (state: any, action) => {
            state.screen = action.payload
        }
    },
    extraReducers: {}

})


export const { toggleScroll } = slice.actions
export default slice.reducer
