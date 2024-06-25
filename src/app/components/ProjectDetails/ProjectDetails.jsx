"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./../../components/ListDetails/List.css";
import Link from "next/link";

const ProjectDetails = () => {
  const [images, setImages] = useState([]);
  const [broucher, setBroucher] = useState([]);
  const [tour, setTour] = useState([]);
  const [furnishedType, setFurnishedType] = useState("none");
  const [pdfs, setPdfs] = useState([]);

  const {
    register,
    handleSubmit, // Required to handle form submission
    formState: { errors },
  } = useForm();

  // Function to handle tour addition
  const handleAddtour = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newTour = URL.createObjectURL(file);
      setTour([...tour, newTour]);
    }
  };

  // Function to handle image addition
  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setImages([...images, newImage]);
    }
  };

  // Function to handle Broucher addition
  const handleAddBroucher = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newBroucher = URL.createObjectURL(file);
      setBroucher([...broucher, newBroucher]);
    }
  };

  // Function to handle PDF addition
  const handleAddPdf = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newPdf = URL.createObjectURL(file);
      setPdfs([...pdfs, newPdf]);
    }
  };

  const handleRemovePdf = (pdfToRemove) => {
    setPdfs(pdfs.filter((pdf) => pdf !== pdfToRemove));
  };

  // Function to handle tour removal
  const handleRemoveTour = (imageToRemove) => {
    setTour(tour.filter((image) => image !== imageToRemove));
  };

  // Function to handle Broucher removal
  const handleRemoveBroucher = (imageToRemove) => {
    setBroucher(broucher.filter((broucher) => broucher !== imageToRemove));
  };

  // Function to handle image removal
  const handleRemoveImage = (imageToRemove) => {
    setImages(images.filter((image) => image !== imageToRemove));
  };

  const handleFurnishedChange = (event) => {
    setFurnishedType(event.target.value);
  };

  const onSubmit = (data) => {
    console.log(data); // This will log the form data upon submission
    // Here you can add your form submission logic
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
              <Link href="/list-property/pricedetails">
                <p>Go Back</p>
              </Link>
              <h4>Post your property</h4>
              <p className="p-samll">Sell or rent your property</p>
              <ProgressBar now={60} />
            </div>

            <div className="col bg-detils">
              <h2>Add Price Details</h2>

              <div className="type mt-md-4 mt-4">
                <div>
                  <p className="mb-0">Property Type</p>
                  <div className="project">
                    {images.map((image, index) => (
                      <div key={index} style={{ position: "relative" }}>
                        <Image
                          src={image}
                          alt={`Cover ${index}`}
                          width={120}
                          height={120}
                        />
                        <button
                          className="btn-project"
                          onClick={() => handleRemoveImage(image)}
                        >
                          {" "}
                          X
                        </button>
                      </div>
                    ))}

                    <label className="pointer d-flex align-items-center text-center box-inner-project">
                      <b>+</b>
                      <p>Add Cover Images</p>
                      <input
                        className="d-none"
                        type="file"
                        accept="image/*"
                        onChange={handleAddImage}
                      />
                    </label>
                  </div>
                </div>

                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group
                    className="mt-md-4 mt-4"
                    controlId="furnishedType"
                  >
                    <Form.Label>Near Popular Localities</Form.Label>

                    <div className="d-flex">
                      <Form.Check
                        type="radio"
                        id="School"
                        label={<span>School</span>}
                        value="School"
                        {...register("School")}
                        onChange={handleFurnishedChange}
                        checked={furnishedType === "School"}
                        className={furnishedType === "School" ? "active" : ""}
                      />
                      <Form.Check
                        type="radio"
                        id="Hospital"
                        label={<span>Hospital</span>}
                        value="Hospital"
                        {...register("furnishedType")}
                        onChange={handleFurnishedChange}
                        checked={furnishedType === "Hospital"}
                        className={furnishedType === "Hospital" ? "active" : ""}
                      />
                      <Form.Check
                        type="radio"
                        id="itservices"
                        label={<span>IT Services</span>}
                        value="itservices"
                        {...register("itservices")}
                        onChange={handleFurnishedChange}
                        checked={furnishedType === "itservices"}
                        className={
                          furnishedType === "itservices" ? "active" : ""
                        }
                      />
                      <Form.Check
                        type="radio"
                        id="other"
                        label={<span>Other</span>}
                        value="other"
                        {...register("other")}
                        onChange={handleFurnishedChange}
                        checked={furnishedType === "other"}
                        className={furnishedType === "other" ? "active" : ""}
                      />
                    </div>
                  </Form.Group>

                  <p className="mt-md-4 mt-4">Overview</p>
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="formSize">
                        <Form.Label>Size</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter size"
                          {...register("size", { required: true })}
                        />
                        {errors.size && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formProjectSize">
                        <Form.Label>Project Size</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter project size"
                          {...register("projectSize", { required: true })}
                        />
                        {errors.projectSize && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formLaunchDate">
                        <Form.Label>Launch Date</Form.Label>
                        <Form.Control
                          type="date"
                          {...register("launchDate", { required: true })}
                        />
                        {errors.launchDate && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formAvgPrice">
                        <Form.Label>Avg. Price</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Enter average price"
                          {...register("avgPrice", { required: true })}
                        />
                        {errors.avgPrice && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="formPossessionStatus">
                        <Form.Label>Possession Status</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter possession status"
                          {...register("possessionStatus", { required: true })}
                        />
                        {errors.possessionStatus && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formConfiguration">
                        <Form.Label>Configuration</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter configuration"
                          {...register("configuration", { required: true })}
                        />
                        {errors.configuration && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formReraId">
                        <Form.Label>Rera Id</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Rera Id"
                          {...register("reraId", { required: true })}
                        />
                        {errors.reraId && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>About Us</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        {...register("aboutUs", { required: true })}
                      />
                      {errors.aboutUs && <p>This field is required</p>}
                    </Form.Group>
                  </Row>

                  <p>Height Price & Floor Plan</p>
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="formReraId">
                        <Form.Label>Floor</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="2 BHK"
                          {...register("floor", { required: true })}
                        />
                        {errors.floor && <p>This field is required</p>}
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="formReraId">
                        <Form.Label>Height</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="696 Sq. Ft."
                          {...register("height", { required: true })}
                        />
                        {errors.height && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formReraId">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="₹ 68.04 Lakhs"
                          {...register("price", { required: true })}
                        />
                        {errors.price && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                  </Row>

                  <div>
                    <p className="mb-0">Property Broucher</p>
                    <div className="project">
                      {broucher.map((broucher, index) => (
                        <div key={index} style={{ position: "relative" }}>
                          <Image
                            src={broucher}
                            alt={`Broucher ${index}`}
                            width={120}
                            height={120}
                          />
                          <button
                            className="btn-project"
                            onClick={() => handleRemoveBroucher(broucher)}
                          >
                            {" "}
                            X
                          </button>
                        </div>
                      ))}

                      <label className="pointer d-flex align-items-center text-center box-inner-project">
                        <b>+</b>
                        <p>Add Broucher Images</p>
                        <input
                          className="d-none"
                          type="file"
                          accept="image/*"
                          onChange={handleAddBroucher}
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">Project Tour : Photos & Videos</p>
                    <div className="project">
                      {tour.map((tour, index) => (
                        <div key={index} style={{ position: "relative" }}>
                          <video autoPlay width={120} height={120}>
                            <source src={tour} />
                          </video>

                          <button
                            className="btn-project"
                            onClick={() => handleRemoveTour(tour)}
                          >
                            {" "}
                            X
                          </button>
                        </div>
                      ))}
                      <label className="pointer d-flex align-items-center text-center box-inner-project">
                        <b>+</b>
                        <p>Add Photos & Videos</p>
                        <input
                          className="d-none"
                          type="file"
                          accept="video/*"
                          onChange={handleAddtour}
                        />
                      </label>
                    </div>
                  </div>

                  <Row>
                    <Col>
                      <Form.Group controlId="formChildrensPlayArea">
                        <Form.Check
                          type="checkbox"
                          label="Childrens Play Area"
                          {...register("childrensPlayArea")}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="formCarParking">
                        <Form.Check
                          type="checkbox"
                          label="Car Parking"
                          {...register("carParking")}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="formYogaMeditationArea">
                        <Form.Check
                          type="checkbox"
                          label="Yoga/Meditation Area"
                          {...register("yogaMeditationArea")}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="formStreetLighting">
                        <Form.Check
                          type="checkbox"
                          label="Street Lighting"
                          {...register("streetLighting")}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="formLandscapingAndTrees">
                        <Form.Check
                          type="checkbox"
                          label="Landscaping & Tree…"
                          {...register("landscapingAndTrees")}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="formCCTV">
                        <Form.Check
                          type="checkbox"
                          label="CCTV"
                          {...register("cctv")}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group controlId="form24x7Security">
                        <Form.Check
                          type="checkbox"
                          label="24x7 Security"
                          {...register("security24x7")}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="formPowerBackup">
                        <Form.Check
                          type="checkbox"
                          label="Power Backup"
                          {...register("powerBackup")}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <p>Project Tour : Specifications</p>
                  <p>Floor & Counter</p>
                  <Row>
                    <Col>
                      <Form.Group controlId="formLivingDining">
                        <Form.Control
                          type="text"
                          placeholder="Living/Dining"
                          {...register("livingDining", { required: true })}
                        />
                        {errors.livingDining && <p>This field is required</p>}
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="formMasterBedroom">
                        <Form.Control
                          type="text"
                          placeholder="Master Bedroom"
                          {...register("masterBedroom", { required: true })}
                        />
                        {errors.masterBedroom && <p>This field is required</p>}
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="formOtherBedroom">
                        <Form.Control
                          type="text"
                          placeholder="Other Bedroom"
                          {...register("otherBedroom", { required: true })}
                        />
                        {errors.otherBedroom && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Group controlId="formKitchen">
                        <Form.Control
                          type="text"
                          placeholder="Kitchen"
                          {...register("kitchen", { required: true })}
                        />
                        {errors.kitchen && <p>This field is required</p>}
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="formToilets">
                        <Form.Control
                          type="text"
                          placeholder="Toilets"
                          {...register("toilets", { required: true })}
                        />
                        {errors.toilets && <p>This field is required</p>}
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="formBalcony">
                        <Form.Control
                          type="text"
                          placeholder="Balcony"
                          {...register("balcony", { required: true })}
                        />
                        {errors.balcony && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                  </Row>

                  <div>
                    <p className="mb-0">Upload PDF</p>
                    <div className="project" style={{}}>
                      {pdfs.map((pdf, index) => (
                        <div key={index} style={{ position: "relative" }}>
                          <a href={pdf} target="_blank" rel="noopener noreferrer">
                            PDF {index + 1}
                          </a>
                          <button
                            className="btn-project"
                            onClick={() => handleRemovePdf(pdf)}
                          >
                            {" "}
                            X
                          </button>
                        </div>
                      ))}

                      <label className="pointer d-flex align-items-center text-center box-inner-project">
                        <b>+</b>
                        <p>Upload PDF</p>
                        <input
                          className="d-none"
                          type="file"
                          accept="application/pdf"
                          onChange={handleAddPdf}
                        />
                      </label>
                    </div>
                  </div>

                  <Button className="start-btn w-100 btn btn-primary"
                    variant="primary"
                    type="submit"
                    style={{ marginTop: "150px" }}>Post Property</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
