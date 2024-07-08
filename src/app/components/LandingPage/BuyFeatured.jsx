"use client"; // <===== REQUIRED

import React from "react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { usePathname } from 'next/navigation';
import Link from "next/link";


const BuyFeatured = () => {

  const location = usePathname();

  const baseUrl = location === '/' ? 'buy' : location;
  console.log(location,baseUrl)

  return (
    <>
      <section className="buy-slider" id="featured">
        <div className="container">
          <div className="row mb-md-4 align-items-center" data-aos="fade-up" data-aos-duration="1000">
            <div className="col-md-10 col-10">
              <h2 className="heading-xl">
                Featured <b>Developers</b>
              </h2>
              <p className="paragraph">
                Prominent developers in <b>Bhopal</b>
              </p>
            </div>
            <div className="col-md-2 col-2">
              <div className="d-flex justify-content-end arrow-slider">
                <Image
                  className="pointer swiper-button-prev5 me-2"
                  src="/img/left-arrow.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <Image
                  className="pointer swiper-button-next5"
                  src="/img/right-arrow.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </div>
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
            loop={false}
            breakpoints={{
              0: { slidesPerView: 1 },
              400: { slidesPerView: 1 },
              865: { slidesPerView: 2 },
              1000: { slidesPerView: 3 },
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                          <Link className="text-white" href={`${baseUrl}/${slide.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="outer-slider text-black">
                  <div className="box d-flex text-black g-20">
                    <Image
                      src={slide.imageSrc}
                      alt="img"
                      width={96}
                      height={96}
                    />
                    <div className="inner-box">
                      <h3 className="heading-h3">{slide.title}</h3>
                      <div className="d-flex justify-content-between">
                        {slide.details.map((detail, i) => (
                          <div className="col" key={i}>
                            <h4 className="small-sub-heading">{detail.year}</h4>
                            <p className="frea-p">{detail.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="frea-p mt-2">{slide.description}</p>
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      {slide.tabs.map((tab, i) => (
                        <button
                          className={`nav-link ${i === 0 ? 'active' : ''}`}
                          id={`nav-${tab.id}-tab`}
                          data-bs-toggle="tab"
                          data-bs-target={`#nav-${tab.id}`}
                          type="button"
                          role="tab"
                          aria-controls={`nav-${tab.id}`}
                          aria-selected={i === 0}
                          key={i}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    {slide.tabs.map((tab, i) => (
                      <div
                        className={`tab-pane fade ${i === 0 ? 'show active' : ''}`}
                        id={`nav-${tab.id}`}
                        role="tabpanel"
                        aria-labelledby={`nav-${tab.id}-tab`}
                        tabindex="0"
                        key={i}
                      >
                        <Swiper
                          className="text-black mt-3"
                          modules={[Navigation, Pagination]}
                          spaceBetween={0}
                          slidesPerView={2}
                          loop={true}
                        >
                          {tab.innerSlides.map((innerSlide, j) => (
                            <SwiperSlide key={j}>
                              <Image
                                className="po-re"
                                src={innerSlide.imageSrc}
                                alt="img"
                                width={167}
                                height={179}
                              />
                              <div className="box-featured">
                                <h6 className="text-white sub-heading-regular">
                                  {innerSlide.title}
                                </h6>
                                <p className="text-ofwhite peragraph-regular">
                                  {innerSlide.subtitle}
                                </p>
                                <h5 className="text-white sub-heading-bold">
                                  {innerSlide.price}
                                </h5>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    ))}
                  </div>
                </div>
                </Link>
              </SwiperSlide>
            ))}

<SwiperSlide>
                <div className="outer-slider text-black h-100">
                  <div className="box d-flex text-black g-20">
                   
                    <div className="inner-box">
                      <h3 className="heading-h3">View More</h3>
                     
                    </div>
                  </div>
                  <p className="frea-p mt-2">View all</p>
            

                </div>
              </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

const slidesData = [
  {
    imageSrc: "/img/demo-img.jpg",
    title: "Agrawal Construction",
    details: [
      { year: "2013", label: "Year Estd." },
      { year: "2013", label: "Year Estd." },
    ],
    description: "Agrawal Construction is prominent Best Construction Company in Bhopal. It completed 30+ projects including flats.",
    tabs: [
      {
        id: "Active1",
        label: "Active",
        innerSlides: [
          { imageSrc: "/img/slider-in-one.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-two.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-three.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-one.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
        ],
      },
      {
        id: "Ongoing1",
        label: "Ongoing",
        innerSlides: [
          { imageSrc: "/img/slider-in-one.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-two.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
        ],
      },
      {
        id: "Upcoming1",
        label: "Upcoming",
        innerSlides: [
          { imageSrc: "/img/slider-in-one.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-two.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
        ],
      },
    ],
  },


  {
    imageSrc: "/img/demo-img.jpg",
    title: "Agrawal Construction",
    details: [
      { year: "2013", label: "Year Estd." },
      { year: "2013", label: "Year Estd." },
    ],
    description: "Agrawal Construction is prominent Best Construction Company in Bhopal. It completed 30+ projects including flats.",
    tabs: [
      {
        id: "Active",
        label: "Active",
        innerSlides: [
          { imageSrc: "/img/slider-in-one.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-two.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-three.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-one.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
        ],
      },
      {
        id: "Ongoing",
        label: "Ongoing",
        innerSlides: [
          { imageSrc: "/img/slider-in-one.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-two.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
        ],
      },
      {
        id: "Upcoming",
        label: "Upcoming",
        innerSlides: [
          { imageSrc: "/img/slider-in-one.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-two.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
        ],
      },
    ],
  },

  {
    imageSrc: "/img/demo-img.jpg",
    title: "Agrawal Construction",
    details: [
      { year: "2013", label: "Year Estd." },
      { year: "2013", label: "Year Estd." },
    ],
    description: "Agrawal Construction is prominent Best Construction Company in Bhopal. It completed 30+ projects including flats.",
    tabs: [
      {
        id: "Active2",
        label: "Active",
        innerSlides: [
          { imageSrc: "/img/slider-in-one.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-two.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-three.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-one.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
        ],
      },
      {
        id: "Ongoing2",
        label: "Ongoing",
        innerSlides: [
          { imageSrc: "/img/slider-in-one.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-two.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
        ],
      },
      {
        id: "Upcoming2",
        label: "Upcoming",
        innerSlides: [
          { imageSrc: "/img/slider-in-one.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-two.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
        ],
      },
    ],
  },

  
  {
    imageSrc: "/img/demo-img.jpg",
    title: "Agrawal Construction",
    details: [
      { year: "2013", label: "Year Estd." },
      { year: "2013", label: "Year Estd." },
    ],
    description: "Agrawal Construction is prominent Best Construction Company in Bhopal. It completed 30+ projects including flats.",
    tabs: [
      {
        id: "Active4",
        label: "Active",
        innerSlides: [
          { imageSrc: "/img/slider-in-one.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-two.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-three.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-one.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
        ],
      },
      {
        id: "Ongoing4",
        label: "Ongoing",
        innerSlides: [
          { imageSrc: "/img/slider-in-one.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-two.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
        ],
      },
      {
        id: "Upcoming4",
        label: "Upcoming",
        innerSlides: [
          { imageSrc: "/img/slider-in-one.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
          { imageSrc: "/img/slider-in-two.png", title: "Swadesh Orchard Valley", subtitle: "By Swadesh Developers", price: "₹53.03 L - 68.0 L" },
        ],
      },
    ],
  },
  // Add more slides as needed
];

export default BuyFeatured;
