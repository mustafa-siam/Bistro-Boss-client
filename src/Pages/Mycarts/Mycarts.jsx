import React from 'react';
import Heading from '../SectionHeading/Heading';
import useCarts from '../../Hooks/UseCarts';
import { AiFillDelete } from "react-icons/ai";
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const Mycarts = () => {
    const axiosinstance=useAxiosSecure()
    const [carts,refetch]=useCarts();
            const handledelete=(id)=>{
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   axiosinstance.delete(`carts/${id}`)
   .then(res=>{
    if(res.data.deletedCount>0){
        refetch();
         Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      showConfirmButton:false,
      timer:1500,
      icon: "success"
    });
    }
   })
  }
});
            }

    return (
        <div>
            <Heading subheading={"My Cart"} heading={"WANNA ADD MORE?"}>

            </Heading>
            <div>
                <div className="overflow-x-auto shadow-2xl md:m-6">
                    <div className='md:text-3xl text-lg font-bold flex justify-between w-full items-center p-6'>
        <p>Total Orders:{carts.length}</p>
        <p>Total Price: ${carts.reduce((total,item)=>total+item.price,0)}</p>
        <p>
          {carts.length>0?<Link to={'/dashboard/payment'}>
          <button className='btn bg-[#D1A054]'>Pay</button>
          </Link>:<button disabled className='btn bg-[#D1A054]'>Pay</button>}
          
          </p>
      </div>
  <table className="table table-zebra">
    <thead>
      <tr>
        <th></th>
        <th>item img</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        carts.map((cart,idx)=><tr key={cart._id} className="hover:bg-base-300">
        <th>{idx+1}</th>
        <td className="avatar">
  <div className="mask mask-squircle w-20">
    <img src={cart.image}/>
</div>
        </td>
        <td>{cart.name}</td>
        <td>{cart.price}</td>
        <td onClick={()=>handledelete(cart._id)} className='text-2xl text-red-600 cursor-pointer'><AiFillDelete /></td>
        </tr>)
      }
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Mycarts;