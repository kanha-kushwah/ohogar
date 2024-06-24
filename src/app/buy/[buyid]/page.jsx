import React from "react";
import HeaderSingle from "@/app/components/Header/HeaderSingle";
import Footer from "@/app/components/Footer/Footer";
import Image from "next/image";
import SingleSlider from "@/app/components/SingleSlider/SingleSlider";

const page = ({params}) => {
  return (
    <div>
      {/* hello
      {params.buyid} */}
      <section>
      <HeaderSingle />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <p>Home / Bhopal / Kolar / Road Madhuram Height</p>
          </div>
          <div className="col-md-6 col-12  text-end">
            <p>Last updated: May 29, 2024</p>
          </div>
          <div className="col-md-6 col-12">
            <h3>Madhuram Height</h3>
            <h6>By Madhuban Group</h6>
            <span>4.2</span> <button>Write a Review</button>
          </div>
          <div className="col-md-6 col-12 text-end">
            <h3>Madhuram Height</h3>
            <h6>By Madhuban Group</h6>
            <button>Contact Developer</button>
          </div>

          <div className="col-md-12 col-12">
            <div class="container-grid">
              <div className="overlay-img big-image">
                <Image
                  src="/img/single/one.jpg"
                  width={876}
                  height={560}
                  alt="Big Image"
                />
              </div>
              <div className="overlay-img small-image">
                <Image
                  src="/img/single/two.jpg"
                  width={375}
                  height={247}
                  alt="Small Image 1"
                />
              </div>
              <div className="overlay-img small-image">
                <div className="box-count">
                  {" "}
                  <h2>
                    +<br />8 More
                  </h2>
                </div>
                <Image
                  src="/img/single/three.jpg"
                  width={375}
                  height={247}
                  alt="Small Image 2"
                />
              </div>
            </div>
          </div>

          <div className="col-md-12 my-md-4 d-flex align-items-center">
            <div className="col-md-3 col-12 text-center">
              <h6 className="">2 BHK Apartment</h6>
              <p className="m-0">Configuration</p>
            </div>
            <div className="col-md-3 col-12 text-center">
              <h6 className="">Ready to Move</h6>
              <p className="m-0">Possession Status</p>
            </div>
            <div className="col-md-3 col-12 text-center">
              <h6 className="">₹5.46 K/sq.ft</h6>
              <p className="m-0">Avg. Price</p>
            </div>
            <div className="col-md-3 col-12 text-center">
              <h6 className="m-0">696 sq.ft.</h6>
              <p className="m-0">(Builtup Area)</p>
              <h6>Size</h6>
            </div>
          </div>
        </div>

<div className="row">
    <SingleSlider/>
</div>

        <div className="row mb-md-4 mb-4">
          <div className="col-md-8">
            <div className="single-page-box-first">
              <h3>Why Madhuram Height?</h3>
              <p>
                Kolar Road is one of the attractive locations to own a home in
                Bhopal.
              </p>
            </div>


            <div className="single-page-box mt-md-3 mt-3">
              <h6>Property Location</h6>
              <h3>Kolar Road, Bhopal</h3>
            </div>

          </div>

          <div className="col-md-4">
            <div className="single-page-box">
              <p>Great choice! Most viewed project in this area</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
    </div>
  )
}

export default page
