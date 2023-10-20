
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import productService from "./productService"
import { toast } from "react-toastify";


export interface IProductState {
    _id?: string;
    title: string;
    slug?: string;
    description: string;
    price: number;
    category: any;
    brand: any;
    tags: string[];
    quantity: number;
    sold?: number;
    images?: Array<any>;
    color: any[];
    seller?: any;
    ratings?: number;
    totalRating?: number;
    createdAt?: Date;
    updatedAt?: Date;
}


export const getAllProducts = createAsyncThunk('productSlice/getAllProducts', async (_, thunkAPI) => {
    try {
        const users = await productService.getProducts()
        return users
    } catch (error: any) {
        console.log(error);
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})
export const addToWishlist = createAsyncThunk('productSlice/addToWishlist', async (prodId: string, thunkAPI) => {
    try {
        const wishlist = await productService.Wishlist(prodId)
        return wishlist
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})
export const GetFromWishlist = createAsyncThunk('productSlice/GetFromWishlist', async (_, thunkAPI) => {
    try {
        const wishlist = await productService.GetWishlist()
        return wishlist
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})


interface ProductState {
    products: IProductState[];
    wishlist: any[];
    isError: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    message: string;
    modal: boolean;
}

const initialState: ProductState = {
    products: [],
    wishlist: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    modal: false
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.isLoading = true
        }).addCase(getAllProducts.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.products = action.payload
        }).addCase(getAllProducts.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
        })
        builder.addCase(addToWishlist.pending, (state) => {
            state.isLoading = true
        }).addCase(addToWishlist.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.wishlist = action.payload?.wishlist

        }).addCase(addToWishlist.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload?.message

        })
        builder.addCase(GetFromWishlist.pending, (state) => {
            state.isLoading = true
        }).addCase(GetFromWishlist.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            // state.wishlist = action.payload?.wishlist

        }).addCase(GetFromWishlist.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload?.message
        })
    }
})



export default productSlice.reducer
