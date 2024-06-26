"use client";
import React, { useState, useEffect, useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const slidesContent = [
  "Overview",
  "Highlights",
  "Around This Project",
  "More About Project",
  "Floor Plan",
  "Tour This Project",
  "Amenities",
  "Specifications"
];

const SingleSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setActiveIndex(swiperRef.current.swiper.activeIndex);
    }
  };

  const handleScroll = () => {
    slidesContent.forEach((content, index) => {
      const section = document.getElementById(content.replace(/\s+/g, '-').toLowerCase());
      console.log(section)
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight) {
          setActiveIndex(index);
        }
      }
    });
  };

  const handleClick = (index) => {
    const content = slidesContent[index];
    const section = document.getElementById(content.replace(/\s+/g, '-').toLowerCase());
    console.log(section,index)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(activeIndex);
    }
  }, [activeIndex]);

  return (

    <div className="mt-md-4 mt-4 mb-md-3 mb-3">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={10}
        navigation={{
          prevEl: ".swiper-button-prev3",
          nextEl: ".swiper-button-next3",
        }}
        loop={false}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 7,
          },
        }}
        onSlideChange={handleSlideChange}
      >
        {slidesContent.map((content, index) => (
          <SwiperSlide
            key={index}
            className={activeIndex === index ? 'active-slide' : ''}
            onClick={() => handleClick(index)}
          >
            <h6 className="text-black text-center">
              {content}
            </h6>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
   
  );
};

export default SingleSlider;
