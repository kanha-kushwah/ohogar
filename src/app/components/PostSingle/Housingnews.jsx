import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Button } from "react-bootstrap";

const Housingnews = () => {
  const slidesData = {
    ready: [
      {
        price: "38.0 L",
        title: "Madhuram Height",
        type: "2 BHK Flat",
        location: "Hinotiya Alam, Bhopal",
        image: "/img/single/demo2.jpg",
      },
      {
        price: "38.0 L",
        title: "Madhuram Height",
        type: "2 BHK Flat",
        location: "Hinotiya Alam, Bhopal",
        image: "/img/single/demo2.jpg",
      },
      {
        price: "38.0 L",
        title: "Madhuram Height",
        type: "2 BHK Flat",
        location: "Hinotiya Alam, Bhopal",
        image: "/img/single/demo3.jpg",
      },
      
    ],
  };

  return (
    <div>
      <section id="housing-news">
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 pt-0">
          <h6 className="big-heading text-black">Housing News</h6>
        </div>
        <Swiper
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
              slidesPerView: 2.2,
            },
          }}
          className="dev-slider-box mt-4"
        >
          {slidesData.ready.map((property, index) => (
            <SwiperSlide
              key={index}
              className="d-flex flex-column align-items-start text-black"
            >
              <Image
                src={property.image}
                alt={property.title}
                width={500}
                height={300}
                style={{ width: "100%", height: "100%" }}
              />
              <p>{property.price}</p>
              <p>{property.title}</p>
              <p>{property.type}</p>
              <p>{property.location}</p>
              <Button>Contact</Button>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Housingnews;
