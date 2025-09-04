import { useContext } from "react";
import { authcontext } from "../provider/Authprovider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";


const UseAdmin = () => {
    const {user}=useContext(authcontext)
    const axiossecure=useAxiosSecure()
    const {data:isAdmin,isPending}=useQuery({
        queryKey:[user?.email,"isAdmin"],
        queryFn:async()=>{
       const res=await axiossecure.get(`users/admin/${user.email}`)
       return res.data?.admin
        }
    })
    return [isAdmin,isPending]
};

export default UseAdmin;