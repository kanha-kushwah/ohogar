import React , { useState } from 'react'
import Link from 'next/link'
import Filter from '../Dailoge/Filter';
import useToken from '@/config/useToken';

const Buy = () => {
const token = useToken();

    const [showFilter, setShowFilter] = useState(false);

    const handleShowfilter = () => setShowFilter(true);
    const handleClosefilter = () => setShowFilter(false);
  return (
    <div>
         <Filter show={showFilter} handleClose={handleClosefilter} />

            <section className="banner-buy buy-banner row align-items-center justify-content-center">
        <div className="container ">
          <div className="row align-items-center justify-content-center ">
            <div className="col-md-6">
              <h1 className="text-white heding-xxl mt-5">
                Trusted Place to Find a Home
              </h1>

              <div className="nav-box mt-md-4">
                <ul className="p-0 d-flex">
                  <li>
                    {" "}
                    <Link className="active" href="/">
                      Buy
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="rent">Rent</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="commercial">Commercial</Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link href="lands">Lands</Link>{" "}
                  </li>
                </ul>
              </div>
              <div className="serch-box d-flex">
                <select
                  class="form-select border-0"
                  aria-label="Default select example"
                >
                  <option selected>Select City</option>
                  <option value="1">Indore</option>
                  <option value="2">Bhopal</option>
                </select>
                <button className="search-btn">Search</button>
                {token ?  <button className="search-btn ms-3" onClick={handleShowfilter}>Filter</button> : ''}
               
              </div>

              <div className="box-ex text-center">
                <span>
                  Are you an Owner?
                  <u>
                    {" "}
                    <b>Post property for free </b>
                  </u>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Buy
