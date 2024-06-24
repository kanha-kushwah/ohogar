"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Image from "next/image";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./../../components/ListDetails/List.css";
import Link from "next/link";

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

  return (
    <div>
      <section id="list-page-single">
        <div className="container">
          <div className="row md-pt-4 pt-4"></div>
        </div>
      </section>

      <section id="form-details">
        <div className="container">
          <div className="custom-h d-flex g-20">
            <div className="col-3 bg-detils">
            <Link href="/list-property/propertydeatails">
            <p>Go Back</p></Link>
              <h4>Post your property</h4> 
              <p className="p-samll">Sell or rent your property</p>
              <ProgressBar now={60} />
            </div>

            <div className="col bg-detils">
              <h2>Add Price Details</h2>

              <div className="type">
                
                <Form
                  className="radio-customs mt-md-4 mt-3"
                  onSubmit={handleSubmit}
                >
       

                  <Form.Group controlId="monthlyrent">
                    <Form.Label>Monthly Rent </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Monthly Rent"
                    />
                  </Form.Group>

                  <Form.Group controlId="date">
                    <Form.Label>Available Form</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Enter locality"
                    />
                  </Form.Group>

                  <Form.Group controlId="furnishedType">
                    <Form.Label>Furnished Type</Form.Label>

                    <div className="d-flex">
                      <Form.Check
                        type="radio"
                        id="fullyfurnished"
                        label={<span>Fully Furnished</span>}
                        value="fullyfurnished"
                        {...register("furnishedType", { required: true })}
                        onChange={handleFurnishedChange}
                        checked={furnishedType === "fullyfurnished"}
                        className={furnishedType === "fullyfurnished" ? "active" : ""}
                      />
                      <Form.Check
                        type="radio"
                        id="semifurnished"
                        label={<span>Semi Furnished</span>}
                        value="semifurnished"
                        {...register("furnishedType", { required: true })}
                        onChange={handleFurnishedChange}
                        checked={furnishedType === "semifurnished"}
                        className={furnishedType === "semifurnished" ? "active" : ""}
                      />
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
                    </div>
                  </Form.Group>


<Link href={"/list-property/projectdetails"}>
                  <Button
                    className="start-btn w-100 btn btn-primary"
                    variant="primary"
                    type="submit"
                    style={{ marginTop: "150px" }}
                  >
                    Next, add price details
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
