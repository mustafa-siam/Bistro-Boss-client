import React from 'react';
import Banner from '../Pages/Banner/Banner';
import Catagory from '../Pages/Catagory/Catagory';
import Chiefservice from '../Pages/Chiefservice/Chiefservice';
import Popularitems from '../Pages/Popularitems/Popularitems';
const Home = () => {
    return (
        <div className='space-y-12'>
            <Banner></Banner>
            <Catagory></Catagory>
            <Chiefservice></Chiefservice>
            <Popularitems></Popularitems>
        </div>
    );
};

export default Home;