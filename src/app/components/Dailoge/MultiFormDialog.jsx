import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ProgressBar from './ProgressBar';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const TOTAL_STEPS = 5;

const MultiFormDialog = ({ show, handleClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
  
    const handleNext = (data) => {
      setFormData(prev => ({ ...prev, ...data }));
      setStep(prev => prev + 1);
    };
  
    const handlePrev = () => {
      setStep(prev => prev - 1);
    };
  
    const handleSubmit = (data) => {
      const finalData = { ...formData, ...data };
      console.log('Final form data:', finalData);
      // Handle final form submission (e.g., send to API)
    };


  return (
  
    <section id="test" className="test">
    <Modal className="icon-remove" id="moadal" show={show} onHide={handleClose} centered>
    <Button className="btn-close" onClick={handleClose}></Button>
      <Modal.Body className='icon-remove'>
        <div className="multiform-dialog d-flex flex-column justify-content-center align-items-center">
          <ProgressBar step={step} totalSteps={TOTAL_STEPS} />
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} onPrev={handlePrev} />}
      {step === 3 && <Step3 onNext={handleNext} onPrev={handlePrev} />}
      {step === 4 && <Step4 onSubmit={handleNext} onPrev={handlePrev} />}
      {step === 5 && <Step5 formData={formData} onPrev={handlePrev} onSubmit={handleSubmit} />}



        </div>
      </Modal.Body>
    </Modal>
    </section>
  );
};

export default MultiFormDialog;
