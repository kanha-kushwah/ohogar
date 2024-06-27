"use client";
import React, { useEffect, useRef, useState } from 'react';
import HeaderSingle from "../Header/HeaderSingle";
import Footer from "../Footer/Footer";
import Image from "next/image";
import SingleSlider from "../SingleSlider/SingleSlider";
import "./postsingle.css";
import StickyBox from "react-sticky-box";
import { Rightsidebar } from "./RightSidebar";
import { PropertyLocation } from "./PropertyLocation";
import { Overview } from "./Overview";
import { About } from "./About";
import { FloorPlan } from "./FloorPlan";
import { TourPhotosvideo } from './PhotosVideo';
import { Amenities } from './Amenities';
import { Specifications } from './Specifications';

const PostSingle = ({ post }) => {
  const [isSticky, setIsSticky] = useState(false);



  return (
    <section>
      <HeaderSingle />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <p>Home / Bhopal / Kolar / Road Madhuram Height / {post}</p>
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

          <div className="col-md-12 my-md-4 mt-md-4 mt-4 d-flex flex-wrap align-items-center justify-content-between">
            <div className="inner-items-sin mb-2 text-center">
              <h6 className="">2 BHK Apartment</h6>
              <p className="m-0">Configuration</p>
            </div>
            <div className="inner-items-sin mb-2 text-center">
              <h6 className="">Ready to Move</h6>
              <p className="m-0">Possession Status</p>
            </div>
            <div className="inner-items-sin mb-2 text-center">
              <h6 className="">₹5.46 K/sq.ft</h6>
              <p className="m-0">Avg. Price</p>
            </div>
            <div className="inner-items-sin mb-2 text-center">
              <h6 className="m-0">696 sq.ft.</h6>
              <p className="m-0">(Builtup Area)</p>
              <h6>Size</h6>
            </div>
          </div>
        </div>


      <StickyBox
      offsetTop={0}
      offsetBottom={20}
      className='stickysec'
    >
 <div >
            <SingleSlider />
            </div>
        </StickyBox>

        <div className="row mb-md-4 mb-4">
          <div className="col-md-8">
            <section id="overview"> 
             <div className="single-page-box-first" >
              <h3>Why Madhuram Height?</h3>
              <p>Kolar Road is one of the attractive locations to own a home inBhopal.</p>
            </div>
            </section>

            <div className="single-page-box mt-md-3 mt-3">
            <PropertyLocation/>
            </div>

            <div className="single-page-box mt-md-3 mt-3">
            <Overview/>
            </div>

            <div className="single-page-box mt-md-3 mt-3">
            <About/>
            </div>

            <div className="single-page-box mt-md-3 mt-3">
            <FloorPlan/>
            </div>

            <div className="single-page-box mt-md-3 mt-3">
            <TourPhotosvideo/>
            </div>

            <div className="single-page-box mt-md-3 mt-3">
            <Amenities/>
            </div>

            <div className="single-page-box mt-md-3 mt-3">
            <Specifications/>
            </div>

          </div>

          <div className="col-md-4">
            <StickyBox offsetTop={90} offsetBottom={10}>
              <div className="single-page-box">
              <Rightsidebar/>
              </div>
            </StickyBox>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default PostSingle;
