import { Slide } from '@mui/material';
import React from 'react';
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import img1 from '../../src/assets/1.png'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default function Carousel() {

    return (
  
           <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        {/* <SwiperSlide>
          <Slide
            image={img1}
            text='Get Your Web Development Projects Done in minutes'
          />
        </SwiperSlide> */}
        <SwiperSlide>
          <Slide
            image={img1}
            text='Get Your Graphics Design Projects Done in minutes'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={img1}
            text='Start Your Digital Marketing Campaigns up n running'
          />
        </SwiperSlide>
      </Swiper>
    </div>
    
    );
}

