import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Alert } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Image from 'next/image';

const Step1 = ({ onNext }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [phone, setPhone] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const handlePhoneChange = (value) => {
    setPhone(value);
    setValue('phone', value, { shouldValidate: true });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

console.log(file)
setValue('image', file)
    if (file) {
      setValue('image', file, { shouldValidate: true });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    document.getElementById('formImage').click();
  };

  const onSubmit = (data) => {
    console.log('Form Data:', data);  
    onNext(data);
  };

 
  const logErrors = (errors) => {
    const simpleErrors = Object.keys(errors).reduce((acc, key) => {
      acc[key] = errors[key].message || 'Validation error';
      return acc;
    }, {});
    console.log('Validation Errors:', simpleErrors);
  };

  return (
    <div className='w-100'>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className='text-center box-im-style mb-4' controlId="formImage">
          <Form.Control 
            type="file" 
            style={{ display: 'none' }}
            {...register('image')}
            onChange={handleImageChange}
          />
          {imagePreview ? (
            <div className='text-center' onClick={handleImageClick} style={{ cursor: 'pointer' }}>
              <Image src={imagePreview} alt="Image Preview" width={55} height={55} />
            </div>
          ) : (
            <>
              <Image className='text-center' onClick={handleImageClick} src="/img/login/image.png" alt="Image Preview" width={55} height={55} />
              {errors.image && <Alert variant="danger">{errors.image.message}</Alert>}
            </>
          )}
        </Form.Group>

        <Form.Group className='mb-4' controlId="formName">
          <Form.Control 
            type="text" placeholder='Enter your Name'
            {...register('name', { required: 'Name is required' })} 
          />
          {errors.name && <Alert variant="danger">{errors.name.message}</Alert>}
        </Form.Group>

        <Form.Group className='mb-4' controlId="formEmail">
          <Form.Control 
            type="email" placeholder='Enter your email'
            {...register('email', { required: 'Email is required' })} 
          />
          {errors.email && <Alert variant="danger">{errors.email.message}</Alert>}
        </Form.Group>

        <Form.Group controlId="formPhone">
          <PhoneInput placeholder='Enter your Phone'
            country={'in'}
            value={phone}
            onChange={handlePhoneChange}
            inputStyle={{ width: '100%' }}
          />
          {errors.phone && <Alert variant="danger">{errors.phone.message}</Alert>}
        </Form.Group>

        <Button className='start-btn w-100 btn btn-primary' variant="primary" type="submit" style={{ marginTop: '100px' }}>
          Next
        </Button>
      </Form>
      {/* Debugging: Log errors */}
      {Object.keys(errors).length > 0 && logErrors(errors)}
    </div>
  );
};

export default Step1;
