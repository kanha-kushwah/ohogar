"use client"; // <===== REQUIRED

import React from "react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination,Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/grid';

const BuyFive = () => {
  return (
    <>
      <section id="banner-five" className="buy-slider">
        <div className="container">
          <div className="row mb-md-4 align-items-center">
            <div className="col-md-10"><h2 className="heading-xl text-white">Project in <b>Focus</b></h2> <p className="paragraph">Noteworthy projects in <b>Bhopal</b></p></div>
            <div className="col-md-2"><div className="d-flex justify-content-end"> <Image className="me-2  pointer swiper-button-prev1" src="/img/left-arrows.svg" alt="Logo" width={40}
              height={40} />  <Image className="pointer swiper-button-next1" src="/img/right-arrows.svg" alt="Logo" width={40}
                height={40} /></div> </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Grid]}
            spaceBetween={40}
            slidesPerView={3}
            grid = {{
                rows: 2,
              }}
            navigation={{
              prevEl: '.swiper-button-prev1',
              nextEl: '.swiper-button-next1',
            }}
            loop={true}
            
            // pagination={{ clickable: true }}
          >
              
            <SwiperSlide>
              <div className="d-flex">
                <Image style={{ width: '100%', height: '100%' }} src="/img/buy-slide-one.jpg" alt="Logo" width={600} height={347} />
                <div className="box-overlap">
                  <div className="inner-one">
                  <h3 clas>Swadesh Orchard Valley</h3>
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

export default BuyFive;
