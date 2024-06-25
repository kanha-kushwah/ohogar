import React from 'react';
import { Modal, Button } from 'react-bootstrap'
import Image from 'next/image';
import './Dailloge.css';
import { useRouter } from 'next/navigation';

const SuceesPost = ({ show, handleClose }) => {
const router = useRouter();

const back = () =>{
    router.push('/')
}
  return (
    <Modal id="moadal" show={show} onHide={handleClose} centered>
      <Button className="btn-close" onClick={handleClose}></Button>
      <Modal.Body>
        <div className="login d-flex flex-column justify-content-center align-items-center">
          <Image className='mb-md-5 mb-3' src="/img/login/sucess.png" alt="login" width="208" height="176" />
          <h2 className='text-center mt-md-5 mt-4'>You have Successfully Posted Your Property</h2>
            <Button onClick={back} className="start-btn w-100" variant="primary" type="submit" style={{ marginTop: '100px' }}>
            Back To Home
            </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SuceesPost;
