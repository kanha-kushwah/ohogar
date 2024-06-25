"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./../../components/ListDetails/List.css";
import Link from "next/link";
import Postproperty from "../Dailoge/Postproperty";
import SuceesPost from "../Dailoge/SuceesPost";

const ProjectDetails = () => {
  const [images, setImages] = useState([]);
  const [broucher, setBroucher] = useState([]);
  const [tour, setTour] = useState([]);
  const [furnishedType, setFurnishedType] = useState("none");
  const [pdfs, setPdfs] = useState([]);
  const [showPostProperty, setShowPostProperty] = useState(false);
  const [showPostSuceess, setShowPostSuceess] = useState(false);

  const handleShowProperty = () => setShowPostProperty(true);
  const handleCloseProperty = () => setShowPostProperty(false);

  const showPostSucees = () => setShowPostSuceess(true);
  const handleCloseSucees = () => setShowPostSuceess(false);

 
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
    handleShowProperty();
    console.log(data); 

  };
  const now = 100;
  return (
    <div>
      <section id="list-page-single">
        <div className="container">
          <div className="row md-pt-4 pt-4"></div>
        </div>
      </section>
      <Postproperty show={showPostProperty} handleClose={handleCloseProperty} />

      <section id="form-details">
        <div className="container">
          <div className="custom-h d-flex g-20">
          <div className="col-3 bg-detils">
              <Link href="/list-property/pricedetails">
                <p className="list-button">
                  <i class="bi bi-chevron-left"></i> Go Back
                </p>
              </Link>
              <h4 className="list-bar-heading">Post your property </h4>
              <p lassName="p-samll list-pergraph" >
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

                  <div className="p-relative pt-md-4 pt-4">
                     <h3  className="active">Project Details</h3>
                    <button>In-Progress</button>
                  </div>

                </ul>
              </div>
            </div>

            <div className="col bg-detils">
              <h2 className="list-bar-heading">Add Price Details</h2>

              <div className="type mt-md-4 mt-4">
                <div>
                  <p className="mb-0 list-pergraph">Property Type</p>
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
                    <Form.Label className="list-pergraph">Near Popular Localities</Form.Label>

                    <div className="style-radio-2 d-flex g-20">
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

                  <p className="mt-md-4 mt-4 list-pergraph">Overview</p>
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="formSize">
                        {/* <Form.Label>Size</Form.Label> */}
                        <Form.Control
                        className="form-inputs"
                          type="text"
                          placeholder="Enter size"
                          {...register("size", { required: true })}
                        />
                        {errors.size && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formProjectSize">
                        {/* <Form.Label>Project Size</Form.Label> */}
                        <Form.Control
                         className="form-inputs"
                          type="text"
                          placeholder="Enter project size"
                          {...register("projectSize", { required: true })}
                        />
                        {errors.projectSize && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formLaunchDate">
                        {/* <Form.Label>Launch Date</Form.Label> */}
                        <Form.Control
                         className="form-inputs"
                          type="date"
                          {...register("launchDate", { required: true })}
                        />
                        {errors.launchDate && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formAvgPrice">
                        {/* <Form.Label>Avg. Price</Form.Label> */}
                        <Form.Control
                         className="form-inputs"
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
                        {/* <Form.Label>Possession Status</Form.Label> */}
                        <Form.Control
                         className="form-inputs"
                          type="text"
                          placeholder="Enter possession status"
                          {...register("possessionStatus", { required: true })}
                        />
                        {errors.possessionStatus && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formConfiguration">
                        {/* <Form.Label>Configuration</Form.Label> */}
                        <Form.Control
                        className="form-inputs"
                          type="text"
                          placeholder="Enter configuration"
                          {...register("configuration", { required: true })}
                        />
                        {errors.configuration && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formReraId">
                        {/* <Form.Label>Rera Id</Form.Label> */}
                        <Form.Control
                        className="form-inputs"
                          type="text"
                          placeholder="Enter Rera Id"
                          {...register("reraId", { required: true })}
                        />
                        {errors.reraId && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                    <Col></Col>
                  </Row>

                  <Row className="mb-3">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="list-pergraph">About Us</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Write About Projects..."
                        rows={5}
                        {...register("aboutUs", { required: true })}
                      />
                      {errors.aboutUs && <p>This field is required</p>}
                    </Form.Group>
                  </Row>

                  <p className="list-pergraph">Height Price & Floor Plan</p>
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="formReraId">
                        {/* <Form.Label>Floor</Form.Label> */}
                        <Form.Control
                        className="form-inputs"
                          type="text"
                          placeholder="2 BHK"
                          {...register("floor", { required: true })}
                        />
                        {errors.floor && <p>This field is required</p>}
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group controlId="formReraId">
                        {/* <Form.Label>Height</Form.Label> */}
                        <Form.Control
                          className="form-inputs"
                          type="text"
                          placeholder="696 Sq. Ft."
                          {...register("height", { required: true })}
                        />
                        {errors.height && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="formReraId">
                        {/* <Form.Label>Price</Form.Label> */}
                        <Form.Control
                          className="form-inputs"
                          type="text"
                          placeholder="₹ 68.04 Lakhs"
                          {...register("price", { required: true })}
                        />
                        {errors.price && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                  </Row>

                  <div>
                    {/* <p className="mb-0">Property Broucher</p> */}
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
                    <p className="mb-0 list-pergraph mt-md-3 mt-3">Project Tour : Photos & Videos</p>
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

                  <Row className="mb-3 ">
                  <p className="mb-3 list-pergraph mt-md-3 mt-3">Project Tour : Amenities</p>
                    <Col>
                      <Form.Group className="last-flex" controlId="formChildrensPlayArea">
                        <Image src={"/img/icons/children.svg"} alt="icon" width={27} height={27} />
                        <Form.Check
                          type="checkbox"
                          label="Childrens Play Area"
                          {...register("childrensPlayArea")}
                        />

                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group  className="last-flex" controlId="formCarParking">
                      <Image src={"/img/icons/carparking.svg"} alt="icon" width={27} height={27} />
                        <Form.Check
                          type="checkbox"
                          label="Car Parking"
                          {...register("carParking")}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group  className="last-flex" controlId="formYogaMeditationArea">
                      <Image src={"/img/icons/yoga.svg"} alt="icon" width={27} height={27} />
                        <Form.Check
                          type="checkbox"
                          label="Yoga/Meditation Area"
                          {...register("yogaMeditationArea")}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group  className="last-flex" controlId="formStreetLighting">
                      <Image src={"/img/icons/Street.svg"} alt="icon" width={27} height={27} />
                        <Form.Check
                          type="checkbox"
                          label="Street Lighting"
                          {...register("streetLighting")}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group className="last-flex" controlId="formLandscapingAndTrees">
                      <Image src={"/img/icons/tree.svg"} alt="icon" width={27} height={27} />
                        <Form.Check
                          type="checkbox"
                          label="Landscaping & Tree…"
                          {...register("landscapingAndTrees")}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group className="last-flex" controlId="formCCTV">
                      <Image src={"/img/icons/cctv.svg"} alt="icon" width={27} height={27} />
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
                      <Form.Group  className="last-flex" controlId="form24x7Security">
                      <Image src={"/img/icons/Security.svg"} alt="icon" width={27} height={27} />
                        <Form.Check
                          type="checkbox"
                          label="24x7 Security"
                          {...register("security24x7")}
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group className="last-flex" controlId="formPowerBackup">
                      <Image src={"/img/icons/Power.svg"} alt="icon" width={27} height={27} />
                        <Form.Check
                          type="checkbox"
                          label="Power Backup"
                          {...register("powerBackup")}
                        />
                      </Form.Group>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                  </Row>

                  <p className="list-pergraph mt-md-2 mt-5 mt-md-4">Project Tour : Specifications</p>
                  <p className="list-pergraph mt-md-3 mt-3">Floor & Counter</p>
                  <Row className="mb-md-3 mb-3">
                    <Col>
                      <Form.Group  controlId="formLivingDining">
                        <Form.Control
                        className="form-inputs"
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
                        className="form-inputs"
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
                        className="form-inputs"
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
                        className="form-inputs"
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
                        className="form-inputs"
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
                        className="form-inputs"
                          type="text"
                          placeholder="Balcony"
                          {...register("balcony", { required: true })}
                        />
                        {errors.balcony && <p>This field is required</p>}
                      </Form.Group>
                    </Col>
                  </Row>

                  <div>
                    <p className="list-pergraph mt-md-2 mt-4 mt-md-4">Project Tour : Broucher</p>
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
