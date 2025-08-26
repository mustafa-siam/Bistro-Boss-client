import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
const Dashboard = () => {
    return (
        <div>
            <div className='w-64 bg-[#D1A054] h-screen'>
                 <h1 className='text-center font-bold text-2xl'>Bistro Boss <br /><span className='font-medium tracking-widest'>Resturant</span> </h1>
                 <div>
                    <ul className='menu text-base space-y-4'>
                       <li >                      
                        <Link> <IoMdHome/> User Home</Link>
                       </li>
                       <li>
                        <Link><FaCalendarAlt /> Reservation</Link>
                       </li>
                       <li>
                        
                        <Link><FaShoppingCart /> My Cart</Link>
                       </li>
                       <li>
                        
                        <Link><IoIosPeople /> Add review</Link>
                       </li>
                       <li>
                       
                        <Link><MdBookmarkAdd /> My bookings</Link>
                       </li>
                       <hr className='text-white' />
                       <li>

                        <Link><IoMdHome />Home</Link>
                       </li>
                       <li>
                        
                        <Link><GiHamburgerMenu /> Menu</Link>
                       </li>
                       <li>
                        
                        <Link><GiShoppingBag /> Shop</Link>
                       </li>
                       <li>
                        
                        <Link><MdEmail /> Contact</Link>
                       </li>
                    </ul>
                 </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;