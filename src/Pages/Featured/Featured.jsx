import React from 'react';
import Heading from '../SectionHeading/Heading';
import featured from '../../assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="bg-fixed bg-cover bg-center md:p-30 p-10 space-y-12" style={{ backgroundImage: `url(${featured})` }}>
            <div className='flex md:flex-row flex-col justify-center items-center gap-12 '>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className='text-gray-50 text-2xl space-y-2 bg-gradient-to-r from-transparent via-black/40 to-transparent p-4'>
                    <p>{new Date().toLocaleString()}</p>
                    <h4>WHERE CAN I GET SOME?</h4>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                </div>
            </div>
        </div>
    );
};

export default Featured;