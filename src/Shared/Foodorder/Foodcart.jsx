import React, { useContext } from 'react';
import { authcontext } from '../../provider/Authprovider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import useCarts from '../../Hooks/UseCarts';

const Foodcart = ({item}) => {
  const axiosinstance=useAxiosSecure()
  const {user}=useContext(authcontext)
  const [,refetch]=useCarts();
  const navigate=useNavigate()
  const location=useLocation();
    const {name,recipe,image,_id,price}=item
    const handleaddcart=async()=>{
      if(user?.email){
 console.log(item,name)
 const cartitem={
     menuid:_id,
     email:user.email,
     name,
     recipe,
     image,
     price
 }
const res=await axiosinstance.post('carts',cartitem)
if(res.data.insertedId){
  Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${name} has been added` ,
  showConfirmButton: false,
  timer: 1500
});
refetch();
}
console.log(res.data)
      }
      else{
        Swal.fire({
  title: "you are not logged in",
  text: "Please login to add the cart",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Login!"
}).then((result) => {
  if (result.isConfirmed) {
     navigate('/login',{state:{from:location}})
  }
});
      }
    }
    return (
        <div className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button onClick={handleaddcart} className='btn border-b-3 text-[#BB8506] border-b-[#BB8506]'>add to cart</button>
    </div>
  </div>
</div>
    );
};

export default Foodcart;