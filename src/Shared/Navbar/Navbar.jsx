import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authcontext } from '../../provider/Authprovider';
import Swal from 'sweetalert2';
import { FaShoppingCart } from "react-icons/fa";
import useCarts from '../../Hooks/UseCarts';
const Navbar = () => {
  const [carts]=useCarts();
  const {user,logout}=useContext(authcontext)
  console.log(user?.displayName)
  const handlelogout=()=>{
    logout()
    .then(()=>{
      Swal.fire({
        title: "SignOut successfull",
        showConfirmButton:false,
        timer:3000,
        icon:'success',
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
    })
  }
  const navlinks=<>
  <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/order/Dessert'}>Our Shop</Link></li>
      <li><Link to={'/menu'}>Menu</Link></li>
      <li><Link to={'/dashboard'}> <FaShoppingCart /> <div className="badge badge-sm badge-secondary">+{carts.length}</div></Link></li>
  </>
    return ( 
       <div className="navbar opacity-30 bg-black text-white fixed z-20 max-w-7xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow text-white">
         {
          navlinks
         }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-white">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <button onClick={handlelogout} className="btn bg-white text-black">LogOut</button> 
      :
<button  className="btn bg-white text-black"><Link to={'/login'}>LogIn</Link> </button>
    }
    
  </div>
</div>
    );
};

export default Navbar;
