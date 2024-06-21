"use client";
import React from 'react'
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Teastimonial = () => {
  return (
    <section className="testimonial-slider" id="collection"> 
    <div className="container-fluid">

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={120}
        slidesPerView={3}
        centeredSlides={true}
        navigation={{
          prevEl: '.swiper-button-prev3',
          nextEl: '.swiper-button-next3',
        }}
        loop={true}
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
            slidesPerView:3
          },
        }}
        pagination={{ clickable: true }}
      >
          
          <SwiperSlide className='text-center'>
            <Image src="/img/list/avtar.png" alt="Logo" width={"100"} height={"100"} />
            <h6  className='text-center text-black'>John Doe</h6>
            <p className='text-center text-black'>I bought the premium plus package to sell my property. I got so many buyers that I could easily finalize the deal at high profit </p>
        </SwiperSlide>

        <SwiperSlide className='text-center'>
            <Image src="/img/list/avtar.png" alt="Logo" width={"100"} height={"100"} />
            <h6  className='text-center text-black'>John Doe</h6>
            <p className='text-center text-black'>I bought the premium plus package to sell my property. I got so many buyers that I could easily finalize the deal at high profit </p>
        </SwiperSlide>


        <SwiperSlide className='text-center'>
            <Image src="/img/list/avtar.png" alt="Logo" width={"100"} height={"100"} />
            <h6  className='text-center text-black'>John Doe</h6>
            <p className='text-center text-black'>I bought the premium plus package to sell my property. I got so many buyers that I could easily finalize the deal at high profit </p>
        </SwiperSlide>

        <SwiperSlide className='text-center'>
            <Image src="/img/list/avtar.png" alt="Logo" width={"100"} height={"100"} />
            <h6  className='text-center text-black'>John Doe</h6>
            <p className='text-center text-black'>I bought the premium plus package to sell my property. I got so many buyers that I could easily finalize the deal at high profit </p>
        </SwiperSlide>

      </Swiper>

      
    </div>
  </section>
  )
}

export default Teastimonial
