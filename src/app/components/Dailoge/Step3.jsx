import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, FormControl } from 'react-bootstrap';

const Step3 = ({ onPrev, onNext }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedCity, setSelectedCity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur', 'Indore'];
  const [selectedOption, setSelectedOption] = useState('');

  const onSubmit = (data) => {
    const finalData = { ...data, selectedCity };
    localStorage.setItem('selectedCity', selectedCity); // Save selected city to localStorage
    console.log(finalData);
    onNext(finalData);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  const handleRemoveCity = () => {
    setSelectedCity('');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const savedOption = localStorage.getItem('selectedOption');
    if (savedOption) {
      setSelectedOption(savedOption);
    }
  }, []);

  return (
    <div className='w-100'>
      <h2>Step 3</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <p>Selected Option: {selectedOption}</p>
          <Form.Label>Selected City: </Form.Label>
          <div>
            {selectedCity && (
              <Button variant="info" onClick={handleRemoveCity}>{selectedCity} &times;</Button>
            )}
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Add City:</Form.Label>
          <FormControl type="text" placeholder="Search and add city..." onChange={handleSearchChange} />
          <div>
            {filteredCities.map(city => (
              <Button key={city} variant="outline-primary" onClick={() => handleCityClick(city)}>{city}</Button>
            ))}
          </div>
        </Form.Group>
        {/* <Button variant="secondary" type="button" onClick={onPrev}>Previous</Button> */}
        <Button className='start-btn w-100 btn btn-primary' variant="primary" type="submit" style={{ marginTop: '40px' }}>
          Next
        </Button>
      </Form>
    </div>
  );
};

export default Step3;
