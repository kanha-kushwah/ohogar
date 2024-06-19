import React from "react";
import Image from "next/image";

const Sidebar = ({ handleShow }) => {
  return (
    <section id="sldierbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            {" "}
            <div className="d-flex g-20 align-items-center">
              {" "}
              <div>
                <Image src="/img/user.svg" width={64} height={64} alt="av" />
              </div>
              <div>
                <h4>Hello ✋ </h4>
                <p className="mb-1 ps-4 check-be position-relative">
                  Easy Contact with sellers
                </p>
                <p className="mb-0 ps-4 check-be position-relative">
                  Personalized experience
                </p>
              </div>
            </div>{" "}
          </div>
          <div className="col-md-4">
            {" "}
            <button onClick={handleShow}>Login</button>{" "}
          </div>

          <div className="col-12 mt-md-4 sidebar-box">
            <div className="col">
              <h4>My Activity</h4>
            </div>
            <div className="d-flex g-20 mt-4">
              <div className="col">
                <div className="text-center box-active active">
                  <Image
                    className="mb-2"
                    src="/img/house.svg"
                    alt="img"
                    height={24}
                    width={24}
                  />
                  <p className="mb-2">Contacted Properties</p>
                  <span>0</span>
                </div>
              </div>
              <div className="col">
                <div className="text-center box-active ">
                  <Image
                    className="mb-2"
                    src="/img/house.svg"
                    alt="img"
                    height={24}
                    width={24}
                  />
                  <p className="mb-2">Contacted Properties</p>
                  <span>0</span>
                </div>
              </div>
              <div className="col">
                <div className="text-center box-active ">
                  <Image
                    className="mb-2"
                    src="/img/house.svg"
                    alt="img"
                    height={24}
                    width={24}
                  />
                  <p className="mb-2">Contacted Properties</p>
                  <span>0</span>
                </div>
              </div>
              <div className="col">
                <div className="text-center box-active">
                  <Image
                    className="mb-2"
                    src="/img/house.svg"
                    alt="img"
                    height={24}
                    width={24}
                  />
                  <p className="mb-2">Contacted Properties</p>
                  <span>0</span>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-4 box-active text-center">
              <div className="text-center">
                <Image
                  src="/img/recent.png"
                  height="134"
                  width="143"
                  alt="mg"
                />
              </div>
              <button className="btn-login">Login to view your Recent Activity </button>
            </div>

            <div className="col-md-12 mt-4">
              <p className="mb-0">
                {" "}
                <Image
                  className="mb-2 me-2"
                  src="/img/house.svg"
                  alt="img"
                  height={24}
                  width={24}
                />{" "}
                Zero Brokerage Properties
              </p>
              <p className="mb-0">
                {" "}
                <Image
                  className="mb-2 me-2"
                  src="/img/house.svg"
                  alt="img"
                  height={24}
                  width={24}
                />
                My Transactions
              </p>
            </div>
          </div>

          <div className="col-12 mt-md-4 sidebar-box">
            <div className="col-md-12">
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      <Image
                        className="mb-2 me-2"
                        src="/img/house.svg"
                        alt="img"
                        height={24}
                        width={24}
                      />{" "}
                      Quick Links
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                      <strong>This is the first items accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. Its also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      <Image
                        className="mb-2 me-2"
                        src="/img/house.svg"
                        alt="img"
                        height={24}
                        width={24}
                      />{" "}
                      Ohoger Edge
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                      <strong>This is the second items accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. Its also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      <Image
                        className="mb-2 me-2"
                        src="/img/house.svg"
                        alt="img"
                        height={24}
                        width={24}
                      />{" "}
                      Services
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                      <strong>This is the third items accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. Its also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-1">
                {" "}
                <Image
                  className="mb-2 me-2"
                  src="/img/house.svg"
                  alt="img"
                  height={24}
                  width={24}
                />
                My Transactions
              </p>

              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-four"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-four"
                    >
                      <Image
                        className="mb-2 me-2"
                        src="/img/house.svg"
                        alt="img"
                        height={24}
                        width={24}
                      />{" "}
                      Quick Links
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-four"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <strong>This is the first items accordion body.</strong>{" "}
                      It is shown by default, until the collapse plugin adds the
                      appropriate classes that we use to style each element.
                      These classes control the overall appearance, as well as
                      the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default
                      variables. Its also worth noting that just about any HTML
                      can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-0">
                {" "}
                <Image
                  className="mb-2 me-2"
                  src="/img/house.svg"
                  alt="img"
                  height={24}
                  width={24}
                />
                Report a Fraud
              </p>
            </div>
          </div>

          <div className="col-md-12 mt-4 px-0">
            <div className="d-flex g-20 justify-content-between align-items-center">
              <p className="box-help">Visit Help Center</p>
              <p className="box-help">Preferred Language</p>
            </div>
          </div>

          <div className="col-md-12 mt-4 sidebar-box">
            <div className="d-flex g-20 justify-content-between align-items-center">
              <div className="in-box">
                <p> Download Housing App</p>
                <div className="d-flex g-20 ">
                  <Image
                    src="/img/paly-store.png"
                    alt="img"
                    height={46}
                    width={155}
                  />
                  <Image
                    src="/img/app-store.png"
                    alt="img"
                    height={46}
                    width={155}
                  />
                </div>
              </div>

              <Image src="/img/Qr.svg" alt="img" height={83} width={83} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
