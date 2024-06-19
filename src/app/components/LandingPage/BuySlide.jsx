"use client"; // <===== REQUIRED

import React from "react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BuySlide = () => {
  return (
    <>
      <section className="buy-slider">
        <div className="container">
          <div className="row mb-md-4 align-items-center"  data-aos="fade-up"
     data-aos-duration="1000">
            <div className="col-md-10 col-10"><h2 className="heading-xl" 
>Project in <b>Focus</b></h2> <p className="paragraph" >Noteworthy projects in <b>Bhopal</b></p></div>
            <div className="col-md-2 col-2"><div className="d-flex justify-content-end arrow-slider"> <Image  className="me-2 pointer swiper-button-prev1 " src="/img/left-arrow.svg" alt="Logo" width={40}
              height={40} />  <Image className="pointer swiper-button-next1" src="/img/right-arrow.svg" alt="Logo" width={40}
                height={40} /></div> </div>
          </div>
          <Swiper
          
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={2}
            navigation={{
              prevEl: '.swiper-button-prev1',
              nextEl: '.swiper-button-next1',
            }}
            loop={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400:{
                slidesPerView:1,
              },
              865: {
                slidesPerView: 2,
              },
              1000:{
                slidesPerView:2
              },
             
            }}
            // pagination={{ clickable: true }}
          >
              
            <SwiperSlide >
              <div className="d-flex">
                <Image style={{ width: '100%', height: '100%' }} src="/img/buy-slide-one.jpg" alt="Logo" width={600} height={347} />
                <div className="box-overlap" >
                  <div className="inner-one">
                  <h3>Swadesh Orchard Valley</h3>
                  <h6>By Swadesh Developers</h6>
                  <h6>3 BHK Apartment</h6>
                  <p>Kolar Road, Bhopal</p>
                  </div>
                  <div className="inner-two">
                 <h2>₹53.03 L - 68.0 L</h2>
                  </div>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex">
                <Image style={{ width: '100%', height: '100%' }} src="/img/buy-slide-two.jpg" alt="Logo" width={600} height={347} />
                <div className="box-overlap">
                  <div className="inner-one">
                  <h3>Swadesh Orchard Valley</h3>
                  <h6>By Swadesh Developers</h6>
                  <h6>3 BHK Apartment</h6>
                  <p>Kolar Road, Bhopal</p>
                  </div>
                  <div className="inner-two">
                 <h2>₹53.03 L - 68.0 L</h2>
                  </div>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex">
                <Image style={{ width: '100%', height: '100%' }} src="/img/buy-slide-one.jpg" alt="Logo" width={600} height={347} />
                <div className="box-overlap">
                  <div className="inner-one">
                  <h3>Swadesh Orchard Valley</h3>
                  <h6>By Swadesh Developers</h6>
                  <h6>3 BHK Apartment</h6>
                  <p>Kolar Road, Bhopal</p>
                  </div>
                  <div className="inner-two">
                 <h2>₹53.03 L - 68.0 L</h2>
                  </div>
                </div>
              </div>

            </SwiperSlide>


          </Swiper>
        </div>
      </section>


    </>
  );
};

export default BuySlide;
