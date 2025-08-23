import React from 'react';

const Foodcart = ({item}) => {
    const {name,recipe,image}=item
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
      <button className='btn border-b-3 text-[#BB8506] border-b-[#BB8506]'>add to cart</button>
    </div>
  </div>
</div>
    );
};

export default Foodcart;