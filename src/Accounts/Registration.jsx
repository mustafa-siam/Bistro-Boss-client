import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import { authcontext } from '../provider/Authprovider';
import Swal from 'sweetalert2';

const Registration = () => {
  const navigate=useNavigate();
  const {creatuser,updateprofile}=useContext(authcontext)
      const { register,handleSubmit,reset ,formState: { errors },} = useForm()

  const onSubmit = (data) =>{
    console.log(data)
    creatuser(data.email,data.password)
    .then(result=>{
      console.log(result.user)
      updateprofile(data.name,data.photoURL)
      .then(()=>{
 Swal.fire({
  title: "Registration successfull",
  showConfirmButton:false,
  timer:3000,
  icon:'success',
  showClass: {
    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `
  },
  hideClass: {
    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `
  }
});
 reset()
 navigate('/')
      })
      .catch(error=>{
        console.error(error)
      })
     
    })
    .catch(error=>{
      console.error(error)
    })
  } 

    return (
      <>
      <Helmet>
        <title>SignUp | BistroBoss</title>
      </Helmet>
       <div className='flex justify-start items-center h-screen'>
        <form onSubmit={handleSubmit(onSubmit)}>
               <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Login</legend>
<label className="label" >Name</label>
  <input type="text" className="input" {...register("name", { required: true })} placeholder="Name" />
  {errors.name && <span className='text-red-600'>Please input your name</span>}
  <label className="label">PhotoUrl</label>
  <input
    type="url"
    required
    className="input"
    placeholder="https://"
    pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
    name='photurl'
  />
{errors.photurl && <span className='text-red-600'>Provide your valid photoUrl</span>}
  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" {...register("email", { required: true })}  />
{errors.email && <span className='text-red-600'>Email is required</span>}
  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" {...register("password", { 
  required: true,
  minLength:6,
  maxLength:10,
  pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/ 
  })}  />
{errors.password?.type==='required' && <span className='text-red-600'>Password is required</span>}
{errors.password?.type==='minLength' && <span className='text-red-600'>Password take at least 6 character</span>}
{errors.password?.type==='maxLength' && <span className='text-red-600'>Password take less than 10 character</span>}
{errors.password?.type==='pattern' && <span className='text-red-600'>password must be at least 6 characters long and include one uppercase letter, one lowercase letter, one digit, and one special character.</span>}
<input type="submit" className="btn btn-neutral mt-4" value="SignUp" />
  <p className='text-center'>Already have an accout?<Link className='text-blue-600' to={'/login'}>Login</Link> </p>
</fieldset>
        </form>
        </div>
      </>
    );
};

export default Registration;