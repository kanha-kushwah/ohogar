"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Image from "next/image";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./List.css";
import Link from "next/link";
import { useRouter } from "next/navigation";


const ListDetails = () => {
  const [selectedOption, setSelectedOption] = useState();
  const [furnishedType, setFurnishedType] = useState("none");
  const [shareListing, setShareListing] = useState(false);
  const [landmarkArea, setLandmarkArea] = useState("");
  const [locality, setLocality] = useState("");
  const router = useRouter();

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
    router.push('/list-property/pricedetails'); 
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
              <Link href="/list-property">
              <p>Go Back</p></Link>
              <h4>Post your property</h4>
              <p className="p-samll">Sell or rent your property</p>
              <ProgressBar now={60} />
            </div>

            <div className="col bg-detils">
              <h2>Add Property Details</h2>

              <div className="type">
                <p>Property Type</p>
                <Form
                  className="radio-customs mt-md-4 mt-3"
                  onSubmit={handleSubmit}
                >
                  <Form.Group className="d-flex">
                    <Form.Check
                      type="radio"
                      id="apartment"
                      label={
                        <>
                          <Image
                            src="/img/icons/apartment.svg"
                            alt="apartment"
                            width={40}
                            height={40}
                          />
                          <span>Apartment</span>
                        </>
                      }
                      value="apartment"
                      {...register("propertyType", { required: true })}
                      onChange={handleOptionChange}
                      checked={selectedOption === "apartment"}
                      className={selectedOption === "apartment" ? "active" : ""}
                    />
                    <Form.Check
                      type="radio"
                      id="independenthouse"
                      label={
                        <>
                          <Image
                            src="/img/icons/house.svg"
                            alt="independenthouse"
                            width={40}
                            height={40}
                          />
                          <span> Independent House</span>
                        </>
                      }
                      value="independenthouse"
                      {...register("propertyType", { required: true })}
                      onChange={handleOptionChange}
                      checked={selectedOption === "independenthouse"}
                      className={
                        selectedOption === "independenthouse" ? "active" : ""
                      }
                    />
                    <Form.Check
                      type="radio"
                      id="independentfloor"
                      label={
                        <>
                          <Image
                            src="/img/icons/home.svg"
                            alt="independentfloor"
                            width={40}
                            height={40}
                          />
                          <span>Independent Floor</span>
                        </>
                      }
                      value="independentfloor"
                      {...register("propertyType", { required: true })}
                      onChange={handleOptionChange}
                      checked={selectedOption === "independentfloor"}
                      className={
                        selectedOption === "independentfloor" ? "active" : ""
                      }
                    />
                    <Form.Check
                      type="radio"
                      id="villa"
                      label={
                        <>
                          <Image
                            src="/img/icons/villa.svg"
                            alt="villa"
                            width={40}
                            height={40}
                          />
                          <span>Villa</span>
                        </>
                      }
                      value="villa"
                      {...register("propertyType", { required: true })}
                      onChange={handleOptionChange}
                      checked={selectedOption === "villa"}
                      className={selectedOption === "villa" ? "active" : ""}
                    />
                  </Form.Group>

                  <Form.Group controlId="landmarkArea">
                    <Form.Label>Landmark Area/ Nearby</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter landmark area or nearby"
                      value={landmarkArea}
                      onChange={(e) => setLandmarkArea(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="locality">
                    <Form.Label>Locality</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter locality"
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
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

                  <Form.Group controlId="shareListing">
                    <Form.Check
                      type="checkbox"
                      label="Share listing information with agents"
                      checked={shareListing}
                      onChange={(e) => setShareListing(e.target.checked)}
                    />
                  </Form.Group>

              
                  <Button
                    className="start-btn w-100 btn btn-primary"
                    variant="primary"
                    type="submit"
                    style={{ marginTop: "50px" }}
                  >
                    Next, add price details
                  </Button>
             
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
