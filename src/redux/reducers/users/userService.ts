import axios from "axios";
import { base_url } from "../../../static/staticData";
import { UserState } from "./userSlice";


const register = async (userData: UserState): Promise<any> => {
    const res = await axios.post(`${base_url}/users/register`, userData)
    console.log(res.data);

    return res.data
}

const login = async (userData: UserState): Promise<any> => {
    const res = await axios.post(`${base_url}/users/login`, userData, { withCredentials: true })
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data?.user))
        return res.data
    }
}

const logout = async (): Promise<any> => {
    const res = await axios.get(`${base_url}/users/logout`, { withCredentials: true })
    if (res.data) {
        localStorage.removeItem("user");
    }
    return res.data
}


const userService = {
    login,
    logout,
    register
}

export default userService