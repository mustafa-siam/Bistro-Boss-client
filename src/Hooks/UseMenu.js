import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "./usePublicAxios";

const useMenue=()=>{
    const axiospublic=usePublicAxios();
// const [menu,setmenu]=useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setmenu(data)
    //     })
    // },[])
    const {data:menu=[],refetch}=useQuery({
      queryKey:["menu"],
      queryFn:async()=>{
      const res=  await axiospublic.get('menu')
      return res.data;
      }
    })
    return [menu,refetch]
}
export default useMenue;