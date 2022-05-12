import React from 'react'
import { Navigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

const PrivateRoute = ({ component: RouteComponent }) => {
    const token = localStorage.getItem("token")
    const isAuth= useSelector(state=>state.userReducer.isAuth)


    if(!token) return <Navigate to='/' />

    return (
        <div><RouteComponent /></div>
    )
}

export default PrivateRoute