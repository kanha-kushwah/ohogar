import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <>
      <section id="header">
        <div className="container">
          <div className="row py-md-2">
            <div className="col-md-4 col-4">  
              <div className="logo">
                <a href="">
                  <Image src="img/Logo.svg" alt="Logo" width={103}
      height={32} />
                </a>{" "}
              </div>
            </div>
            <div className="col-md-8 col-8 align-self-end">
              <div className="d-flex justify-content-end heder-gap">
                <div className="col-select">
                  <button>Ahmedabad, Gujarat</button>
                </div>
                <div className="col-select">
                  <button>Download App</button>
                </div>
                <div className="col-select">
                  <button>+ Post Property</button>
                </div>
                <div className="col-select">
                  <button>menu</button>
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
