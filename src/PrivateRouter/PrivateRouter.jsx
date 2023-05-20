import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ( {children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return<div className='container mx-auto'><progress className="progress bg-green-100 w-full"></progress></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to="/Login" replace ></Navigate>
};
export default PrivateRoute;