'use client'

import React from 'react'
import Link from 'next/link'
import BuySlide from '../components/BuySlide/BuySlide'
import Header from '../components/Header/Header'
import BuyFeatured from '../components/BuyFeatured/BuyFeatured'
import BuyProperties from '../components/BuyProperties/BuyProperties'


const page = () => {


    return (
        <>
            <Header />

            <section>
                <div className="container ">
                    <div className="row align-items-center justify-content-center banner-buy buy-banner">
                        <div className="col-md-7">
                            <h1 className='text-white heding-xxl mt-5'>Trusted Place to Find a Home</h1>

                            <div className="nav-box mt-md-4">
                                <ul className='p-0 d-flex'>
                                    <li > <Link className="active" href="/">Buy</Link></li>
                                    <li> <Link href="rent">Rent</Link> </li>
                                    <li> <Link  href="commercial">Commercial</Link> </li>
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
                                <span>Are you an Owner?<u> <b>Post property for free </b></u> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BuySlide />
            <BuyFeatured/>
            <BuyProperties/>
        </>
    )
}

export default page