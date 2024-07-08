import React, { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import Image from 'next/image';
import BASE_URL from '@/config/config';
import { toast } from "react-toastify";
import useAxiosInstance from '@/config/axiosInstance';

const Step2 = ({ onNext, onPrev }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedOption, setSelectedOption] = useState(null);
  const [IntrestData, setIntrestData] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosInstance = useAxiosInstance();



  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await BASE_URL.get('/api/interests'); 
        console.log('Location Data:', response.data);
        setIntrestData(response.data);
      } catch (error) {
        console.error('Error fetching location data:', error);
        toast.error('Failed to fetch location data.');
      }
    };

    fetchLocationData();
  }, []); 

console.log(IntrestData,"ress")


  // const onSubmit = (data) => {
  //   console.log('submit data',data)
  //   onNext(data);
  // };




  const onSubmit  = async (data) =>  {

    setLoading(true);
    const numericValue = selectedOption.replace(/[^0-9]/g, ''); 
    const payload = {
      interest_id:numericValue
      };

    const config = {
      headers: {
        accept: "application/json",
      },
    };

    try {
      const response = await axiosInstance.post("/api/interest/select", payload, config);
      console.log("Response:", response.data);

      if (response.data.success) {
        toast.success(response.data.message);
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
    }finally {
      setLoading(false);
    }

   
  };




  const handleOptionChange = (event) => {
    const value = event.target.value;
   
    setSelectedOption(event.target.value);
    localStorage.setItem('selectedOption', event.target.id)

  };

  return (
    <div className='w-100 login'>
      <h2 className='mb-0'>Select an Interest</h2>
      <p className='p-small'>Selecting an interest will give you the recommendations. </p>
 
      <Form className='radio-custom mt-md-4 mt-3' onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>


        {IntrestData?.data?.map(intrested => (
          <div key={intrested.id}>
            <Form.Check
              type='radio'
              id={intrested.name}
              label={
                <>
                  <Image src="/img/login/commercial.svg" alt='rent' width={40} height={40} />
                  <span>{intrested.name}</span>
                </>
              }
              value={'test'+intrested.id}
              {...register('SelectInterest', { required: true })}
              onChange={handleOptionChange}
              checked={selectedOption === 'test'+intrested.id}
              className={selectedOption === 'test'+intrested.id ? "active" : ""}
            />
          </div>
        ))}

          {errors['SelectInterest'] && <Form.Text className='text-danger'>Selection is required</Form.Text>}
        </Form.Group>
        <Button variant='secondary' onClick={onPrev}>Previous</Button>{' '}
        <Button className='start-btn w-100 btn btn-primary' variant="primary" type="submit" style={{ marginTop: '20px' }}>
          Next
        </Button>
      </Form>
      
    </div>
  );
};

export default Step2;
