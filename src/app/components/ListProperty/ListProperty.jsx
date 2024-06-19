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


const ListProperty = () => {
  const [selected, setSelected] = useState("residential");
  const [getrent, setRent] = useState("rent");

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
                      <p className="text-white">
                        New to Ohogar? Let’s get you started
                      </p>
                      <p className="text-white text-end">
                        Existing User?
                        <br /> Login Here
                      </p>
                    </div>

                    <Form>
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

                      <div className="d-flex g-20">
                        <Form.Group
                          className="mb-3 w-100"
                          controlId="exampleForm.ControlInput1"
                        >
                          <PhoneInput
                            country={"in"}
                            value={phone}
                            onChange={handlePhoneChange}
                            inputStyle={{ width: "100%" }}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3 w-100"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control type="Name" placeholder="Name" />
                        </Form.Group>
                      </div>

                      <Button className="w-100" variant="primary" type="submit">
                        Next, add address & Price
                      </Button>
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
    <span>Give a missed call to 9999999999 to get help with your property listing</span>
    </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ListProperty;
