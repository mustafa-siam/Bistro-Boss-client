import React from 'react';
import Heading from '../../Pages/SectionHeading/Heading';
import useMenue from '../../Hooks/UseMenu';
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuFolderPen } from "react-icons/lu";
import Swal from 'sweetalert2';
import usePublicAxios from '../../Hooks/usePublicAxios';
import { Link } from 'react-router-dom';
const Manageitems = () => {
    const axiosinstance=usePublicAxios()
    const [menu,refetch]=useMenue();
   console
    const handledelete=(cart)=>{
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
             axiosinstance.delete(`menu/${cart._id}`)
             .then(res=>{
              if(res.data.deletedCount>0){
                  refetch();
                   Swal.fire({
                title: "Deleted!",
                text: `${cart.name} has been deleted.`,
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
        <div className='space-y-12 max-w-4xl mx-auto '>
            <Heading subheading={"Hurry Up!"} heading={"MANAGE ALL ITEMS"}></Heading>
        <div >
            <table className="table table-zebra">
                <thead className='bg-[#D1A054] text-white text-base'>
                  <tr>
                    <th></th>
                    <th>item img</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    menu.map((cart,idx)=><tr key={cart._id}>
                    <th>{idx+1}</th>
                    <td className="avatar">
              <div className="mask mask-squircle w-20">
                <img src={cart.image}/>
            </div>
                    </td>
                    <td>{cart.name}</td>
                    <td>{cart.price}</td>
                    <td> <Link to={`/dashboard/updateitem/${cart._id}`}>
                    <button className='btn text-2xl bg-[#D1A054] text-white cursor-pointer'><LuFolderPen /></button></Link></td>
                    <td><button onClick={()=>handledelete(cart)} className='btn text-2xl bg-red-600 text-white cursor-pointer'><RiDeleteBin5Line /></button></td>
                    </tr>)
                  }
                </tbody>
              </table>
        </div>
        </div>
    );
};

export default Manageitems;