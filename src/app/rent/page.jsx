"use client"
import React from 'react'
import Link from 'next/link'


import Header from '../../app/components/Header/Header'
import BuySlide from '../../app/components/LandingPage/BuySlide'
import Dailloge from '../components/Dailoge/Dailloge'
import BuyFeatured from '../components/LandingPage/BuyFeatured'
import BuyProperties from '../components/LandingPage/BuyProperties'
import BuyCollection from '../components/LandingPage/BuyCollection'
import BuyFive from '../components/LandingPage/BuyFive'
import Footer from '../components/Footer/Footer'
const page = () => {
  return (
<>
<Header/>

<section className='row align-items-center justify-content-center banner-buy rent-banner'>
    <div className="container ">
        <div className="row align-items-center justify-content-center ">
            <div className="col-md-6">
               <h1 className='text-white heding-xxl mt-5'>Properties for rent in Bhopal</h1>
                 
                 <div className="nav-box mt-md-4">
                    <ul className='p-0 d-flex'>  
                        <li>  <Link href="/">Buy</Link></li>
                        <li> <Link  className='active' href="rent">Rent</Link> </li>
                        <li> <Link href="commercial">Commercial</Link> </li>
                        <li> <Link href="lands">Lands</Link> </li>

                    </ul>
                 </div>
                 <div className="serch-box d-flex">
                                <select class="form-select border-0" aria-label="Default select example">
                                    <option selected>Select City</option>
                                    <option value="1">Indore</option>
                                    <option value="2">Bhopal</option>
                                </select>
                                <button className='search-btn'>Search</button>

                            </div>

                    <div className="box-ex text-center">
                        <span>Are you an Owner?<u> Post property for free</u></span>
                    </div>
            </div>
        </div>
    </div>
</section>

<Dailloge/>
      <BuySlide />
      <BuyFeatured/>
      <BuyProperties />
      <BuyCollection />
      <BuyFive />
      <BuyProperties />
      <BuyFeatured />
      <Footer/>
</>
  )
}

export default page