import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Image from "next/image";
import OtpInput from "react-otp-input";
import BASE_URL from "@/config/config";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import { addUser } from "@/redux/session";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "@/redux/token";

const OtpDialog = ({ show, handleClose, handleShowMultiForm }) => {
  const [otp, setOtp] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // const user = useSelector((state) => {
  //   const users = state.adduser.users;
  //   return users?.length > 0 ? users[users.length - 1].user.data : null;
  // });

  useEffect(() => {
    const handlePhoneAdded = () => {
      const newPhone = localStorage.getItem("Phone");
      if (newPhone) {
        setPhone(newPhone);
      }
    };
    window.addEventListener("phoneAdded", handlePhoneAdded);
    return () => {
      window.removeEventListener("phoneAdded", handlePhoneAdded);
    };
  }, []);

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      phone: phone,
      otp: otp,
      name: "null",
      email: "user@gmail.com",
    };

    const config = {
      headers: {
        accept: "application/json",
      },
    };

    try {
      const response = await BASE_URL.post("/api/otp/verify", payload, config);
      if (response.data.success) {
        toast.success(response.data.message);
        handleClose();
        dispatch(addUser(response.data));
        dispatch(addToken(response.data.data.token));
        setOtp("");
        if( handleShowMultiForm()){
          handleShowMultiForm();
        }
      
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
      toast.error(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal id="moadal" show={show} onHide={handleClose} centered>
      <Button className="btn-close" onClick={handleClose}></Button>
      <Modal.Body>
        <div className="login d-flex flex-column justify-content-center align-items-center">
          <Image
            className="mb-md-5 mb-3"
            src="/img/login/otp.png"
            alt="login"
            width="195"
            height="150"
          />
          <h2>Login</h2>
          <p className="mt-2 text-center">
            We’ve sent an SMS with an activation code to your phone <b>{phone}</b>
          </p>
          <Form className="w-100" onSubmit={handleVerifyOtp}>
            <Form.Group className="otp-box mb-3 mt-3 w-100">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
            </Form.Group>
            <p className="text-end">
              <b>Send code again</b> 00.20
            </p>
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
                "Continue"
              )}
            </Button>
            <p className="text-center mt-md-4 p-small">
              By logging in, you are accepting the terms & conditions
            </p>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default OtpDialog;
