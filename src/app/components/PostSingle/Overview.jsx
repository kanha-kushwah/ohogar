import Image from "next/image";
import React from "react";

export const Overview = () => {
  const details = [
    {
      label: "Project Size",
      value: "696 sq.ft.",
      image: "/img/icons/download.svg",
    },
    {
      label: "Project Size",
      value: "896 sq.ft.",
      image: "/img/icons/download.svg",
    },
    {
      label: "Launch Date",
      value: "Apr, 2013.",
      image: "/img/icons/download.svg",
    },
    {
      label: "Avg. Price",
      value: "  5.46 K/sq.ft",
      image: "/img/icons/download.svg",
    },
    {
      label: "Possession Status",
      value: "Ready to Move",
      image: "/img/icons/download.svg",
    },
    {
      label: "Configuration",
      value: "2 BHK Apartment",
      image: "/img/icons/download.svg",
    },
    {
      label: "Rera Id",
      value: "P-BPL-17-1396",
      image: "/img/icons/download.svg",
    },
  ];

  return (
    <section id="around-this-project">
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 pt-0">
        <h6 className="big-heading text-black"> Madhuram Height Overview</h6>

        <button className="download-btn">
          {" "}
          <Image
            className="me-2"
            src={"/img/icons/download.svg"}
            width={16}
            height={16}
            alt="download"
          />{" "}
          Download Brochure
        </button>
      </div>

      <div className=" d-flex align-items-center justify-content-between mt-md-4 mt-4 pe-5 flex-wrap">
        {details.map((detail, index) => (
          <div key={index} className="col-4 mb-4 d-flex align-items-center">
            <Image
              className="me-2"
              src={detail.image}
              width={16}
              height={16}
              alt={detail.label.toLowerCase()}
            />
            <div className="inner-ov-box">
              <p className="common-black-60 p-samll-m mb-0">{detail.label}</p>
              <p className="p-heading common-black mb-0">{detail.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex align-items-center justify-content-center g-20 mt-3">
        <button className="bt-single-one">
          {" "}
          <span className="me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-share"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
            </svg>
          </span>
          Share
        </button>
        <button className="bt-single-one">
          <span className="me-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-suit-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
            </svg>
          </span>
          Save
        </button>
        <button className="bt-single-two">Ask For Details</button>
      </div>
    </section>
  );
};
