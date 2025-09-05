import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import usePublicAxios from '../../Hooks/usePublicAxios';
import { PiForkKnifeBold } from "react-icons/pi";
const Updateitem = () => {
    const axiospublic=usePublicAxios()
    const image_upload_token = "8e9b118dba7090b0a054bb8fc0eadeb1";
    const image_upload_api=`https://api.imgbb.com/1/upload?key=${image_upload_token}`
     const {
        register,
        handleSubmit,
        reset
      } = useForm()
    const {name,category,price,recipe,image}=useLoaderData()
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
           const menures=await axiospublic.patch('/menu',menuitem);
           console.log(menures.data)
           if(menures.data.modifiedCount>0){
            reset();
             Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${menures.data.name} has been updated`,
  showConfirmButton: false,
  timer: 1500
});
           }
        }
       }
    return (
        <div>
            <div className='bg-[#E8E8E8] max-w-3xl mx-auto my-12'>
                            <form onSubmit={handleSubmit(onSubmit)} className='p-12 space-y-3'>
                                   <fieldset className="fieldset text-lg">
              <legend className="fieldset-legend ">Recipe name* </legend>
              <input type="text" {...register("name")} className="input w-full" defaultValue={name} placeholder="Recipe name" />
            </fieldset>
            <div className='flex gap-6 items-center'>
                <fieldset className="fieldset text-lg w-1/2">
              <legend className="fieldset-legend ">Category* </legend>
              <select {...register("category", { required: true })} defaultValue={category} className="select select-neutral border-0">
              <option value={category} disabled>Select Category</option>
              <option>Dessert</option>
              <option>Soup</option>
              <option>Pizza</option>
              <option>Salad</option>
              <option>Drinks</option>
            </select>
            </fieldset>
                 <fieldset className="fieldset text-lg w-1/2">
              <legend className="fieldset-legend ">Price* </legend>
              <input type="text" {...register("price")} defaultValue={price} className="input w-full" placeholder="Price" />
            </fieldset>
            </div>
             <fieldset className="fieldset text-lg">
              <legend className="fieldset-legend ">Recipe Details* </legend>
              <textarea {...register("recipe")} className="textarea w-full h-32" placeholder="Recipe Details" defaultValue={recipe}></textarea>
            </fieldset>
            <div>
            <input  type="file" {...register("image")} className="file-input file-input-ghost" />
            </div>
             <button className='btn text-lg bg-linear-to-r from-[#835D23] to-[#B58130]'>
            Update Item <PiForkKnifeBold />
             </button>
                            </form> 
                        </div>
        </div>
    );
};

export default Updateitem;