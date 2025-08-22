import React from 'react';
import Banner from '../Pages/Banner/Banner';
import Catagory from '../Pages/Catagory/Catagory';
import Chiefservice from '../Pages/Chiefservice/Chiefservice';
import Popularitems from '../Pages/Popularitems/Popularitems';
import Featured from '../Pages/Featured/Featured';
import Review from '../Pages/Review/Review';
import { Helmet} from 'react-helmet-async';
const Home = () => {
    return (
        <div className='space-y-12'>
            <Helmet>
                 <title>Home | BistroBoss</title>
            </Helmet>
            <Banner></Banner>
            <Catagory></Catagory>
            <Chiefservice></Chiefservice>
            <Popularitems></Popularitems>
            <Featured></Featured>
            <Review></Review>
        </div>
    );
};

export default Home;