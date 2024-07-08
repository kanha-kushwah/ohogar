"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./ListProperty.module.css";
import PhoneInput from "react-phone-input-2";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap-icons/font/bootstrap-icons.css";
import Teastimonial from "../Teastimonial/Teastimonial";
import Footer from "../Footer/Footer";
import useToken from "@/config/useToken";


const ListProperty = () => {
  const [selected, setSelected] = useState("residential");
  const [getrent, setRent] = useState("rent");
  const token = useToken();

  const handleChangerent = (event) => {
    setRent(event.target.name);
  };

  const handleChange = (event) => {
    setSelected(event.target.name);
  };

  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  return (
    <>
      <section id="list-page">
        <div className="container">
          <div className="row md-pt-4 pt-4">
            <div className="col-12 mb-md-4  mb-4">
              <Link href="/">
                <Image
                  src="/img/list/logo-white.svg"
                  alt="Logo"
                  width={103}
                  height={32}
                />
              </Link>{" "}
              <h2 className="text-white heding-xxl pt-md-4 pt-4">
                Upload your property in 3 simple steps
              </h2>
            </div>

            <div className="col-md-5 col-12 ">
              <ul className="list-pro p-0">
                <li className="text-decoration-none ">
                  {" "}
                  <Image
                    className="me-1"
                    src="/img/list/tick.svg"
                    alt="check"
                    width={32}
                    height={32}
                  />{" "}
                  Add Basic Details
                </li>
                <li>
                  {" "}
                  <Image
                    className="me-1"
                    src="/img/list/tick.svg"
                    alt="check"
                    width={32}
                    height={32}
                  />
                  Add Property Details
                </li>
                <li>
                  {" "}
                  <Image
                    className="me-1"
                    src="/img/list/tick.svg"
                    alt="check"
                    width={32}
                    height={32}
                  />
                  Add Photos
                </li>
              </ul>

              <Image
                className="fix-img-view"
                src="/img/list/List-addon.png"
                alt="Logo"
                width={422}
                height={360}
              />
            </div>

            <div className="col-md-7 col-12">
              <div className="box-list">
                <Tabs
                  defaultActiveKey="owner"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="owner" title="OWNER">
                    <div className="d-flex justify-content-between">
                      <p className="text-white mb-0">
                        New to Ohogar? Let’s get you started
                      </p>
                      <p className="text-white text-end mb-0">
                        Existing User?
                        <br /> Login Here
                      </p>
                    </div>

                    <Form className="form-style">
                      <p className="text-white">Property Type</p>
                      <div className="mb-3 d-flex check-off g-20">
                        <Form.Check
                          type="checkbox"
                          id="residential"
                          name="residential"
                          label="Residential"
                          checked={selected === "residential"}
                          onChange={handleChange}
                          className={
                            selected === "residential" ? styles.highlight : ""
                          }
                        />

                        <Form.Check
                          type="checkbox"
                          id="commercial"
                          name="commercial"
                          label="Commercial"
                          checked={selected === "commercial"}
                          onChange={handleChange}
                          className={
                            selected === "commercial" ? styles.highlight : ""
                          }
                        />
                      </div>

                      <p className="text-white">Looking to</p>
                      <div className="mb-3 d-flex check-off g-20">
                        <Form.Check
                          type="checkbox"
                          id="rent"
                          name="rent"
                          label="Rent"
                          checked={getrent === "rent"}
                          onChange={handleChangerent}
                          className={getrent === "rent" ? styles.highlight : ""}
                        />

                        <Form.Check
                          type="checkbox"
                          id="sell"
                          name="sell"
                          label="Sell"
                          checked={getrent === "sell"}
                          onChange={handleChangerent}
                          className={getrent === "sell" ? styles.highlight : ""}
                        />
                      </div>

                      {token ? <Link href={"/list-property/propertydeatails"}>
                        <Button className="w-100 mt-4" type="submit">
                          Next, add address & Price
                        </Button>
                      </Link> : <Button className="w-100 mt-4" type="submit">
                          Next, add address & Price
                        </Button> }
                     



                    </Form>
                  </Tab>
                  <Tab eventKey="broker" title="BROKER/BUILDER">
                    Tab content for Profile
                  </Tab>
                </Tabs>
              </div>
            </div>

            <div className="col-12 text-center">
              <div className="box-inner-list">
                <span>
                  Give a missed call to 9999999999 to get help with your
                  property listing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-md-5 mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="heading-xl-small">How it works</h2>
            </div>
            <div className="d-block d-md-flex g-20 mt-md-4 mt-4">
              <div className="col-md-4 col-12 mb-3 mb-md-0">
                <div className="ls-box d-flex">
                  <Image
                    src="/img/list/step1.png"
                    alt="step1"
                    width={"80"}
                    height={"80"}
                  />
                  <div>
                    <h3 className="heading-xl-small">
                      Upload your property in 3 quick steps
                    </h3>
                    <p>
                      Tell us a few basic details about your property, add
                      pricing & upload photos
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12 mb-3 mb-md-0">
                {" "}
                <div className="ls-box d-flex">
                  <Image
                    src="/img/list/step2.png"
                    alt="step1"
                    width={"80"}
                    height={"80"}
                  />
                  <div>
                    <h3>Property reaches to 10 lacs+ tenants & buyers</h3>
                    <p>As the largest property search website of India.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12">
                {" "}
                <div className="ls-box d-flex">
                  <Image
                    src="/img/list/step3.png"
                    alt="step1"
                    width={"80"}
                    height={"80"}
                  />
                  <div>
                    <h3>Start getting enquiries</h3>
                    <p>
                      You will start getting enquiries from interested
                      buyers/tenants as soon as your property goes live on
                      OHOGAR
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-md-5 mt-5 mb-5" id="post-accordian">
        <div className="container">
          <div className="row">
            <h2 className="heading-xl-small">Frequently asked questions</h2>
            <div className="col-md-12 col-12 mt-md-4 mt-2">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    How to post a property on OHOGAR
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How to post a property on OHOGAR
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How to post a property on OHOGAR
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    How to post a property on OHOGAR
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Accordion.Body>
                </Accordion.Item>{" "}
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    How to post a property on OHOGAR
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Accordion.Body>
                </Accordion.Item>{" "}
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    How to post a property on OHOGAR
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-mb-5 mb-5">
        <div className="container">
          <div className="row">
            <h2 className="heading-xl-small">Testimonials</h2>
            <p className="paragraph">
              This is what other sellers have to say...
            </p>
            <div className="col-md-12 col-12 mt-md-4 mt-4"></div>
          </div>
        </div>
        <div className="container-fluid">
          <Teastimonial />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ListProperty;
