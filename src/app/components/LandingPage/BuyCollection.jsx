"use client";
import React from "react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSelector } from "react-redux";

const BuyCollection = () => {


  return (
    <>
      <section className="buy-slider" id="collection"> 
        <div className="container">
          <div className="row mb-md-4 align-items-center" data-aos="fade-up"
     data-aos-duration="1000">
            <div className="col-md-10 col-10"><h2 className="heading-xl">Featured <b>Collection</b></h2> <p className="paragraph">Exclusive showcase of top projects</p></div>
            <div className="col-md-2 col-2">
              <div className="d-flex justify-content-end arrow-slider"> 
              <Image className="me-2 pointer swiper-button-prev3" src="/img/left-arrow.svg" alt="Logo" width={40}
              height={40} /> 
               <Image className="pointer swiper-button-next3" src="/img/right-arrow.svg" alt="Logo" width={40}
                height={40} /></div> 
                </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={3}
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
              
              <SwiperSlide>
              <div className="d-flex po-re">
                <Image  style={{ width: '100%', height: '100%' }}  src="/img/Collection-one.jpg" alt="Logo" width={600} height={347} />
                <div className="box-overlap  w-100">
                  <div className="inner-one text-center w-100">
                  <h3 >Swadesh Orchard Valley</h3>
                  <h6>By Swadesh Developers</h6>
                  </div>
              
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex po-re">
                <Image style={{ width: '100%', height: '100%' }}  src="/img/Collection-two.jpg" alt="Logo" width={600} height={347} />
                <div className="box-overlap  w-100">
                  <div className="inner-one text-center w-100">
                  <h3>Swadesh Orchard Valley</h3>
                  <h6>By Swadesh Developers</h6>
                  </div>
              
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex po-re">
                <Image style={{ width: '100%', height: '100%' }}  src="/img/Collection-three.jpg" alt="Logo" width={600} height={347} />
                <div className="box-overlap  w-100">
                  <div className="inner-one text-center w-100">
                  <h3>Swadesh Orchard Valley</h3>
                  <h6>By Swadesh Developers</h6>
                  </div>
              
                </div>
              </div>

            </SwiperSlide>

            <SwiperSlide>
              <div className="d-flex po-re">
                <Image style={{ width: '100%', height: '100%' }}  src="/img/Collection-one.jpg" alt="Logo" width={600} height={347} />
                <div className="box-overlap  w-100">
                  <div className="inner-one text-center w-100">
                  <h3>Swadesh Orchard Valley</h3>
                  <h6>By Swadesh Developers</h6>
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

export default BuyCollection;
