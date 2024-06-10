"use client"; // <===== REQUIRED

import React from "react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BuyFeatured = () => {
  return (
    <>
      <section className="buy-slider">
        <div className="container">
          <div className="row mb-md-4 align-items-center">
            <div className="col-md-11"><h2 className="heading-xl">Featured <b>Developers</b></h2> <p className="paragraph">Prominent developers in <b>Bhopal</b></p></div>
            <div className="col-md-1"><div className="d-flex justify-content-between"> <Image src="/img/left-arrow.svg" alt="Logo" width={40}
              height={40} />  <Image src="/img/right-arrow.svg" alt="Logo" width={40}
                height={40} /></div> </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            loop={true}
            
            // pagination={{ clickable: true }}
          >
           
            <SwiperSlide>
        <div className="outer-slider text-black">
          <div className="box d-flex text-black g-20">
            <img src="img/demo-img.jpg" alt="" width={'96px'} height={'96px'} />
            <div className="inner-box">
                <h3 className="heading-h3">Agrawal Construction</h3>

                <div className="d-flex justify-content-between">
                <div className="col"><h4>2013</h4> <p>Year Estd.</p></div>
                  <div className="col"><h4>2013</h4> <p>Year Estd.</p></div>
                </div>
            </div>
          </div>
          <p>Agrawal Construction is prominent Best Construction Company in Bhopal It completed 30+ project including flats</p>
          <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Sage Milestone</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Sage Golden</button>

  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">

  <Swiper className="text-black"
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            
            // pagination={{ clickable: true }}
          >
           
            <SwiperSlide> <p className="text-black">sdfsdfsd</p>  </SwiperSlide>
            <SwiperSlide> <p className="text-black">sdfsdfsd</p>   </SwiperSlide>
            <SwiperSlide> <p className="text-black">sdfsdfsd</p>   </SwiperSlide>
            <SwiperSlide> <p className="text-black">sdfsdfsd</p>   </SwiperSlide>
            <SwiperSlide> <p className="text-black">sdfsdfsd</p>   </SwiperSlide>


                </Swiper>

  </div>

  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>

</div>
          
          </div>
            
            </SwiperSlide>
           

            <SwiperSlide>
        <div className="outer-slider text-black">
          <div className="box d-flex text-black g-20">
            <img src="img/demo-img.jpg" alt="" width={'96px'} height={'96px'} />
            <div className="inner-box">
                <h3 className="heading-h3">Agrawal Construction</h3>

                <div className="d-flex justify-content-between">
                <div className="col"><h4>2013</h4> <p>Year Estd.</p></div>
                  <div className="col"><h4>2013</h4> <p>Year Estd.</p></div>
                </div>
            </div>
          </div>
          <p>Agrawal Construction is prominent Best Construction Company in Bhopal It completed 30+ project including flats</p>
          <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Sage Milestone</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Sage Golden</button>

  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">

  <Swiper className="text-black"
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            
            // pagination={{ clickable: true }}
          >
           
            <SwiperSlide> <p className="text-black">sdfsdfsd</p>  </SwiperSlide>
            <SwiperSlide> <p className="text-black">sdfsdfsd</p>   </SwiperSlide>
            <SwiperSlide> <p className="text-black">sdfsdfsd</p>   </SwiperSlide>
            <SwiperSlide> <p className="text-black">sdfsdfsd</p>   </SwiperSlide>
            <SwiperSlide> <p className="text-black">sdfsdfsd</p>   </SwiperSlide>


                </Swiper>

  </div>

  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>

</div>
          
          </div>
            
            </SwiperSlide>
            <SwiperSlide>
        <div className="outer-slider text-black">
          <div className="box d-flex text-black g-20">
            <img src="img/demo-img.jpg" alt="" width={'96px'} height={'96px'} />
            <div className="inner-box">
                <h3 className="heading-h3">Agrawal Construction</h3>

                <div className="d-flex justify-content-between">
                <div className="col"><h4>2013</h4> <p>Year Estd.</p></div>
                  <div className="col"><h4>2013</h4> <p>Year Estd.</p></div>
                </div>
            </div>
          </div>
          <p>Agrawal Construction is prominent Best Construction Company in Bhopal It completed 30+ project including flats</p>
          <nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Sage Milestone</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Sage Golden</button>

  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">

  <Swiper className="text-black"
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            
            // pagination={{ clickable: true }}
          >
           
            <SwiperSlide> <p className="text-black">sdfsdfsd</p>  </SwiperSlide>
            <SwiperSlide> <p className="text-black">sdfsdfsd</p>   </SwiperSlide>
            <SwiperSlide> <p className="text-black">sdfsdfsd</p>   </SwiperSlide>
            <SwiperSlide> <p className="text-black">sdfsdfsd</p>   </SwiperSlide>
            <SwiperSlide> <p className="text-black">sdfsdfsd</p>   </SwiperSlide>


                </Swiper>

  </div>

  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">...</div>

</div>
          
          </div>
            
            </SwiperSlide>
          </Swiper>
        </div>
      </section>


    </>
  );
};

export default BuyFeatured;
