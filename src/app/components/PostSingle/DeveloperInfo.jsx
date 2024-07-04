import Image from "next/image";
import React, { useState } from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DeveloperInfo = () => {
  const [activeTab, setActiveTab] = useState('ready-to-move');

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  const renderSlides = () => {
    // You can replace the below data with dynamic data as needed
    const slidesData = {
      'ready-to-move': [
        {
          price: '38.0 L',
          title: 'Madhuram Height',
          type: '2 BHK Flat',
          location: 'Hinotiya Alam, Bhopal',
          image: '/img/demo1.jpg',
        },
        {
          price: '38.0 L',
          title: 'Madhuram Height',
          type: '2 BHK Flat',
          location: 'Hinotiya Alam, Bhopal',
          image: '/img/demo2.png',
        },
        {
          price: '38.0 L',
          title: 'Madhuram Height',
          type: '2 BHK Flat',
          location: 'Hinotiya Alam, Bhopal',
          image: '/img/demo3.png',
        },

      ],
      'in-3-years': [
        {
          price: '45.0 L',
          title: 'Sunshine Residency',
          type: '3 BHK Flat',
          location: 'Arera Colony, Bhopal',
          image: '/img/demo1.jpg',
        },
        {
          price: '45.0 L',
          title: 'Sunshine Residency',
          type: '3 BHK Flat',
          location: 'Arera Colony, Bhopal',
          image: '/img/demo2.png',
        },{
          price: '45.0 L',
          title: 'Sunshine Residency',
          type: '3 BHK Flat',
          location: 'Arera Colony, Bhopal',
          image: '/img/demo3.png',
        },
      ],
      'beyond-3-years': [
        {
          price: '50.0 L',
          title: 'Green Valley',
          type: '4 BHK Flat',
          location: 'Kolar Road, Bhopal',
          image: '/img/demo1.jpg',
        },
        {
          price: '50.0 L',
          title: 'Green Valley',
          type: '4 BHK Flat',
          location: 'Kolar Road, Bhopal',
          image: '/img/demo2.png',
        },
        {
          price: '50.0 L',
          title: 'Green Valley',
          type: '4 BHK Flat',
          location: 'Kolar Road, Bhopal',
          image: '/img/demo3.png',
        },
       
      ],
    };

    return slidesData[activeTab].map((property, index) => (
      <SwiperSlide key={index} className="d-flex flex-column align-items-start text-black">
        <Image src={property.image} alt={property.title} width={500} height={300} style={{width:'100%', height:'100%'}} />
        <p>{property.price}</p>
        <p>{property.title}</p>
        <p>{property.type}</p>
        <p>{property.location}</p>
        <Button>Contact</Button>
      </SwiperSlide>
    ));
  };

  return (
    <section id="developer-information">
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 pt-0">
        <h6 className="big-heading text-black">
          Madhuram Height Developer Information
        </h6>
      </div>

      <div className="box-developer-outer pt-4">
        <div className="dealer-deatails d-flex g-20">
          <Image
            className="me-2"
            src={"/img/icons/thumb.jpg"}
            width={65}
            height={65}
            alt="thunder"
          />
          <div>
            <h3>Madhuban Group</h3>
            <div className="d-flex g-20">
              <p className="mb-0">
                <b>1984</b>
                <span>Established In</span>
              </p>

              <p className="mb-0">
                <b>6</b>
                <span>Total Projects</span>
              </p>
            </div>
          </div>
        </div>
        <p>
          Madhuban Group is a leading player in Bhopal real estate industry.
          Everyone dreams to have their own home & they help many of them to
          make their dreams come true. They build each home painstakingly, with
          focus on Quality, Useful detailing & ensure Value.
        </p>
      </div>

      <Container className="box-two-outer mt-4">
        <div className="d-flex justify-content-between">
          <div className="inner-dev">
            <p>Possession status:</p>
          </div>
          <div className="inner-dev">
            <Nav variant="tabs" activeKey={activeTab} onSelect={handleSelect}>
              <Nav.Item>
                <Nav.Link eventKey="ready-to-move">Ready to Move</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="in-3-years">In 3 years</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="beyond-3-years">Beyond 3 years</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div  className="text-right">
            <p>View All</p>
          </div>
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
        }}className="dev-slider-box mt-4">
          {renderSlides()}
        </Swiper>
      </Container>
    </section>
  );
};

export default DeveloperInfo;
