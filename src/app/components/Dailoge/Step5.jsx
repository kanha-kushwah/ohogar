import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, FormControl } from "react-bootstrap";
import Image from "next/image";


const Step5 = ({formData, onPrev, onSubmit }) => {

    useEffect(() => {
        // Log the collected data for verification
        console.log('Collected formData:', formData);
    }, [formData]);

  return (
    <div className="w-100 login">
      <div className="d-flex align-items-center justify-content-between">
        <h2>Filter</h2>
        <p>
          <b>
            <u>Clear all</u>
          </b>
        </p>
        </div>
        
        <div className="d-flex align-items-center justify-content-between">
          <p className="p-small">
            Select Locality or Landmark in{" "}
            <span className="text-black">
              <b>{formData?.selectedCity} </b>
            </span>{" "}
          </p>
          <p className="p-small text-right text-black pointer">Change city </p>
        </div>
     

<div className="apply-filter mt-md-4 mt-4">
    <p>Filter Applied</p>
    <h5>{formData?.selectedLocality}</h5>
</div>


      <Button
        className="start-btn w-100 btn btn-primary"
        variant="primary"
        type="submit"
        style={{ marginTop: "40px" }}
      >
        Next
      </Button>
    </div>
  );
};

export default Step5;
