"use client"; // <===== REQUIRED

import React from "react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BuyProperties = () => {
  return (
    <>
      <section className="buy-slider">
        <div className="container">
          <div className="row mb-md-4 align-items-center">
            <div className="col-md-11"><h2 className="heading-xl">Properties for Rent / Sales</h2> <p className="paragraph">Exclusive showcase of top projects</p></div>
            <div className="col-md-1"><div className="d-flex justify-content-between"> <Image className="pointer swiper-button-prev2" src="/img/left-arrow.svg" alt="Logo" width={40}
              height={40} />  <Image className="pointer swiper-button-next2" src="/img/right-arrow.svg" alt="Logo" width={40}
                height={40} /></div> </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation={{
              prevEl: '.swiper-button-prev2',
              nextEl: '.swiper-button-next2',
            }}
            loop={true}
            
            // pagination={{ clickable: true }}
          >
              
            <SwiperSlide>
              <div className="property">
                <Image style={{ width: '100%', height: '100%' }} src="/img/Properties-one.jpg" alt="Logo" width={600} height={347} />
                <div className="box-nonoverlap">
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
              <div className="property">
                <Image style={{ width: '100%', height: '100%' }} src="/img/Properties-two.jpg" alt="Logo" width={600} height={347} />
                <div className="box-nonoverlap">
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
              <div className="property">
                <Image style={{ width: '100%', height: '100%' }} src="/img/Properties-three.jpg" alt="Logo" width={600} height={347} />
                <div className="box-nonoverlap">
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
              <div className="property">
                <Image style={{ width: '100%', height: '100%' }} src="/img/Properties-two.jpg" alt="Logo" width={600} height={347} />
                <div className="box-nonoverlap">
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

export default BuyProperties;
