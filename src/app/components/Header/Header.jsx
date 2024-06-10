import React from "react";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <section id="header">
        <div className="container">
          <div className="row py-md-4 px-md-5">
            <div className="col-md-4 col-4">
              <div className="logo">
                <Link href="/">
                  <Image src="img/Logo.svg" alt="Logo" width={103}
                    height={32} />
                </Link>{" "}
              </div>
            </div>
            <div className="col-md-8 col-8 align-self-end">
              <div className="d-flex justify-content-end heder-gap align-items-center">
                <div className="col-select">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Ahmedabad, Gujarat</option>
                    <option value="1">Indore, Madhya Pardesh</option>
                  </select>
                </div>
                <div className="col-select">
                  <button className="smart-phone"><span className="new">New</span>  <img src="img/smarthone-icon.svg" /> Download App</button>
                </div>
                <div className="col-select">
            
                  <button className="smart-phone"><span className="free">Free</span> + Post Property</button>
                </div>
                <div className="col-select">
               <div className="d-flex smart-phone bo-ra-full align-items-center justify-content-center">
                <img className="me-2" src="img/menu.svg" alt="menu" />
                <img src="img/user.svg" alt="user" />

               </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
