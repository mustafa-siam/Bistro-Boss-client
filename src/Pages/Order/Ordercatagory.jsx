import React from 'react';
import Foodcart from '../../Shared/Foodorder/Foodcart';

const Ordercatagory = ({items}) => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6'>
                    {
                        items.map(item=><Foodcart key={item._id} item={item}></Foodcart>)
                    }
                </div>
    );
};

export default Ordercatagory;