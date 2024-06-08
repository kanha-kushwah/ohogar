import React from 'react'
import Link from 'next/link'


import Header from '../components/Header/Header'
const page = () => {
  return (
<>
<Header/>

<section>
    <div className="container ">
        <div className="row align-items-center justify-content-center banner-buy rent-banner">
            <div className="col-md-7">
               <h1 className='text-white'>Properties for rent in Bhopal</h1>
                 
                 <div className="nav-box">
                    <ul className='p-0 d-flex'>  
                        <li>  <Link href="/">Buy</Link></li>
                        <li> <Link href="rent">Rent</Link> </li>
                        <li> <Link href="commercial">Commercial</Link> </li>
                        <li> <Link href="lands">Lands</Link> </li>

                    </ul>
                 </div>
                 <div className="serch-box d-flex">
                        <button>select city</button>
                        <button className='search-btn'>Search</button>

                    </div>

                    <div className="box-ex text-center">
                        <span>Are you an Owner?<u> Post property for free</u></span>
                    </div>
            </div>
        </div>
    </div>
</section>

</>
  )
}

export default page