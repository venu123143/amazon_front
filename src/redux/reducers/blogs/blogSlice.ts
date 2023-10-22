import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import blogService from "./blogService"
import { toast } from "react-toastify";

export interface Image {
    url: string;
    access_id: string;
    public_id: string;
}

export interface BlogType {
    _id?: string;
    title: string;
    description: string;
    category: any;
    numViews?: number;
    isLiked?: boolean;
    isDisliked?: boolean;
    likes?: any
    dislikes?: any;
    image: string;
    auther: any;
    createdAt: Date;
    updatedAt: Date;
    images: Image[];
}
export const getAllBlogs = createAsyncThunk('blogSlice/getAllBlogs', async (_, thunkAPI) => {
    try {
        const blogs = await blogService.getBlogs()
        return blogs

    } catch (error: any) {
        console.log(error);

        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})
export const getSingleBlog = createAsyncThunk('blogSlice/getSingleBlog', async (id: string, thunkAPI) => {
    try {
        const blogs = await blogService.getblog(id)
        return blogs

    } catch (error: any) {
        console.log(error);

        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})


interface BlogState {
    blogs: BlogType[];
    singleBlog: BlogType | null;
    isError: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    message: string;
    modal: boolean;
}

const initialState: BlogState = {
    blogs: [],
    singleBlog: null,
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    modal: false,
}

const blogSlice = createSlice({
    name: 'blogSlice',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.modal = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllBlogs.pending, (state) => {
            state.isLoading = true
        }).addCase(getAllBlogs.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.blogs = action.payload
        }).addCase(getAllBlogs.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
            toast.error(state.message, {
                position: 'top-right'
            })
        })
        builder.addCase(getSingleBlog.pending, (state) => {
            state.isLoading = true
        }).addCase(getSingleBlog.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = true
            state.isError = false
            state.singleBlog = action.payload
        }).addCase(getSingleBlog.rejected, (state, action: PayloadAction<any>) => {
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

export default blogSlice.reducer