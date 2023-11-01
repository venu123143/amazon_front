import { Navigate } from "react-router-dom"
import { ReactNode } from 'react';

export const PrivateRoutes = ({ children }: { children: ReactNode }) => {
    const getToken = JSON.parse(localStorage.getItem("token") as string)
    return getToken?.refreshToken !== undefined ? children : (<Navigate to='/login' replace={true} />)
}