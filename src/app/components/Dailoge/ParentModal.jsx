'use client'
import React, { useState } from 'react';
import Login from './Login';
import Sidebar from '../Sidebar/Sidebar';

const ParentModal = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div>
            <Login show={show} handleClose={handleClose} />
            <Sidebar handleShow={handleShow} />
        </div>
    );
};

export default ParentModal;
