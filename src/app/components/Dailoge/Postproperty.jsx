import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import OtpInput from 'react-otp-input';
import { useSelector } from 'react-redux';
import './Dailloge.css';
import SuceesPost from './SuceesPost';

const Postproperty = ({ show, handleClose ,handleShowMultiForm }) => {
  const [otp, setOtp] = useState('');
  const [showPostSuceess, setShowPostSuceess] = useState(false);
  const showPostSucees = () => setShowPostSuceess(true);
  const handleCloseSucees = () => setShowPostSuceess(false);

  const user = useSelector((state) => {
    const users = state.adduser.users;
    return users.length > 0 ? users[users.length - 1].user.data : null;
  });


console.log('select',user)
  const handleOtpChange = (e) => setOtp(e.target.value);
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    handleClose();
    showPostSucees();
  };
  return (
    <>
    <SuceesPost show={showPostSuceess} handleClose={handleCloseSucees}  />
    <Modal id="moadal" show={show} onHide={handleClose} centered>
      <Button className="btn-close" onClick={handleClose}></Button>
      <Modal.Body>
        <div className="login d-flex flex-column justify-content-center align-items-center">
          <Image className='mb-md-5 mb-3' src="/img/login/otp.png" alt="login" width="195" height="150" />
          <h2>Enter OTP</h2>
          <p className="mt-2">OTP has been sent to <b>{user?.phone}</b></p>
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
            <Button className="start-btn mt-2 w-100" variant="primary" type="submit">
            Continue
            </Button>
            <p className="text-center mt-md-4 p-small">By login, you are accepting the terms & conditions</p>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
    </>
  );
};

export default Postproperty;
