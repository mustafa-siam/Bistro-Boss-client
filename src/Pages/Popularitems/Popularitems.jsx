import React, { useEffect, useState } from 'react';
import Heading from '../SectionHeading/Heading';
import Menuitem from '../../Shared/Menuitem/Menuitem';

const Popularitems = () => {
    const [menu,setmenu]=useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularmenu=data.filter(item=>item.category==="popular")
            setmenu(popularmenu)
        })
    },[])
    return (
        <div className='space-y-12'>
            <section>
                <Heading
                subheading={'Check it out'}
                heading={'FROM OUR MENU'}
                >
                </Heading>
            </section>
            <div className='grid grid-cols-2 gap-6'>
                {
                    menu.map(item=><Menuitem key={item._id} item={item}></Menuitem>)
                }
            </div>
        </div>
    );
};

export default Popularitems;