import { useEffect, useState } from "react";

const useMenue=()=>{
 const [menu,setmenu]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=>{
            setmenu(data)
        })
    },[])
    return [menu]
}
export default useMenue;