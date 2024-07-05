import React, { useState,useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import OtpInput from 'react-otp-input';
import { useSelector } from 'react-redux';
import BASE_URL from "@/config/config";
import { toast } from "react-toastify";

const OtpDialog = ({ show, handleClose ,handleShowMultiForm }) => {
  const [otp, setOtp] = useState('');
  const [phone, setPhone] = useState('');

  const user = useSelector((state) => {
    const users = state.adduser.users;
    return users.length > 0 ? users[users.length - 1].user.data : null;
  });

  useEffect(() => {
    const handlePhoneAdded = () => {
      const newPhone = localStorage.getItem('Phone');
      if (newPhone) {
        setPhone(newPhone);
      }
    };
    window.addEventListener('phoneAdded', handlePhoneAdded);
    return () => {
      window.removeEventListener('phoneAdded', handlePhoneAdded);
    };
  }, []);


console.log('select',user)

  const handleOtpChange = (e) => setOtp(e.target.value);

  const handleVerifyOtp  = async (e) =>  {

    e.preventDefault();

    const payload = {
      phone: phone,
      otp:otp,
      name:"null"
    };

    const config = {
      headers: {
        accept: "application/json",
      },
    };

    try {
      const response = await BASE_URL.post("/api/otp/verify", payload, config);
      console.log("Response:", response.data);

      if (response.data.success) {
        toast.success(response.data.message);
        e.preventDefault();
        handleClose();
        handleShowMultiForm();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error(error.response ? error.response.data.message : error.message);
   
    }

   
  };
  return (
    <Modal id="moadal" show={show} onHide={handleClose} centered>
      <Button className="btn-close" onClick={handleClose}></Button>
      <Modal.Body>
        <div className="login d-flex flex-column justify-content-center align-items-center">
          <Image className='mb-md-5 mb-3' src="/img/login/otp.png" alt="login" width="195" height="150" />
          <h2>Login</h2>
          <p className="mt-2 text-center">We’ve sent an SMS with an activation code to your phone <b>{phone}</b></p>
          <Form className="w-100" onSubmit={handleVerifyOtp }>
            <Form.Group className="otp-box mb-3 mt-3 w-100">
            <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
            </Form.Group>
            <p className='text-end'><b>Send code again</b> 00.20</p>
            <Button className="start-btn mt-2 w-100 mb-md-0 mb-4" variant="primary" type="submit">
            Continue
            </Button>
            <p className="text-center mt-md-4 p-small">By login, you are accepting the terms & conditions</p>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default OtpDialog;
