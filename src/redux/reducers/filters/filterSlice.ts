import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import filterService from "./filterService";
import { toast } from "react-toastify";

export interface Category {
    title: string;
    _id: string;
}
interface FilterState {
    brands: any[];
    colors: any[];
    categories: any[];
    isError: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    message: string;
}
const initialState: FilterState = {
    brands: [],
    colors: [],
    categories: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
}

export const getAllBrands = createAsyncThunk('filterSlice/getAllBrands', async (_, thunkAPI) => {
    try {
        const brands = await filterService.getBrands()
        return brands
    } catch (error: any) {
        console.log(error);
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})

export const getColors = createAsyncThunk('filterSlice/getColors', async (_, thunkAPI) => {
    try {
        const color = await filterService.getColor()
        return color
    } catch (error: any) {
        console.log(error);
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})

export const getCategories = createAsyncThunk('filterSlice/getCategories', async (_, thunkAPI) => {
    try {
        const categ = await filterService.getProductCategories()
        return categ

    } catch (error: any) {
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})

const filterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllBrands.pending, (state) => {
            state.isLoading = true
        }).addCase(getAllBrands.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.brands = action.payload
        }).addCase(getAllBrands.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
        builder.addCase(getColors.pending, (state) => {
            state.isLoading = true
        }).addCase(getColors.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.colors = action.payload
        }).addCase(getColors.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })

        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true
        }).addCase(getCategories.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.categories = action.payload
        }).addCase(getCategories.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
            toast.error(state.message, {
                position: 'top-right'
            })
        })
    }
})

export default filterSlice.reducer