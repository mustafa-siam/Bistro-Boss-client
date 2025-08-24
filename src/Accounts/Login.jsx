import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {loadCaptchaEnginge,LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { authcontext } from '../provider/Authprovider';
import Swal from 'sweetalert2';
const Login = () => {
  const {login}=useContext(authcontext)
  const navigate=useNavigate()
  const location=useLocation()
  const from = location.state?.from?.pathname || "/";
  const [disable,setdisable]=useState(true)
  useEffect(()=>{
    loadCaptchaEnginge(6)
  },[])
  const handlecaptcha=(e)=>{
    const captcha=e.target.value;
    if(validateCaptcha(captcha)){
      setdisable(false);
    }
    else{
      setdisable(true)
    }
  }
  const handlelogin=(e)=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const pass=form.password.value;
    login(email,pass)
    .then(result=>{
      console.log(result.user)
        Swal.fire({
              title: "Loggedin successfully",
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
            navigate(from, { replace: true });
    })
    .catch(error=>{
       Swal.fire({
              icon:'error',
              title: "Incorrect UserName",
              text:error.message,
              showConfirmButton:false,
              timer:3000,           
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
    })
  }
    return (
      <>
      <div className='flex justify-start items-center h-screen'>
            <form onSubmit={handlelogin}>
              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Login</legend>
  <label className="label">Email</label>
  <input type="email" name='email' className="input" placeholder="Email" />

  <label className="label">Password</label>
  <input type="password" name='password' className="input" placeholder="Password" />
  <label className="label">
    <LoadCanvasTemplate />
  </label>
  <input onBlur={handlecaptcha} type="text" name='captcha' className="input" placeholder="type the captha avobe" />
  <input type="submit"  disabled={disable} className="btn btn-neutral mt-4" value="Login" />
  <p className='text-center'>Don't have an accout? <Link className='text-blue-600' to={'/register'}>Register</Link> </p>
</fieldset>
 
            </form>
        </div>
      </>
    );
};

export default Login;