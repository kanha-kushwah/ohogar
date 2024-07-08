import React from "react";
import { Modal, Button } from "react-bootstrap";
import Step5 from "./Step5";
import './Dailloge.css'
const Filter = ({ show, handleClose }) => {
  return (
    <div>
      <section id="test" className="test">
        <Modal
          className="icon-remove"
          id="moadal"
          show={show}
          onHide={handleClose}
          centered
        >
          <Button className="btn-close" onClick={handleClose}></Button>
          <Modal.Body className="icon-remove">
            <div className="multiform-dialog d-flex flex-column justify-content-center align-items-center">  
              <Step5 />
            </div>
          </Modal.Body>
        </Modal>
      </section>
    </div>
  );
};

export default Filter;
