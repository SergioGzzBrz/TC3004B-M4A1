import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const LoginWall = ({ isLogin, redirectTo }) => {
    console.log("Is log in?", isLogin)
    return isLogin ? <Outlet/> : <Navigate to={redirectTo} />;
}

export default LoginWall
