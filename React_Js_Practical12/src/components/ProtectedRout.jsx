import React, { useContext } from 'react'
import { AuthContext } from '../Auth,_Context';
import { Navigate } from 'react-router-dom';

const ProtectedRout = ({element}) => {
    const {isAuthanticated} = useContext(AuthContext)
    if(!isAuthanticated) {
        console.log(isAuthanticated);
    return <Navigate to={'/login'} replace />
   }
   return element;
}

export default ProtectedRout;