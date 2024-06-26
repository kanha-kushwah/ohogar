import React from 'react'
import Image from "next/image";

const amenities = [
    {
      id: "childrensPlayArea",
      title: "Childrens Play Area",
      imageUrl: "/img/icons/children.svg",
    },
    {
      id: "carParking",
      title: "Car Parking",
      imageUrl: "/img/icons/carparking.svg",
    },
    {
      id: "yogaMeditationArea",
      title: "Yoga/Meditation Area",
      imageUrl: "/img/icons/yoga.svg",
    },
    {
      id: "streetLighting",
      title: "Street Lighting",
      imageUrl: "/img/icons/Street.svg",
    },
    {
      id: "landscapingAndTrees",
      title: "Landscaping & Trees",
      imageUrl: "/img/icons/tree.svg",
    },
    {
      id: "cctv",
      title: "CCTV",
      imageUrl: "/img/icons/cctv.svg",
    },
    {
      id: "security24x7",
      title: "24x7 Security",
      imageUrl: "/img/icons/Security.svg",
    },
    {
      id: "powerBackup",
      title: "Power Backup",
      imageUrl: "/img/icons/Power.svg",
    },
  ]

  
export const Amenities = () => {
  return (
    <section id="amenities">
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 pt-0">
        <h6 className="big-heading text-black">Madhuram Height Amenities</h6>
      </div>
  
      <div className="amenities-section mt-md-4 mt-4">
        <div className="d-flex flex-wrap g-20 ">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-item me-2  text-center">
              <Image
                src={amenity.imageUrl}
                width={27}
                height={27}
                alt={amenity.title}
                className="cursor-pointer"
              />
              <p className="p-samll-m mt-2">{amenity.title}</p>
            </div>
          ))}
        </div>
      </div>
  </section>
  )
}
