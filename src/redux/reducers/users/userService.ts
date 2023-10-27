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
        // localStorage.setItem("token", JSON.stringify(res.data?.user))
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


const userService = {
    login,
    logout,
    register
}

export default userService