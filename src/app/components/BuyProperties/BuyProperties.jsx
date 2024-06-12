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
      <section className="buy-slider" id="rent-sales">
        <div className="container">
          <div className="row mb-md-4 align-items-center" data-aos="fade-up"
     data-aos-duration="1000">
            <div className="col-md-10"><h2 className="heading-xl">Properties for Rent / Sales</h2> <p className="paragraph">Exclusive showcase of top projects</p></div>
            <div className="col-md-2"><div className="d-flex justify-content-end"> <Image className="pointer swiper-button-prev2 me-2" src="/img/left-arrow.svg" alt="Logo" width={40}
              height={40} />  <Image className="pointer swiper-button-next2" src="/img/right-arrow.svg" alt="Logo" width={40}
                height={40} /></div> </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={40}
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
                  <h3 className="heading-h3 ">Bhojpal Shree Krishna Heights</h3>
                  <h6 className="frea-p">By Bhopal builders & Developers</h6>
                  <h6 className="heading-h3 co-blue">3 BHK Apartment</h6>
                  <p className="frea-p-small">Bagmugaliya, Bhopal</p>
                  </div>
                  <div className="inner-two">
                 <h2 className="f-eigthy">₹53.03 L - 68.0 L</h2>
                  </div>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div className="property">
                <Image style={{ width: '100%', height: '100%' }} src="/img/Properties-two.jpg" alt="Logo" width={600} height={347} />
                <div className="box-nonoverlap">
                  <div className="inner-one">
                  <h3 className="heading-h3 ">Swadesh Orchard Valley</h3>
                  <h6 className="frea-p">By Swadesh Developers</h6>
                  <h6 className="heading-h3 co-blue">3 BHK Apartment</h6>
                  <p className="frea-p-small">Kolar Road, Bhopal</p>
                  </div>
                  <div className="inner-two">
                 <h2 className="f-eigthy">₹53.03 L - 68.0 L</h2>
                  </div>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div className="property">
                <Image style={{ width: '100%', height: '100%' }} src="/img/Properties-three.jpg" alt="Logo" width={600} height={347} />
                <div className="box-nonoverlap">
                  <div className="inner-one">
                  <h3 className="heading-h3 ">Swadesh Orchard Valley</h3>
                  <h6 className="frea-p">By Swadesh Developers</h6>
                  <h6 className="heading-h3 co-blue">3 BHK Apartment</h6>
                  <p className="frea-p-small">Kolar Road, Bhopal</p>
                  </div>
                  <div className="inner-two">
                 <h2 className="f-eigthy">₹53.03 L - 68.0 L</h2>
                  </div>
                </div>
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div className="property">
                <Image style={{ width: '100%', height: '100%' }} src="/img/Properties-two.jpg" alt="Logo" width={600} height={347} />
                <div className="box-nonoverlap">
                  <div className="inner-one">
                  <h3 className="heading-h3 ">Swadesh Orchard Valley</h3>
                  <h6 className="frea-p">By Swadesh Developers</h6>
                  <h6 className="heading-h3 co-blue">3 BHK Apartment</h6>
                  <p className="frea-p-small">Kolar Road, Bhopal</p>
                  </div>
                  <div className="inner-two">
                 <h2 className="f-eigthy">₹53.03 L - 68.0 L</h2>
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
