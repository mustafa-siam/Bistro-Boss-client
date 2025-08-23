import React from 'react';
import Menuitem from '../../../Shared/Menuitem/Menuitem';
import Cover from '../../coverbanner/Cover';
import { Link } from 'react-router-dom';

const Menucatagory = ({items,title,img,details}) => {
    return (
        <div className='space-y-12'>
            <div>
                {
            title && <Cover image={img} title={title} details={details}></Cover>
          }
            </div>
          
             <div className='grid grid-cols-1 md:grid-cols-2 gap-6  p-2'>
                {
                    items.map(item=><Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
            <div className='text-center'>
                <Link to={`/order/${title}`}><button className='btn border-b-3 border-b-black'>ORDER YOUR FAVOURITE FOOD</button></Link>
                
            </div>
        </div>
    );
};

export default Menucatagory;