import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import Heading from '../SectionHeading/Heading';
const Review = () => {
    const [review,setreview]=useState([])
    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data=>setreview(data))
    },[])
    return (
        <>
        <section>
            <Heading
            subheading={"What Our Clients Say"}
            heading={"TESTIMONIALS"}
            >
            </Heading>
        </section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-w-4xl mx-auto"
      >
        {
            review.map(rev=><SwiperSlide key={rev._id}>
                   <div className='flex flex-col justify-center items-center p-20 text-center space-y-6'>
                    <div><Rating
      style={{ maxWidth: 180 }}
      value={rev.rating}
      readOnly
    /></div>
                    <p>{rev.details}</p>
                    <h1 className='text-[#CD9003] text-3xl'>{rev.name}</h1>
                   </div>
            </SwiperSlide>)
        }
      </Swiper>
    </>
    );
};

export default Review;