import React from "react";
import Image from "next/image";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";

export const PropertyLocation = () => {
  const locations = [
    {
      name: "Renaissance Divine Public …",
      distance: "100m",
      coordinates: [23.259933, 77.412615],
      type: "School"
    },
    {
      name: "Another School",
      distance: "200m",
      coordinates: [23.259933, 77.422615],
      type: "School"
    },
    {
      name: "Yet Another School",
      distance: "300m",
      coordinates: [23.269933, 77.432615],
      type: "School"
    }
  ];

  return (
    <section id="highlights">
      <div className="d-flex g-20">
        <Image src="/img/icons/viewmap.svg" width="50" height="50" alt="map" />

        <div className="inner-box">
          <h6 className="p-heading off-black">Property Location</h6>
          <h5 className="sub-heading">Kolar Road, Bhopal</h5>
        </div>
      </div>

      <div className="bg-map-slider p-4 text-black mt-md-2 mt-2">
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          navigation={{
            prevEl: ".swiper-button-prev1",
            nextEl: ".swiper-button-next1",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            865: {
              slidesPerView: 2,
            },
          }}
          loop={true}
        >
          {locations.map((location, index) => (
            <SwiperSlide key={index}>
              <div className="d-flex g-20 align-items-center box-with-border">
                <Image
                  src="/img/icons/viewmap.svg"
                  width="50"
                  height="50"
                  alt="map"
                />
                <div className="max-box">
                  <p className="common-black-60 p-samll-m mb-0">
                    <b>{location.type}</b>
                  </p>
                  <p className="p-heading common-black mb-0">
                    {location.name}
                  </p>
                </div>
                <span className="box-map-blue">{location.distance}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

<div className="last-map-sec text-center border-top mt-4 pt-4 pb-2">
  <p className="mb-0 blue sub-heading">View more on Maps</p>
</div>
  
    </section>
  );
};
