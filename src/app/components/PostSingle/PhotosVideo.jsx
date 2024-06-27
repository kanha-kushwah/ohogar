import React, { useState } from "react";
import Image from "next/image";


export const TourPhotosvideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const media = [
    {
      type: "image",
      url: "/img/single/sample.png",
    },
    {
      type: "image",
      url: "/img/single/sample.png",
    },
    {
      type: "image",
      url: "/img/single/sample.png",
    },
    {
      type: "image",
      url: "/img/single/sample.png",
    },
    {
      type: "image",
      url: "/img/single/sample.png",
    },
    {
      type: "image",
      url: "/img/single/sample.png",
    },
    {
      type: "image",
      url: "/img/single/sample.png",
    },
    {
      type: "image",
      url: "/img/single/sample.png",
    },
  ];

  const images = media.filter((item) => item.type === "image").map((item) => item.url);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };
  return (
    <section id="tour-this-project">
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 pt-0">
        <h6 className="big-heading text-black">
          Tour Madhuram Height: Photos & Video
        </h6>
      </div>

      <p className="black-off p-heading line-h-26 pt-3">
        Project Tour & Photos
      </p>

      <div className="property-media-section">
        <div className="media-display d-flex flex-wrap">
          {images.slice(0, 3).map((image, index) => (
            <div key={index} className="me-2 mb-2">
              <Image
                src={image}
                width={136}
                height={136}
                alt={`image-${index}`}
                onClick={() => openLightbox(index)}
                className="cursor-pointer"
              />
            </div>
          ))}
          {images.length > 3 && (
            <div className="position-relative me-2 mb-2 cursor-pointer" onClick={() => openLightbox(3)}>
              <Image
                src={images[3]}
                width={136}
                height={136}
                alt={`image-3`}
                style={{ opacity: 0.5 }}
              />
              <div className="overlay position-absolute top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                <span className="text-white">+{images.length - 4}</span>
              </div>
            </div>
          )}
        </div>

        {/* {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
            enableZoom={false}
            reactModalProps={{ shouldCloseOnOverlayClick: true }}
          />
        )} */}
      </div>
    </section>
  );
};
