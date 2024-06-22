import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import Image from 'next/image';

const Step2 = ({ onNext, onPrev }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedOption, setSelectedOption] = useState(null);

  const onSubmit = (data) => {
    console.log('submit data',data)
    onNext(data);
  };

  const handleOptionChange = (event) => {
    console.log('select',event.target.value)
    setSelectedOption(event.target.value);
    localStorage.setItem('selectedOption', event.target.value);
  };

  return (
    <div className='w-100'>
      <h2>Select an Interest:</h2>
      <Form className='radio-custom' onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Check
            type='radio'
            id='buy'
            label={
              <>
                <Image src="/img/login/buy.svg" alt='buy' width={40} height={40}  />
               <span>Buy</span>
              </>
            }
            value='buy'
            {...register('SelectInterest', { required: true })}
            onChange={handleOptionChange}
            checked={selectedOption === 'buy'}
            className={
                selectedOption === "buy" ? "active" : ""
              }
            
          />
          <Form.Check
            type='radio'
            id='rent'
            label={
              <>
                 <Image src="/img/login/rent.svg" alt='rent' width={40} height={40}  />
              <span> Rent</span> 
              </>
            }
            value='rent'
            {...register('SelectInterest', { required: true })}
            onChange={handleOptionChange}
            checked={selectedOption === 'rent'}
            className={
                selectedOption === "rent" ? "active" : ""
              }
          />
          <Form.Check
            type='radio'
            id='land'
            label={
              <>
                <Image src="/img/login/land.svg" alt='buy' width={40} height={40}  />
                <span>Land</span>
              </>
            }
            value='land'
            {...register('SelectInterest', { required: true })}
            onChange={handleOptionChange}
            checked={selectedOption === 'land'}
            className={
                selectedOption === "land" ? "active" : ""
              }
          />
          <Form.Check
            type='radio'
            id='commercial'
            label={
              <>
                 <Image src="/img/login/commercial.svg" alt='buy' width={40} height={40}  />
                 <span>commercial</span>
              </>
            }
            value='commercial'
            {...register('SelectInterest', { required: true })}
            onChange={handleOptionChange}
            checked={selectedOption === 'commercial'}
            className={
                selectedOption === "commercial" ? "active" : ""
              }
          />
          {errors['SelectInterest'] && <Form.Text className='text-danger'>Selection is required</Form.Text>}
        </Form.Group>
        {/* <Button variant='secondary' onClick={onPrev}>Previous</Button>{' '} */}
        <Button className='start-btn w-100 btn btn-primary' variant="primary" type="submit" style={{ marginTop: '40px' }}>
          Next
        </Button>
      </Form>
    </div>
  );
};

export default Step2;
