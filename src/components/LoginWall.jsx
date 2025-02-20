import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const LoginWall = ({ loggedIn, redirectTo }) => {
    console.log("Is log in?", loggedIn)
    return loggedIn ? <Outlet/> : <Navigate to={redirectTo} />;
}

export default LoginWall
