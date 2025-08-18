import React from 'react';
import Banner from '../Pages/Banner/Banner';
import Catagory from '../Pages/Catagory/Catagory';
const Home = () => {
    return (
        <div className='space-y-12'>
            <Banner></Banner>
            <Catagory></Catagory>
        </div>
    );
};

export default Home;