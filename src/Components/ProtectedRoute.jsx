import React from 'react'
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'


const ProtectedRoute=({children})=> {
    const jwdtoken= Cookies.get('jwttoken')
    if (jwdtoken === undefined){
        return <Navigate to = "/" />
        }
    return children


}

export default ProtectedRoute
