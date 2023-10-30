import axios from "axios";
import { base_url } from "../../../static/staticData";
import { UserState } from "./userSlice";


const register = async (userData: UserState): Promise<any> => {
    const res = await axios.post(`${base_url}/users/register`, userData)
    return res.data
}

const login = async (userData: UserState): Promise<any> => {
    const res = await axios.post(`${base_url}/users/login`, userData, { withCredentials: true })
    if (res.data) {
        localStorage.setItem("token", JSON.stringify(res.data?.user))
        return res.data
    }
}

const logout = async (): Promise<any> => {
    const res = await axios.get(`${base_url}/users/logout`, { withCredentials: true, })    
    if (res.data) {
        localStorage.removeItem("token");
    }
    return res.data
}

const forgot = async (email: string) => {
    const res = await axios.post(`${base_url}/users/forgot-password-token`, { email })
    return res.data
}

const reset = async (token: string, password: string) => {
    const res = await axios.put(`${base_url}/users/resetpassword/${token}`, { password })
    return res.data
}
const userService = {
    login,
    logout,
    register,
    forgot,
    reset
}

export default userService