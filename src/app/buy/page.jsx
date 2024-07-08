"use client";
import Link from "next/link";
import BuySlide from "../components/LandingPage/BuySlide";
import Header from "../components/Header/Header";
import BuyFeatured from "../components/LandingPage/BuyFeatured";
import BuyProperties from "../components/LandingPage/BuyProperties";
import BuyCollection from "../components/LandingPage/BuyCollection";
import BuyFive from "../components/LandingPage/BuyFive";
import Footer from "../components/Footer/Footer";
import Buy from "../components/pages/Buy";



const page = () => {

  return (
    <>
      <Header />
      <Buy/>
      <BuySlide />
      <BuyFeatured />
      <BuyProperties />
      <BuyCollection />
      <BuyFive />
      <BuyProperties />
      <BuyFeatured />
      <Footer />
    </>
  );
};

export default page;
