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
import Reviews from './reviews';
import Brochure from './Brochure';
import Viewmap from './Viewmap';
import CompareProperties from './CompareProperties';
import DeveloperInfo from './DeveloperInfo';
import Qanda from './Qanda';
import Faqs from './Faqs';
import Projects from './Projects';
import Quicklinks from './Quicklinks';
import Housingnews from './Housingnews';
import Disclaimer from './Disclaimer';

const PostSingle = ({ post }) => {
  const [isSticky, setIsSticky] = useState(false);
  const formattedTitle = post.toLowerCase().replace(/\s+/g, '-');

console.log("formate",formattedTitle)
  return (
    <section>
      <HeaderSingle />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <p className='bedcrums'>Home /buy/{formattedTitle}</p>
          </div>
          <div className="bedcrums-right col-md-6 col-12 text-md-end text-start">
            <p className='withe-f7'>Last updated: May 29, 2024 <span className='pointer ms-2'><Image
                  src="/img/icons/info.svg"
                  width={14}
                  height={14}
                  alt="info"
                /></span></p>
          </div>
          <div className="col-md-6 col-12">
            <h3 className='single-title'>Madhuram Height</h3>
            <h6 className='mb-4'>By <span className='dark-blue text-uppercase'> Madhuban Group</span></h6>

            <span className='rating'> <span className='pointer me-1'><Image
                  src="/img/icons/star.svg"
                  width={14}
                  height={14}
                  alt="info"
                /></span> 4.2</span> <button className='rate-review'>Write a Review</button>
          </div>
          <div className="col-md-6 col-12 text-md-end text-start mt-md-0 mt-4">
            <h3>₹38.0 L <span className='sp-size'>₹5.46 K/sq.ft</span></h3>
            <p className='dark-blue'>EMI starts at ₹20.12 K</p>
            <button className='contact-dev'><span className='me-2'><Image
                  src="/img/icons/phone.svg"
                  width={14}
                  height={14}
                  alt="info"
                /></span> Contact Developer</button>
          </div>

          <div className="col-md-12 col-12 mt-4 mt-md-5">
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
            <div className="inner-items-sin mb-3 text-md-center text-start">
              <h6 className="">2 BHK Apartment</h6>
              <p className="m-0">Configuration</p>
            </div>
            <div className="inner-items-sin mb-3 text-md-center text-start">
              <h6 className="">Ready to Move</h6>
              <p className="m-0">Possession Status</p>
            </div>
            <div className="inner-items-sin mb-3 text-md-center text-start">
              <h6 className="">₹5.46 K/sq.ft</h6>
              <p className="m-0">Avg. Price</p>
            </div>
            <div className="inner-items-sin mb-3 text-md-center text-start">
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

        <div className="row mb-md-4 mb-4 flex-reverse">
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

            {/* <div className="single-page-box mt-md-3 mt-3">
            <Reviews/>
            </div> */}

            <div className="single-page-box mt-md-3 mt-3">
            <Brochure/>
            </div>

            <div className="single-page-box mt-md-3 mt-3">
            <Viewmap/>
            </div>

            <div className="single-page-box mt-md-3 mt-3">
            <CompareProperties/>
            </div>

            <div className="single-page-box mt-md-3 mt-3">
            <DeveloperInfo/>
            </div>

            <div className="single-page-box mt-md-3 mt-3">
            <Qanda/>
            </div>

            <div className="single-page-box mt-md-3 mt-3">
            <Faqs/>
            </div>

            <div className="single-page-box mt-md-3 mt-3">
            <Projects/>
            </div>
            
            <div className="single-page-box mt-md-3 mt-3">
            <Housingnews/>
            </div>

            <div className="single-page-box mt-md-3 mt-3">
            <Quicklinks/>
            </div>

            <div className=" mt-md-3 mt-3">
            <Disclaimer/>
            </div>

          </div>

          <div className="col-md-4 mb-md-0 mb-4">
            <StickyBox offsetTop={90} offsetBottom={10}>
              <div className="single-page-box ">
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
