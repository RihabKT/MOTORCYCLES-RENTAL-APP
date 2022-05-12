import React from 'react'
import { Navigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

const PrivateRouteAdmin = ({ component: RouteComponent }) => {
    const token = localStorage.getItem("token")
    const isAuth= useSelector(state=>state.userReducer.isAuth)
    const user = useSelector(state => state.userReducer.user)


   if(!token) return <Navigate to='/' />
   else if(isAuth && user.role === 1) return <Navigate to='/profile' />
   


    return  (
        <div><RouteComponent /></div>
    )
}

export default PrivateRouteAdmin
