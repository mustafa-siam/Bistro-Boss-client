import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { GiShoppingBag, GiHamburgerMenu } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-6">
        <label 
          htmlFor="dashboard-drawer" 
          className="btn btn-square btn-ghost lg:hidden fixed top-4 left-4 z-50 shadow-md"
        >
          <GiHamburgerMenu size={24} />
        </label>

        <div className="mt-12 lg:mt-0">
          <Outlet />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <div className="w-64 bg-[#D1A054] min-h-full p-4">
          <h1 className="text-center font-bold text-2xl">
            Bistro Boss <br />
            <span className="font-medium tracking-widest">Resturant</span>
          </h1>
          <ul className="menu text-base space-y-4 mt-6">
            <li><Link><IoMdHome/> User Home</Link></li>
            <li><Link><FaCalendarAlt /> Reservation</Link></li>
            <li><Link to="mycarts"><FaShoppingCart /> My Cart</Link></li>
            <li><Link><IoIosPeople /> Add review</Link></li>
            <li><Link><MdBookmarkAdd /> My bookings</Link></li>
            <hr className="text-white" />
            <li><Link to="/"><IoMdHome /> Home</Link></li>
            <li><Link to="/menu"><GiHamburgerMenu /> Menu</Link></li>
            <li><Link to="/order/somecat"><GiShoppingBag /> Shop</Link></li>
            <li><Link to="/contact"><MdEmail /> Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
