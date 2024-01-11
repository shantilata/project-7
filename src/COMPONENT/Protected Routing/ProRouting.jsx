import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProRouting = () => {
    const isAuth = window.sessionStorage.getItem('valid_token')
    console.log("Value is auth", isAuth);
    return isAuth ? <Outlet /> : <Navigate to='/login_form' />
}

export default ProRouting