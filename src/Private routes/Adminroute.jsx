import React, { useContext, } from 'react';
import { authcontext } from '../provider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import UseAdmin from '../Hooks/UseAdmin';

const Adminroute = ({children}) => {
    const [isAdmin,isPending]=UseAdmin();
    const {user,loader}=useContext(authcontext)
    const loacation=useLocation();
   if(loader || isPending){
     return <span className="loading loading-spinner loading-xl"></span>
   }
   if(user && isAdmin){
    return children;
   }
   return <Navigate to={'/'} state={{from:loacation}} replace></Navigate>
};

export default Adminroute;