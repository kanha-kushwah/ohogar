import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Button } from "react-bootstrap";

const Projects = () => {
  const slidesData = {
    ready: [
      {
        price: "38.0 L",
        title: "Madhuram Height",
        type: "2 BHK Flat",
        location: "Hinotiya Alam, Bhopal",
        image: "/img/demo1.jpg",
      },
      {
        price: "38.0 L",
        title: "Madhuram Height",
        type: "2 BHK Flat",
        location: "Hinotiya Alam, Bhopal",
        image: "/img/demo2.png",
      },
      {
        price: "38.0 L",
        title: "Madhuram Height",
        type: "2 BHK Flat",
        location: "Hinotiya Alam, Bhopal",
        image: "/img/demo3.png",
      },
      
    ],
  };

  return (
    <div>
      <section id="projects">
        <div className="d-flex justify-content-between align-items-center border-bottom pb-2 pt-0">
          <h6 className="big-heading text-black">Projects By Madhuban Group near Kolar Road</h6>
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
              slidesPerView: 3,
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

export default Projects;
