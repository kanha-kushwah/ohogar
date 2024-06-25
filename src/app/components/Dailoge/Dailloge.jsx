import React ,{ useEffect, useState }  from 'react'
import { Modal, Button } from 'react-bootstrap';
import Image from 'next/image';

const Dailloge = () => {
    const [show, setShow] = useState(false);
  
    // useEffect(() => {
    //     if (!localStorage.getItem('modalShown')) {
    //       setShow(true);
    //       localStorage.setItem('modalShown', 'true');
    //     }
    //   }, []);
      const handleClose = () => setShow(false);
  return (
    <section >
    <Modal id="moadal" className='add-img' show={show} onHide={handleClose} centered >
    {/* <Modal.Header closeButton>
    </Modal.Header> */}
    <Modal.Body>
        <div className="d-flex g-20 align-items-center">
            <div className="col"> <Image src="/img/illustration-bg.png" alt="avatar modal" height={436} width={247} /></div>
            <div className="col text-center"> 
            <Image src="/img/Logo.svg" alt="avatar modal" height={40} width={128} />
                <p className="frea-p text-center mt-2">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='start-btn mt-2'>Let’s Get Started</button>
            </div>

        </div>
    </Modal.Body>
    {/* <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer> */}
  </Modal>
  </section>
  )
}

export default Dailloge