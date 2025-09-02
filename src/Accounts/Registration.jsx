import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { Helmet } from 'react-helmet-async';
import { authcontext } from '../provider/Authprovider';
import Swal from 'sweetalert2';
import usePublicAxios from '../Hooks/usePublicAxios';
import SocialLogin from './SocialLogin';

const Registration = () => {
  const axiospublic = usePublicAxios();
  const navigate = useNavigate();
  const { creatuser, updateprofile } = useContext(authcontext)
  const { register, handleSubmit, reset, formState: { errors }, } = useForm()

  const onSubmit = (data) => {
    creatuser(data.email, data.password)
      .then(result => {
        console.log(result.user)
        updateprofile(data.name, data.photoURL)
          .then(() => {
            const userinfo = {
              name: data.name,
              email: data.email,
            }
            axiospublic.post('users', userinfo)
              .then(res => {
                if (res.data.insertedId) {
                  console.log("user added in database")
                  Swal.fire({
                    title: "Registration successfull",
                    showConfirmButton: false,
                    timer: 3000,
                    icon: 'success',
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
                }
              })
          })
          .catch(error => {
            console.error(error)
          })

      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <>
      <Helmet>
        <title>SignUp | BistroBoss</title>
      </Helmet>
      <div className='flex flex-col justify-start items-start h-screen bg-base-200 p-6'>
        <h1 className="mb-4">Please SignUp</h1>
        <div className="rounded-box border bg-base-100 w-xs p-4 flex flex-col gap-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="flex flex-col">
              <label className="label">Name</label>
              <input type="text" className="input" {...register("name", { required: true })} placeholder="Name" />
              {errors.name && <span className='text-red-600'>Please input your name</span>}

              <label className="label">PhotoUrl</label>
              <input
                type="url"
                className="input"
                placeholder="https://"
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL && <span className='text-red-600'>Provide your valid photoUrl</span>}

              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" {...register("email", { required: true })} />
              {errors.email && <span className='text-red-600'>Email is required</span>}

              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 10,
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
              })} />
              {errors.password?.type === 'required' && <span className='text-red-600'>Password is required</span>}
              {errors.password?.type === 'minLength' && <span className='text-red-600'>Password take at least 6 character</span>}
              {errors.password?.type === 'maxLength' && <span className='text-red-600'>Password take less than 10 character</span>}
              {errors.password?.type === 'pattern' && <span className='text-red-600'>Password must include uppercase, lowercase, digit & special character.</span>}

              <input type="submit" className="btn btn-neutral mt-4 w-full" value="SignUp" />
              <p className='text-center mt-2'>Already have an account? <Link className='text-blue-600' to={'/login'}>Login</Link></p>
            </fieldset>
          </form>
          <div>
            <SocialLogin />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
