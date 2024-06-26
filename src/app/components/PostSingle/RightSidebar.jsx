import Image from "next/image";
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PhoneInput from "react-phone-input-2";


export const Rightsidebar = () => {
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    homeLoans: false,
    agree: false,
  });
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  const handlePhoneChange = (value) => setPhone(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section id="">
      <p className="small-box">
        <span>
          {" "}
          <Image
            className="me-2"
            src={"/img/icons/thunder.svg"}
            width={15}
            height={20}
            alt="thunder"
          />{" "}
        </span>{" "}
        Great choice! Most viewed project in this area
      </p>

      <div className="single-page-box radius-10">
        <h5>Contact Seller</h5>
        <div className="dealer-deatails d-flex g-20">
          <Image
            className="me-2"
            src={"/img/icons/thumb.jpg"}
            width={65}
            height={65}
            alt="thunder"
          />
          <div>
            <p className="mb-0">
              {" "}
              <b>Madhuban Group</b>
            </p>
            <p className="mb-0">Developer</p>
            <p className="mb-0">
              <b>+9162626.....</b>
            </p>
          </div>
        </div>
        <p className="mt-3">
          <b> Please share your contact</b>
        </p>

        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName" className="mb-3"> 
          <Form.Control
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
        </Form.Group>

        <Form.Group controlId="formPhone" className="mb-3">
           <PhoneInput
                country="in"
                name="phone"
                value={phone}
                onChange={handlePhoneChange}
                inputStyle={{ width: "100%" }}
              />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </Form.Group>
      </Form>
      </div>

      
      <Form.Group className="mt-md-4 mt-4 mb-3" controlId="agree">
        <Form.Check
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          label="I agree to be contacted by Housing and other agents via WhatsApp, SMS, phone, email etc"
        />
      </Form.Group>

      
      <Form.Group controlId="formHomeLoans" className="mb-4">
        <Form.Check
          type="checkbox"
          name="homeLoans"
          checked={formData.homeLoans}
          onChange={handleChange}
          label="I am interested in Home Loans"
        />
      </Form.Group>

      <Button className="w-100" variant="primary" type="button" onClick={handleSubmit}>
      Get Contact Details
      </Button>

<div className="box-share mt-4 d-flex align-items-center">
  <div className="share-one">
    <p className="mb-0"><b>Still deciding?</b></p>
    <p>Shortlist this property for now & easily come
    back to it later.</p>
  </div>
  <span className="heart">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
  </span>
</div>
<div className="mt-4 d-flex align-items-center justify-content-center">
  <p className="text-center"> <span className="me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
</svg></span> share </p>
</div>

    </section>
  );
};
