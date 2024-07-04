import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, Alert } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import BASE_URL from '@/config/config';
import { toast } from "react-toastify";


const Step1 = ({ onNext }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [phone, setPhone] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const user = useSelector((state) => {
    const users = state.adduser.users;
    return users.length > 0 ? users[users.length - 1].user.data : null;
   
  });

  const handlePhoneChange = (value) => {
    setPhone(value);
    setValue('phone', value, { shouldValidate: true });
  };

  useEffect(() => {
    if (user?.phone) {
      setPhone(user?.phone);
      setValue('phone', user?.phone, { shouldValidate: true });
    }
  }, [user, setValue]);


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

  const onSubmit = async (data) => {
    console.log('Form Data:', data);  
    
    const payload = {
      name:data.name,
      email:data.email,
      phone: phone,
      firebase_id: "firebase_id",
      device_type: "device_type",
      device_token: "device_token",
    };

    const config = {
      headers: {
        accept: "application/json",
      },
    };

    try {
      const response = await BASE_URL.post("/api/register", payload, config);
      console.log("Response:", response.data);

      if (response.data.success) {
        // const token = response.data.data.token;
        // localStorage.setItem('token', token);
        toast.success(response.data.message);
        // dispatch(addUser(response.data));
      
        onNext(data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error(error.response ? error.response.data.message : error.message);
      onNext(data);
    }

    
  };

 
  const logErrors = (errors) => {
    const simpleErrors = Object.keys(errors).reduce((acc, key) => {
      acc[key] = errors[key].message || 'Validation error';
      return acc;
    }, {});
    console.log('Validation Errors:', simpleErrors);
  };

  return (
    <div className='w-100 step-input'>
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

        <Form.Group className='login' controlId="formPhone">
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
