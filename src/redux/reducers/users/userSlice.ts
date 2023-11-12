import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import { toast } from "react-toastify";

import userService from "./userService";

const getUserFromLocalStorage = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') as string) : null
const themes = localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
const address = localStorage.getItem("address") ? JSON.parse(localStorage.getItem("address") as string) : null
export interface UserState {
    _id?: string | null;
    firstname?: string | null;
    lastname?: string | null;
    email: string | null;
    mobile?: string | null;
    password?: string | null;
    refreshToken?: string | null;
    role?: string | null;
    isBlocked?: string | null;
    otp?: any;
}

export interface Address {
    name: string;
    mobile: string;
    address: string;
    state: string;
    zipcode: string;
}
interface AppState {
    screen: boolean,
    user: UserState | null;
    isError: boolean;
    isLoading: boolean;
    isSuccess: boolean;
    isRegSuccess: boolean;
    message: string;
    theme: string | null;
    isSaved: boolean;
    address: Address | null;
}

const initialState: AppState = {
    screen: false,
    user: getUserFromLocalStorage,
    isError: false,
    isRegSuccess: false,
    isLoading: false,
    isSuccess: false,
    message: "",
    theme: themes,
    address: address,
    isSaved: false,
};

export const registerUser = createAsyncThunk('userSlice/registerUser', async (userData: UserState, thunkAPI) => {
    try {
        return await userService.register(userData)
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error?.response?.data)

    }
})

export const login = createAsyncThunk('authSlice/admin-login', async (user: UserState, thunkAPI) => {
    try {
        const res = await userService.login(user)
        return res

    } catch (error: any) {
        // console.log("error ", error);

        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})
export const logout = createAsyncThunk('authSlice/logoutUser', async (_, thunkAPI) => {
    try {
        const res = await userService.logout()
        return res

    } catch (error: any) {
        localStorage.removeItem("token")
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})
export const forgotPassword = createAsyncThunk('authSlice/forgotPassword', async (email: string, thunkAPI) => {
    try {
        const res = await userService.forgot(email)
        return res

    } catch (error: any) {
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})
export const resetPassword = createAsyncThunk('authSlice/resetPassword', async (data: { password: string, token: string }, thunkAPI) => {
    try {
        const res = await userService.reset(data?.token, data?.password)
        return res

    } catch (error: any) {
        return thunkAPI.rejectWithValue(error?.response?.data)
    }
})

const slice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        toggleScroll: (state, action: PayloadAction<any>) => {
            state.screen = action.payload
        },
        setTheme: (state, action: PayloadAction<any>) => {
            state.theme = action.payload
        },
        toggleAddress: (state, action: PayloadAction<any>) => {
            state.isSaved = action.payload
        },
        saveAddress: (state, action: PayloadAction<any>) => {
            state.address = action.payload
            localStorage.setItem('address', JSON.stringify(action.payload))
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true
            state.isRegSuccess = false
        }).addCase(registerUser.fulfilled, (state) => {
            state.isLoading = false
            state.isRegSuccess = true
            toast.success("user registered sucessfully", {
                position: 'top-left'
            })
        }).addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isRegSuccess = false
            state.message = action.payload?.message
            toast.error(state.message, {
                position: 'top-right'
            })
        })
        builder.addCase(login.pending, (state) => {
            state.isLoading = true
        }).addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload.user
            state.message = action.payload?.message
            toast.success(state.message, {
                position: 'top-right'
            })
        }).addCase(login.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isError = true
            state.isSuccess = false
            state.user = null
            state.message = action.payload?.message
            toast.error(state.message, {
                position: 'top-right'
            })
        })
        builder.addCase(logout.pending, (state) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        }).addCase(logout.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false
            state.isSuccess = true
            state.isRegSuccess = false
            state.user = null
            state.message = action.payload?.message
            toast.success(state.message, {
                position: 'top-left'
            })
        }).addCase(logout.rejected, (state, action: PayloadAction<any>) => {
            state.isError = true
            state.isLoading = false
            state.message = action.payload?.message
            state.user = null
            toast.error(state.message, {
                position: 'top-right'
            })
        })
        builder.addCase(forgotPassword.pending, (state) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        }).addCase(forgotPassword.fulfilled, (state) => {
            state.isLoading = false
            state.isSuccess = true
            toast.success("Sucessfully sent An Email", {
                position: 'top-right'
            })
        }).addCase(forgotPassword.rejected, (state, action: PayloadAction<any>) => {
            state.isError = true
            state.isLoading = false
            state.message = action.payload?.message
            toast.error(state.message, {
                position: 'top-right'
            })
        })

        builder.addCase(resetPassword.pending, (state) => {
            state.isLoading = true
            state.isSuccess = false
            state.isError = false
        }).addCase(resetPassword.fulfilled, (state) => {
            state.isLoading = false
            state.isSuccess = true
            toast.success("Password reset successful", {
                position: 'top-right'
            })
        }).addCase(resetPassword.rejected, (state, action: PayloadAction<any>) => {
            state.isError = true
            state.isLoading = false
            state.message = action.payload?.message
            toast.error(state.message, {
                position: 'top-right'
            })
        })
    }

})


export const { toggleScroll, setTheme, toggleAddress, saveAddress } = slice.actions
export default slice.reducer
