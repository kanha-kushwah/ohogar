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
      <section className="buy-slider" id="featured">
        <div className="container">
          <div className="row mb-md-4 align-items-center" data-aos="fade-up"
     data-aos-duration="1000"> 
            <div className="col-md-10 col-10">
              <h2 className="heading-xl">
                Featured <b>Developers</b>
              </h2>{" "}
              <p className="paragraph">
                Prominent developers in <b>Bhopal</b>
              </p>
            </div>
            <div className="col-md-2 col-2">
              <div className="d-flex justify-content-end arrow-slider">
                {" "}
                <Image
                  className="pointer swiper-button-prev5 me-2 "
                  src="/img/left-arrow.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                />{" "}
                <Image
                  className="pointer swiper-button-next5"
                  src="/img/right-arrow.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </div>{" "}
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation={{
              prevEl: ".swiper-button-prev5",
              nextEl: ".swiper-button-next5",
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
                slidesPerView:3
              },
             
            }}
            // pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="outer-slider text-black">
                <div className="box d-flex text-black g-20">
                  <Image
                    src="/img/demo-img.jpg"
                    alt="img"
                    width={96}
                    height={96}
                  />
                  <div className="inner-box">
                    <h3 className="heading-h3">Agrawal Construction</h3>

                    <div className="d-flex justify-content-between">
                      <div className="col">
                        <h4 className="small-sub-heading">2013</h4>{" "}
                        <p className="frea-p">Year Estd.</p>
                      </div>
                      <div className="col">
                        <h4 className="small-sub-heading">2013</h4>{" "}
                        <p className="frea-p">Year Estd.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="frea-p mt-2">
                  Agrawal Construction is prominent Best Construction Company in
                  Bhopal It completed 30+ project including flats
                </p>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Sage Milestone
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Sage Golden
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                    tabindex="0"
                  >
                    <Swiper
                      className="text-black mt-3"
                      modules={[Navigation, Pagination]}
                      spaceBetween={0}
                      slidesPerView={2}
                      loop={true}

                      // pagination={{ clickable: true }}
                    >
                      <SwiperSlide>
                        {" "}
                        <Image
                          className="po-re"
                          src="/img/slider-in-one.png"
                          alt="img"
                          width={167}
                          height={179}
                        />
                        <div className="box-featured">
                          <h6 className="text-white sub-heading-regular">
                            Swadesh Orchard Valley
                          </h6>
                          <p className="text-ofwhite peragraph-regular">
                            By Swadesh Developers
                          </p>
                          <h5 className="text-white sub-heading-bold">
                            ₹53.03 L - 68.0 L
                          </h5>
                        </div>{" "}
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <Image
                          className="po-re"
                          src="/img/slider-in-two.png"
                          alt="img"
                          width={167}
                          height={179}
                        />
                        <div className="box-featured">
                          <h6 className="text-white sub-heading-regular">
                            Swadesh Orchard Valley
                          </h6>
                          <p className="text-ofwhite peragraph-regular">
                            By Swadesh Developers
                          </p>
                          <h5 className="text-white sub-heading-bold">
                            ₹53.03 L - 68.0 L
                          </h5>
                        </div>{" "}
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <Image
                          className="po-re"
                          src="/img/slider-in-three.png"
                          alt="img"
                          width={167}
                          height={179}
                        />
                        <div className="box-featured">
                          <h6 className="text-white sub-heading-regular">
                            Swadesh Orchard Valley
                          </h6>
                          <p className="text-ofwhite peragraph-regular">
                            By Swadesh Developers
                          </p>
                          <h5 className="text-white sub-heading-bold">
                            ₹53.03 L - 68.0 L
                          </h5>
                        </div>{" "}
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <Image
                          className="po-re"
                          src="/img/slider-in-one.png"
                          alt="img"
                          width={167}
                          height={179}
                        />
                        <div className="box-featured">
                          <h6 className="text-white sub-heading-regular">
                            Swadesh Orchard Valley
                          </h6>
                          <p className="text-ofwhite peragraph-regular">
                            By Swadesh Developers
                          </p>
                          <h5 className="text-white sub-heading-bold">
                            ₹53.03 L - 68.0 L
                          </h5>
                        </div>{" "}
                      </SwiperSlide>
                    </Swiper>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                    tabindex="0"
                  >
                    ...
                  </div>
                </div>
              </div>
            </SwiperSlide>



            <SwiperSlide>
              <div className="outer-slider text-black">
                <div className="box d-flex text-black g-20">
                  <Image
                    src="/img/demo-img.jpg"
                    alt="img"
                    width={96}
                    height={96}
                  />
                  <div className="inner-box">
                    <h3 className="heading-h3">Agrawal Construction</h3>

                    <div className="d-flex justify-content-between">
                      <div className="col">
                        <h4 className="small-sub-heading">2013</h4>{" "}
                        <p className="frea-p">Year Estd.</p>
                      </div>
                      <div className="col">
                        <h4 className="small-sub-heading">2013</h4>{" "}
                        <p className="frea-p">Year Estd.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="frea-p mt-2">
                  Agrawal Construction is prominent Best Construction Company in
                  Bhopal It completed 30+ project including flats
                </p>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-home-tab1"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home1"
                      type="button"
                      role="tab"
                      aria-controls="nav-home1"
                      aria-selected="true"
                    >
                      Sage Milestone
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab1"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile1"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile1"
                      aria-selected="false"
                    >
                      Sage Golden
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home1"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab1"
                    tabindex="0"
                  >
                    <Swiper
                      className="text-black mt-3"
                      modules={[Navigation, Pagination]}
                      spaceBetween={0}
                      slidesPerView={2}
                      loop={true}

                      // pagination={{ clickable: true }}
                    >
                      <SwiperSlide>
                        {" "}
                        <Image
                          className="po-re"
                          src="/img/slider-in-one.png"
                          alt="img"
                          width={167}
                          height={179}
                        />
                        <div className="box-featured">
                          <h6 className="text-white sub-heading-regular">
                            Swadesh Orchard Valley
                          </h6>
                          <p className="text-ofwhite peragraph-regular">
                            By Swadesh Developers
                          </p>
                          <h5 className="text-white sub-heading-bold">
                            ₹53.03 L - 68.0 L
                          </h5>
                        </div>{" "}
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <Image
                          className="po-re"
                          src="/img/slider-in-two.png"
                          alt="img"
                          width={167}
                          height={179}
                        />
                        <div className="box-featured">
                          <h6 className="text-white sub-heading-regular">
                            Swadesh Orchard Valley
                          </h6>
                          <p className="text-ofwhite peragraph-regular">
                            By Swadesh Developers
                          </p>
                          <h5 className="text-white sub-heading-bold">
                            ₹53.03 L - 68.0 L
                          </h5>
                        </div>{" "}
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <Image
                          className="po-re"
                          src="/img/slider-in-three.png"
                          alt="img"
                          width={167}
                          height={179}
                        />
                        <div className="box-featured">
                          <h6 className="text-white sub-heading-regular">
                            Swadesh Orchard Valley
                          </h6>
                          <p className="text-ofwhite peragraph-regular">
                            By Swadesh Developers
                          </p>
                          <h5 className="text-white sub-heading-bold">
                            ₹53.03 L - 68.0 L
                          </h5>
                        </div>{" "}
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <Image
                          className="po-re"
                          src="/img/slider-in-one.png"
                          alt="img"
                          width={167}
                          height={179}
                        />
                        <div className="box-featured">
                          <h6 className="text-white sub-heading-regular">
                            Swadesh Orchard Valley
                          </h6>
                          <p className="text-ofwhite peragraph-regular">
                            By Swadesh Developers
                          </p>
                          <h5 className="text-white sub-heading-bold">
                            ₹53.03 L - 68.0 L
                          </h5>
                        </div>{" "}
                      </SwiperSlide>
                    </Swiper>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="nav-profile1"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab1"
                    tabindex="0"
                  >
                    ...
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="outer-slider text-black">
                <div className="box d-flex text-black g-20">
                  <Image
                    src="/img/demo-img.jpg"
                    alt="img"
                    width={96}
                    height={96}
                  />
                  <div className="inner-box">
                    <h3 className="heading-h3">Agrawal Construction</h3>

                    <div className="d-flex justify-content-between">
                      <div className="col">
                        <h4 className="small-sub-heading">2013</h4>{" "}
                        <p className="frea-p">Year Estd.</p>
                      </div>
                      <div className="col">
                        <h4 className="small-sub-heading">2013</h4>{" "}
                        <p className="frea-p">Year Estd.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="frea-p mt-2">
                  Agrawal Construction is prominent Best Construction Company in
                  Bhopal It completed 30+ project including flats
                </p>
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-home-tab2"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home2"
                      type="button"
                      role="tab"
                      aria-controls="nav-home2"
                      aria-selected="true"
                    >
                      Sage Milestone
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab2"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile2"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile2"
                      aria-selected="false"
                    >
                      Sage Golden
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home2"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab2"
                    tabindex="0"
                  >
                    <Swiper
                      className="text-black mt-3"
                      modules={[Navigation, Pagination]}
                      spaceBetween={0}
                      slidesPerView={2}
                      loop={true}

                      // pagination={{ clickable: true }}
                    >
                      <SwiperSlide>
                        {" "}
                        <Image
                          className="po-re"
                          src="/img/slider-in-one.png"
                          alt="img"
                          width={167}
                          height={179}
                        />
                        <div className="box-featured">
                          <h6 className="text-white sub-heading-regular">
                            Swadesh Orchard Valley
                          </h6>
                          <p className="text-ofwhite peragraph-regular">
                            By Swadesh Developers
                          </p>
                          <h5 className="text-white sub-heading-bold">
                            ₹53.03 L - 68.0 L
                          </h5>
                        </div>{" "}
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <Image
                          className="po-re"
                          src="/img/slider-in-two.png"
                          alt="img"
                          width={167}
                          height={179}
                        />
                        <div className="box-featured">
                          <h6 className="text-white sub-heading-regular">
                            Swadesh Orchard Valley
                          </h6>
                          <p className="text-ofwhite peragraph-regular">
                            By Swadesh Developers
                          </p>
                          <h5 className="text-white sub-heading-bold">
                            ₹53.03 L - 68.0 L
                          </h5>
                        </div>{" "}
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <Image
                          className="po-re"
                          src="/img/slider-in-three.png"
                          alt="img"
                          width={167}
                          height={179}
                        />
                        <div className="box-featured">
                          <h6 className="text-white sub-heading-regular">
                            Swadesh Orchard Valley
                          </h6>
                          <p className="text-ofwhite peragraph-regular">
                            By Swadesh Developers
                          </p>
                          <h5 className="text-white sub-heading-bold">
                            ₹53.03 L - 68.0 L
                          </h5>
                        </div>{" "}
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <Image
                          className="po-re"
                          src="/img/slider-in-one.png"
                          alt="img"
                          width={167}
                          height={179}
                        />
                        <div className="box-featured">
                          <h6 className="text-white sub-heading-regular">
                            Swadesh Orchard Valley
                          </h6>
                          <p className="text-ofwhite peragraph-regular">
                            By Swadesh Developers
                          </p>
                          <h5 className="text-white sub-heading-bold">
                            ₹53.03 L - 68.0 L
                          </h5>
                        </div>{" "}
                      </SwiperSlide>
                    </Swiper>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="nav-profile2"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab2"
                    tabindex="0"
                  >
                    ...
                  </div>
                </div>
              </div>
            </SwiperSlide>



            <SwiperSlide>
              <div className="outer-slider text-black">
                <div className="box d-flex text-black g-20">
                  <Image
                    src="/img/demo-img.jpg"
                    alt="img"
                    width={96}
                    height={96}
                  />
                  <div className="inner-box">
                    <h3 className="heading-h3">Agrawal Construction</h3>

                    <div className="d-flex justify-content-between">
                      <div className="col">
                        <h4 className="small-sub-heading">2013</h4>{" "}
                        <p className="frea-p">Year Estd.</p>
                      </div>
                      <div className="col">
                        <h4 className="small-sub-heading">2013</h4>{" "}
                        <p className="frea-p">Year Estd.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="frea-p mt-2">
                  Agrawal Construction is prominent Best Construction Company in
                  Bhopal It completed 30+ project including flats
                </p>
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      class="nav-link active"
                      id="nav-home-tab3"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home3"
                      type="button"
                      role="tab"
                      aria-controls="nav-home3"
                      aria-selected="true"
                    >
                      Sage Milestone
                    </button>
                    <button
                      class="nav-link"
                      id="nav-profile-tab3"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile3"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile3"
                      aria-selected="false"
                    >
                      Sage Golden
                    </button>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="nav-home3"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab3"
                    tabindex="0"
                  >
                    <Swiper
                      className="text-black mt-3"
                      modules={[Navigation, Pagination]}
                      spaceBetween={0}
                      slidesPerView={2}
                      loop={true}

                      // pagination={{ clickable: true }}
                    >
                      <SwiperSlide>
                        {" "}
                        <Image
                          className="po-re"
                          src="/img/slider-in-one.png"
                          alt="img"
                          width={167}
                          height={179}
                        />
                        <div className="box-featured">
                          <h6 className="text-white sub-heading-regular">
                            Swadesh Orchard Valley
                          </h6>
                          <p className="text-ofwhite peragraph-regular">
                            By Swadesh Developers
                          </p>
                          <h5 className="text-white sub-heading-bold">
                            ₹53.03 L - 68.0 L
                          </h5>
                        </div>{" "}
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <Image
                          className="po-re"
                          src="/img/slider-in-two.png"
                          alt="img"
                          width={167}
                          height={179}
                        />
                        <div className="box-featured">
                          <h6 className="text-white sub-heading-regular">
                            Swadesh Orchard Valley
                          </h6>
                          <p className="text-ofwhite peragraph-regular">
                            By Swadesh Developers
                          </p>
                          <h5 className="text-white sub-heading-bold">
                            ₹53.03 L - 68.0 L
                          </h5>
                        </div>{" "}
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <Image
                          className="po-re"
                          src="/img/slider-in-three.png"
                          alt="img"
                          width={167}
                          height={179}
                        />
                        <div className="box-featured">
                          <h6 className="text-white sub-heading-regular">
                            Swadesh Orchard Valley
                          </h6>
                          <p className="text-ofwhite peragraph-regular">
                            By Swadesh Developers
                          </p>
                          <h5 className="text-white sub-heading-bold">
                            ₹53.03 L - 68.0 L
                          </h5>
                        </div>{" "}
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <Image
                          className="po-re"
                          src="/img/slider-in-one.png"
                          alt="img"
                          width={167}
                          height={179}
                        />
                        <div className="box-featured">
                          <h6 className="text-white sub-heading-regular">
                            Swadesh Orchard Valley
                          </h6>
                          <p className="text-ofwhite peragraph-regular">
                            By Swadesh Developers
                          </p>
                          <h5 className="text-white sub-heading-bold">
                            ₹53.03 L - 68.0 L
                          </h5>
                        </div>{" "}
                      </SwiperSlide>
                    </Swiper>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-profile3"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab3"
                    tabindex="0"
                  >
                    ...
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

export default BuyFeatured;
