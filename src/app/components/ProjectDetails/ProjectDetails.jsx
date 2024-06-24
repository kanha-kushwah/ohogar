"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import Image from "next/image";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./../../components/ListDetails/List.css";
import Link from "next/link";

const ProjectDetails = () => {
  const [images, setImages] = useState([]);

  // Function to handle image addition
  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setImages([...images, newImage]);
    }
  };

  // Function to handle image removal
  const handleRemoveImage = (imageToRemove) => {
    setImages(images.filter((image) => image !== imageToRemove));
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
                  <div className="project" style={{}}>
                    {images.map((image, index) => (
                      <div key={index} style={{ position: "relative" }}>
                        <Image
                          src={image}
                          alt={`Cover ${index}`}
                          width={120}
                          height={120}
                        />
                        <button className="btn-project"
                          onClick={() => handleRemoveImage(image)}> X</button>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
