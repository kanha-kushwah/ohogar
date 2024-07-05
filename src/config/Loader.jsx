import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div className="loader d-flex justify-content-center align-items-center" style={{ height: '100vh',zIndex:'9999999' }}>
      <Spinner animation="border" role="status">
      
      </Spinner>
    </div>
  )
}

export default Loader