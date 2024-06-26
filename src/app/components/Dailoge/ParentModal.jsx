import React, { useState } from 'react';
import Login from './Login';
import Sidebar from '../Sidebar/Sidebar';
import OtpDialog from './OtpDialog';
import './Dailloge.css';
import MultiFormDialog from './MultiFormDialog';
import Postproperty from './Postproperty';


const ParentModal = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [showMultiForm, setShowMultiForm] = useState(false);
  const [showPostProperty, setShowPostProperty] = useState(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const handleShowOtp = () => setShowOtp(true);
  const handleCloseOtp = () => setShowOtp(false);

  const handleShowMultiForm = () => setShowMultiForm(true);
  const handleCloseMultiForm = () => setShowMultiForm(false);

  const handleShowProperty = () => setShowPostProperty(true);
  const handleCloseProperty = () => setShowPostProperty(false);

  return (
    <div>
      <Login show={showLogin} handleClose={handleCloseLogin} handleShowOtp={handleShowOtp} />
      <OtpDialog show={showOtp} handleClose={handleCloseOtp} handleShowMultiForm={handleShowMultiForm}  handleShowProperty={handleShowProperty}  />
      <Sidebar handleShow={handleShowLogin} />
      <MultiFormDialog show={showMultiForm} handleClose={handleCloseMultiForm} />
      <Postproperty show={showPostProperty} handleClose={handleCloseProperty} />
    </div>
  );
};

export default ParentModal;
