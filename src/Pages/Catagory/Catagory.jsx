import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
//image
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import Heading from '../SectionHeading/Heading';
const Catagory = () => {
    return (
       <>
       <section>
        <Heading subheading={"rom 11:00am to 10:00pm"}
                 heading={"ORDER ONLINE"}
        >
        
        </Heading>
       </section>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='relative'>
            <img src={slide1} alt="" />
            <h1 className='text-white font-medium text-xl absolute bottom-5 translate-x-1/2 left-16'>SALADS</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h1 className='text-white font-medium text-xl absolute bottom-5 translate-x-1/2 left-16'>PIZZA</h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h1 className='text-white font-medium text-xl absolute bottom-5 translate-x-1/2 left-16'>SOUPS</h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h1 className='text-white font-medium text-xl absolute bottom-5 translate-x-1/2 left-16'>DESERT</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h1 className='text-white font-medium text-xl absolute bottom-5 translate-x-1/2 left-16'>SALADS</h1>
            </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Catagory;