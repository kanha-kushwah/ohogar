import React, { useState, useEffect ,useContext} from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, FormControl } from 'react-bootstrap';
import Image from 'next/image';
import { LocationContext } from '../Context/LocationContext';

const Step3 = ({ onPrev, onNext }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedCity, setSelectedCity] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCities] = useState(['']);

  // const [geTcity, cities] = useState([])
  const [selectedOption, setSelectedOption] = useState('');
  const { location } = useContext(LocationContext);



  useEffect(() => {
    const cityNames = location?.data.map(location => location.name);
    setCities(cityNames);
  }, [location]);

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
    <div className='w-100 login'>
      <h2>You are looking to <span className='text-capitalize'>{selectedOption}</span></h2>
     <div className="d-flex align-items-center justify-content-between">
     <p className='p-small'>Select Locality or Landmark in  <span className='text-black' onClick={handleRemoveCity}><b> {selectedCity}</b></span> </p>
     <p className='p-small text-right text-black pointer'> <u onClick={handleRemoveCity}>Change city</u> </p>
     </div>
     
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* <Form.Group>
          <Form.Label>Selected City: </Form.Label>
          <div>
            {selectedCity && (
              <Button variant="info" onClick={handleRemoveCity}>{selectedCity} &times;</Button>
            )}
          </div> 
        </Form.Group> */}

        <Form.Group>
          <FormControl type="text" placeholder="Search and add city..." onChange={handleSearchChange} />
        <p className='mt-md-3 mt-3 step-three-p pointer'><Image className='pointer me-1' src="/img/login/target.svg" width={20} height={20} alt='img' />  Use my current location</p>
         
          <div className='mt-md-4 mt-4'>
            <h4>Popular Cities</h4>
            <div className='step-city mt-md-3 mt-3'>
            {filteredCities.map(city => (
              <Button key={city} variant="outline-primary" onClick={() => handleCityClick(city)}>
                 <Image className='pointer me-1' src="/img/login/city.svg" width={35} height={35} alt='img' /> {city}</Button>
            ))}
            </div>
          </div>

        </Form.Group>

        <Button variant="secondary" type="button" onClick={onPrev}>Previous</Button>
        <Button className='start-btn w-100 btn btn-primary' variant="primary" type="submit" style={{ marginTop: '40px' }}>
          Next
        </Button>
      </Form>
    </div>
  );
};

export default Step3;
