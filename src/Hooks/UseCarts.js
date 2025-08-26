import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { authcontext } from "../provider/Authprovider";

const useCarts=()=>{
    const {user}=useContext(authcontext)
    const axiosinstance=useAxiosSecure();
const {refetch,data:carts=[]}=useQuery({
     queryKey: ['carts',user?.email],
      queryFn: async () => {
    const res = await axiosinstance.get(`carts?email=${user.email}`)
    return res.data
  },
})
return [carts,refetch]
}
export default useCarts;