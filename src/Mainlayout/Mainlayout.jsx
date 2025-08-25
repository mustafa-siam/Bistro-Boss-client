import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Mainlayout = () => {
    const loacation=useLocation();
    const noheaderfooter=loacation.pathname.includes('/register') || loacation.pathname.includes('/login')
    return (
        <div className='max-w-7xl mx-auto space-y-12'>
            {noheaderfooter || <Navbar></Navbar>}   
            <Outlet></Outlet>
            {noheaderfooter || <Footer></Footer>}
            
        </div>
    );
};

export default Mainlayout;