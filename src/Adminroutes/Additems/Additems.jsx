import React from 'react';
import Heading from '../../Pages/SectionHeading/Heading';
import { useForm } from "react-hook-form"
import { PiForkKnifeBold } from "react-icons/pi";
import usePublicAxios from '../../Hooks/usePublicAxios';
import useAxiosSecure from '../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';
const Additems = () => {
    const axiospublic=usePublicAxios()
    const axiossecure=useAxiosSecure()
    const image_upload_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;;
    const image_upload_api=`https://api.imgbb.com/1/upload?key=${image_upload_token}`
     const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()
  const onSubmit = async(data) =>{
    console.log(data)
    const imgfile={image:data.image[0]}
    const res=await axiospublic.post(image_upload_api,imgfile,{
         headers: {
        "content-type": "multipart/form-data",
      }
    })
    if(res.data.success){
       const menuitem={
        name:data.name,
        category:data.category.toLowerCase(),
        price:parseFloat(data.price),
        recipe:data.recipe,
        image:res.data.data.display_url
       }
       const menures=await axiossecure.post('/menu',menuitem);
       console.log(menures.data)
       if(menures.data.insertedId){
        reset();
         Swal.fire({
                            text: `${data.name} Added successfully`,
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
       }
    }
   }
    return (
        <div>
            <Heading subheading={"What's new?"} heading={"ADD AN ITEM"}></Heading>
            <div className='bg-[#E8E8E8] max-w-3xl mx-auto my-12'>
                <form onSubmit={handleSubmit(onSubmit)} className='p-12 space-y-3'>
                       <fieldset className="fieldset text-lg">
  <legend className="fieldset-legend ">Recipe name* </legend>
  <input type="text" {...register("name", { required: true })} className="input w-full" placeholder="Recipe name" />
   {errors.name && <span className='text-sm text-red-600'>This field is required</span>}
</fieldset>
<div className='flex gap-6 items-center'>
    <fieldset className="fieldset text-lg w-1/2">
  <legend className="fieldset-legend ">Category* </legend>
  <select {...register("category", { required: true })} defaultValue="" className="select select-neutral border-0">
  <option value="" disabled>Select Category</option>
  <option>Dessert</option>
  <option>Soup</option>
  <option>Pizza</option>
  <option>Salad</option>
  <option>Drinks</option>
</select>
{errors.category && <span className='text-sm text-red-600'>This field is required</span>}
</fieldset>
     <fieldset className="fieldset text-lg w-1/2">
  <legend className="fieldset-legend ">Price* </legend>
  <input type="text" {...register("price", { required: true })} className="input w-full" placeholder="Price" />
  {errors.price && <span className='text-sm text-red-600'>This field is required</span>}
</fieldset>
</div>
 <fieldset className="fieldset text-lg">
  <legend className="fieldset-legend ">Recipe Details* </legend>
  <textarea {...register("recipe", { required: true })} className="textarea w-full h-32" placeholder="Recipe Details"></textarea>
  {errors.recipe && <span className='text-sm text-red-600'>This field is required</span>}
</fieldset>
<div>
<input type="file" {...register("image", { required: true })} className="file-input file-input-ghost" />
{errors.image && <span className='text-sm text-red-600'>This field is required</span>}
</div>
 <button className='btn text-lg bg-linear-to-r from-[#835D23] to-[#B58130]'>
Add Item <PiForkKnifeBold />
 </button>
                </form> 
            </div>
        </div>
    );
};

export default Additems;