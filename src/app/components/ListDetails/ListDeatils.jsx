"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Image from "next/image";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./List.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "../Header/Header";

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
    router.push("/list-property/pricedetails");
  };
  const now = 33.3;
  return (
    <div>
      <section id="list-page-single">
        <Header/>
        <div className="container">
          <div className="row md-pt-4 pt-4"></div>
        </div>
      </section>

      <section id="form-details">
        <div className="container add-property-design">
          <div className="custom-h d-flex g-20 flex-wrap">
            <div className="col-md-3 col-12 bg-detils">
              <Link href="/list-property">
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
                    <h3 className="active">Property Details</h3> 
                    <button>Completed</button>
                  </div>
                  <div className="p-relative pt-md-4 pt-4">
                   <h3>Price Details</h3>
                    <button>In-Progress</button>
                  </div>
                </ul>
              </div>
            </div>

            <div className=" bg-detils right-side">
              <h2 className="list-bar-heading">Add Property Details</h2>

              <div className="type mt-md-5 mt-5">
                <p className="list-pergraph">Property Type</p>
                <Form
                  className="radio-customs  mt-md-2 mt-2"
                  onSubmit={handleSubmit}
                >
                  <Form.Group className="style-radio d-flex g-20">
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

                  <Form.Group className="mt-md-4 mt-4" controlId="landmarkArea">
                    <Form.Control
                      className="form-inputs"
                      type="text"
                      placeholder="Enter landmark area or nearby"
                      value={landmarkArea}
                      onChange={(e) => setLandmarkArea(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mt-md-4 mt-4" controlId="locality">
                    <Form.Control
                      className="form-inputs"
                      type="text"
                      placeholder="Enter locality"
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group
                    className="mt-md-4 mt-4"
                    controlId="furnishedType"
                  >
                    <p className="list-pergraph">Furnished Type</p>
                    <div className="style-radio-2 d-flex g-20">
                      <Form.Check
                        type="radio"
                        id="fullyfurnished"
                        label={<span>Fully Furnished</span>}
                        value="fullyfurnished"
                        {...register("furnishedType", { required: true })}
                        onChange={handleFurnishedChange}
                        checked={furnishedType === "fullyfurnished"}
                        className={
                          furnishedType === "fullyfurnished" ? "active" : ""
                        }
                      />
                      <Form.Check
                        type="radio"
                        id="semifurnished"
                        label={<span>Semi Furnished</span>}
                        value="semifurnished"
                        {...register("furnishedType", { required: true })}
                        onChange={handleFurnishedChange}
                        checked={furnishedType === "semifurnished"}
                        className={
                          furnishedType === "semifurnished" ? "active" : ""
                        }
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

                  <Form.Group className="mt-md-4 mt-4" controlId="shareListing">
                    <Form.Check
                      className="list-pergraph"
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
