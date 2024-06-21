"use client"
import React from 'react'
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



const SingleSlider = () => {
  return (
    <div className='py-5'>
        <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={10}
        navigation={{
          prevEl: '.swiper-button-prev3',
          nextEl: '.swiper-button-next3',
        }}
        loop={false}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400:{
            slidesPerView:1,
          },
          768: {
            slidesPerView: 2,
          },
          1000:{
            slidesPerView:7
          },
        }}
        >
          
          <SwiperSlide className='text-center'>
            <h6 className='text-center text-black'>Overview/Home</h6>
        </SwiperSlide>
             
        <SwiperSlide className='text-center'>
            <h6 className='text-center text-black'>Highlights</h6>
        </SwiperSlide>

        <SwiperSlide className='text-center'>
            <h6 className='text-center text-black'>Around This Project</h6>
        </SwiperSlide>
 
        <SwiperSlide className='text-center'>
            <h6 className='text-center text-black'>Around This Project</h6>
        </SwiperSlide>

        <SwiperSlide className='text-center'>
            <h6 className='text-center text-black'>Around This Project</h6>
        </SwiperSlide>

        <SwiperSlide className='text-center'>
            <h6 className='text-center text-black'>Around This Project</h6>
        </SwiperSlide>

        <SwiperSlide className='text-center'>
            <h6 className='text-center text-black'>Around This Project</h6>
        </SwiperSlide>

        <SwiperSlide className='text-center'>
            <h6 className='text-center text-black'>Around This Project</h6>
        </SwiperSlide>

        <SwiperSlide className='text-center'>
            <h6 className='text-center text-black'>Around This Project</h6>
        </SwiperSlide>

        <SwiperSlide className='text-center'>
            <h6 className='text-center text-black'>Around This Project</h6>
        </SwiperSlide>

        <SwiperSlide className='text-center'>
            <h6 className='text-center text-black'>Around This Project</h6>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SingleSlider
