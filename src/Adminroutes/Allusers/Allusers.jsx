import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { RiAdminLine } from "react-icons/ri";
import {
  useQuery,
} from '@tanstack/react-query'
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
const Allusers = () => {
    const axiossecure=useAxiosSecure()
    const { data:users=[],refetch } = useQuery({
    queryKey: ['users'],
queryFn: async () => {
    const res = await axiossecure.get('users')
    return res.data
  },
})
const handledelete=(id)=>{
  Swal.fire({
  title: "Are you sure?",
  text: "You won't able to rebert this",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   axiossecure.delete(`/users/${id}`)
   .then(res=>{
    if(res.data.deletedCount>0){
        refetch();
         Swal.fire({
      title: "Deleted!",
      text: `Your file has been deleted.`,
      showConfirmButton:false,
      timer:1500,
      icon: "success"
    });
    }
   })
  }
});
}
const handlemakeadmin=(user)=>{
Swal.fire({
  title: "Are you sure?",
  text: `You want ${user.name} as admin`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Make Admin!"
}).then((result) => {
  if (result.isConfirmed) {
   axiossecure.patch(`/users/admin/${user._id}`)
   .then(res=>{
    if(res.data.modifiedCount>0){
        refetch();
         Swal.fire({
      title: "Admin!",
      text: `${user.name} added in Admin Panel`,
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
            <h1 className='text-2xl'>All users</h1>
            <table className="table table-zebra">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user,idx)=><tr key={user._id} className="hover:bg-base-300">
                    <th>{idx+1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {
                        user.role==="Admin"?"Admin": <button onClick={()=>handlemakeadmin(user)} className='text-2xl bg-orange-400 text-white btn cursor-pointer'>
                           <RiAdminLine />
                      </button>
                      }
                      
                    </td>
                    <td>
                       <button onClick={()=>handledelete(user._id)} className='text-2xl bg-red-600 text-white btn cursor-pointer'>
                          <RiDeleteBin5Line />
                      </button>
                      </td>
                    </tr>)
                  }
                </tbody>
              </table>
        </div>
    );
};

export default Allusers;