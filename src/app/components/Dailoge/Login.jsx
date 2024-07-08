"use client";
import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import PhoneInput from "react-phone-input-2";
import Image from "next/image";
import "react-phone-input-2/lib/style.css";
import BASE_URL from "@/config/config";
import { addUser } from "@/redux/session";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "@/config/Loader";
import { ThreeDots } from "react-loader-spinner";

const Login = ({ show, handleClose, handleShowOtp }) => {
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => {
    const users = state.adduser.users;
    return users?.length > 0 ? users[users?.length - 1].user?.data : null;
  });

  useEffect(() => {
    if (user?.phone) {
      setPhone(user.phone);
    }
  }, [user]);

  const setPhoneInLocalStorage = (phone) => {
    localStorage.setItem('Phone', phone);
    const event = new Event('phoneAdded');
    window.dispatchEvent(event);
  }
  
  const handlePhoneChange = (value) => setPhone(value);


  

  const handleGetOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      phone: phone,
      firebase_id: "firebase_id",
      device_type: "device_type",
      device_token: "device_token",
    };

    const config = {
      headers: {
        accept: "application/json",
      },
    };

    try {
      const response = await BASE_URL.post("/api/otp/send", payload, config);
      console.log("Response:", response.data);

      if (response.data.success) {

        // localStorage.setItem('Phone', phone);
        setPhoneInLocalStorage(phone);

        toast.success(response.data.message);
        // dispatch(addUser(response.data));
        handleClose();
        handleShowOtp();
        setPhone("")
      } else {
        toast.error(response.data.message);
    
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error(error.response ? error.response.data.message : error.message);
      handleClose();
      handleShowOtp();
    }finally {
      setLoading(false);
    }
  };

  return (
    <>
   
    <Modal id="moadal" show={show} onHide={handleClose} centered>
      <Button className="btn-close" onClick={handleClose}></Button>
      <Modal.Body>
        <div className="login d-flex flex-column justify-content-center align-items-center">
          <Image
            src="/img/login/login.png"
            alt="login"
            width="249"
            height="249"
          />
          <h2>Login</h2>
          <p className="mt-2 text-center">
            Please confirm your country code and enter your phone number.
          </p>
          <Form className="w-100" onSubmit={handleGetOtp}>
            <Form.Group className="mb-3 mt-3 w-100">
              <PhoneInput
                country="in"
                value={phone}
                onChange={handlePhoneChange}
                inputStyle={{ width: "100%" }}
              />
            </Form.Group>
            <Button
              className="start-btn mt-2 mb-md-0 mb-4 w-100 "
              variant="primary"
              type="submit"
              disabled={loading}
            >
              {loading ? (
               <ThreeDots
               visible={true}
               height="20"
               width="80"
               color="#fff"
               radius="9"
               ariaLabel="three-dots-loading"
               wrapperStyle={{}}
               wrapperClass="text-center justify-content-center start-btn"
               />
              ) : (
                "Get OTP"
              )}
            </Button>
            <p className="text-center mt-md-4 p-small">
              By login, you are accepting the terms & conditions
            </p>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
    </>
  );
};

export default Login;
