"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Image from "next/image";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./../../components/ListDetails/List.css";
import Link from "next/link";
import Header from "../Header/Header";

const ListDetails = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [furnishedType, setFurnishedType] = useState("none");
  const [shareListing, setShareListing] = useState(false);
  const [landmarkArea, setLandmarkArea] = useState("");
  const [locality, setLocality] = useState("");

  const {
    register,
    formState: { errors },  
  } = useForm();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleFurnishedChange = (event) => {
    setFurnishedType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      landmarkArea,
      locality,
      selectedOption,
      furnishedType,
      shareListing,
    };
    console.log(formData);
  };
  const now = 66.33;
  return (
    <div>
      <section id="list-page-single">

        <Header/>
        <div className="container">
          <div className="row md-pt-4 pt-4"></div>
        </div>
      </section>

      <section id="form-details">
        <div className="container">
          <div className="custom-h d-flex g-20 flex-wrap">
          <div className="col-md-3 col-12 bg-detils">
              <Link href="/list-property/propertydeatails">
                <p className="list-button">
                  <i class="bi bi-chevron-left"></i> Go Back
                </p>
              </Link>
              <h4 className="list-bar-heading">Post your property </h4>
              <p className="p-samll list-pergraph">
                Sell or rent your property
              </p>

              <div className="d-flex align-items-center g-20 percent-fix">
                <ProgressBar variant="danger" className="w-100" now={now} />{" "}
                <span className="perc">{now}%</span>
              </div>

              <div className="status mt-md-4 mt-4">
                <ul>
                  
                  <div className="p-relative">
                    {/* <span className="compeleted">0</span> */}
                    <h3>Property Details</h3> <button>Completed</button>
                  </div>

                  <div className="p-relative pt-md-4 pt-4">
                     <h3  className="active">Price Details</h3>
                    <button>Completed</button>
                  </div>

                </ul>
              </div>
            </div>



            <div className="bg-detils right-side">
              <h2 className="list-bar-heading">Add Price Details</h2>

              <div className="type mt-md-5 mt-5">
                
                <Form
                  className="radio-customs mt-md-4 mt-3"
                  onSubmit={handleSubmit}
                >
       

                  <Form.Group controlId="monthlyrent">
                    {/* <Form.Label>Monthly Rent </Form.Label> */}
                    <Form.Control
                      className="mt-md-4 mt-4 form-inputs"
                      type="text"
                      placeholder="Monthly Rent"
                    />
                  </Form.Group>

                  <Form.Group controlId="date">
                    {/* <Form.Label>Available Form</Form.Label> */}
                    <Form.Control
                    className="mt-md-4 mt-4 form-inputs"
                      type="date"
                      placeholder="Enter locality"
                    />
                  </Form.Group>

                  <Form.Group controlId="furnishedType" className="mt-md-5 mt-5">
                    <Form.Label className="list-pergraph">Security Deposit</Form.Label>

                    <div className="style-radio-2 d-flex g-20">
                      <Form.Check
                        type="radio"
                        id="none"
                        label={<span>None</span>}
                        value="none"
                        {...register("furnishedType", { required: true })}
                        onChange={handleFurnishedChange}
                        checked={furnishedType === "none"}
                        className={furnishedType === "none" ? "active" : ""}
                      />
                      <Form.Check
                        type="radio"
                        id="onemonth"
                        label={<span>1 Month</span>}
                        value="onemonth"
                        {...register("furnishedType", { required: true })}
                        onChange={handleFurnishedChange}
                        checked={furnishedType === "onemonth"}
                        className={furnishedType === "onemonth" ? "active" : ""}
                      />
                      <Form.Check
                        type="radio"
                        id="twomonth"
                        label={<span>2 Month</span>}
                        value="twomonth"
                        {...register("furnishedType", { required: true })}
                        onChange={handleFurnishedChange}
                        checked={furnishedType === "twomonth"}
                        className={furnishedType === "twomonth" ? "active" : ""}
                      />
                    </div>
                  </Form.Group>


<Link href={"/list-property/projectdetails"}>
                  <Button
                    className="start-btn w-100 btn btn-primary"
                    variant="primary"
                    type="submit"
                    style={{ marginTop: "150px" }}
                  >
                   Post Property
                  </Button>
                  </Link>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ListDetails;
