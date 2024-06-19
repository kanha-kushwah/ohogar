import Image from "next/image";
import React ,{useState} from "react";
import { Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import PhoneInput from "react-phone-input-2";

const Login = ({ show, handleClose }) => {

    const [phone, setPhone] = useState("");

    const handlePhoneChange = (value) => {
      setPhone(value);
    };

  return (
    <Modal id="moadal" show={show} onHide={handleClose} centered>
      <Modal.Body>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Image
            src="/img/login/login.png"
            alt="login"
            width={"200"}
            height={"200"}
          />
          <h2>Login</h2>
          <p>Please confirm your country code and enter your phone number.</p>

          <Form className="w-100">
            <div className="align-items-center g-20">
              <Form.Group
                className="mb-3 w-100"
                controlId="exampleForm.ControlInput1"
              >
                <PhoneInput
                  country={"in"}
                  value={phone}
                  onChange={handlePhoneChange}
                  inputStyle={{ width: "100%" }}
                />
              </Form.Group>
    
            </div>

            <Button className="w-100" variant="primary" type="submit">
            Get OTP
            </Button>

            <p className="text-center mt-md-4">By login, you are accepting the terms & condition</p>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
