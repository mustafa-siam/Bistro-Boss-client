import React from 'react';

const Menuitem = ({item}) => {
    const {name,recipe,image,price}=item
    return (
       <div className="flex justify-center items-center card-border bg-base-100">
        <div>
            <img src={image} alt="" 
            className='rounded-b-[200px] rounded-r-[200px] w-52'
            />
        </div>
  <div className="card-body">
    <h2 className="card-title">{name} --------------</h2>
    <p>{recipe}</p>
  </div>
  <div>
    <p className='text-[#BB8506]'>${price}</p>
  </div>
</div>
    );
};

export default Menuitem;