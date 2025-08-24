import React, { useContext, } from 'react';
import { authcontext } from '../provider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user,loader}=useContext(authcontext)
    const loacation=useLocation();
   if(loader){
     return <span className="loading loading-spinner loading-xl"></span>
   }
   if(user){
    return children;
   }
   return <Navigate to={'/login'} state={{from:loacation}} replace></Navigate>
};

export default Privateroute;