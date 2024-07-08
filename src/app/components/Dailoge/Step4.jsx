  import React, { useState, useEffect } from 'react';
  import { useForm } from 'react-hook-form';
  import { Form, Button, FormControl } from 'react-bootstrap';
  import Image from 'next/image';

  const Step4 = ({ onPrev, onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [localities, setLocalities] = useState([]);
    const [selectedLocality, setSelectedLocality] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const cities = [
      'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad', 'Chennai',
      'Kolkata', 'Surat', 'Pune', 'Jaipur', 'Indore'
    ];

    useEffect(() => {
      const city = localStorage.getItem('selectedCity');
      setSelectedCity(city);

      if (city) {
        fetchLocalities(city);
      }
    }, []);

    const fetchLocalities = (city) => {
      const localitiesData = {
        'Mumbai': ['Andheri', 'Bandra', 'Juhu'],
        'Delhi': ['Connaught Place', 'Karol Bagh', 'Saket'],
        'Bangalore': ['Koramangala', 'Whitefield', 'Indiranagar'],
        'Hyderabad': ['Banjara Hills', 'Jubilee Hills', 'Madhapur'],
        'Ahmedabad': ['Navrangpura', 'Bodakdev', 'Maninagar'],
        'Chennai': ['T. Nagar', 'Adyar', 'Velachery'],
        'Kolkata': ['Salt Lake', 'Park Street', 'Garia'],
        'Surat': ['Adajan', 'Vesu', 'Pal'],
        'Pune': ['Kothrud', 'Baner', 'Hinjewadi'],
        'Jaipur': ['Vaishali Nagar', 'Malviya Nagar', 'C-Scheme'],
        'Indore': ['Vijay Nagar', 'Palasia', 'Rau']
      };
      setLocalities(localitiesData[city] || []);
    };

    const handleCityChange = (e) => {
      const city = e.target.value;
      setSelectedCity(city);
      localStorage.setItem('selectedCity', city);
      fetchLocalities(city);
      setSelectedLocality('');
      setIsVisible(!isVisible);
    };

    const handleFinalSubmit = (data) => {
      const finalData = { ...data, selectedLocality, selectedCity };
      onSubmit(finalData);
    };

    const handleLocalityClick = (locality) => {
      setSelectedLocality(locality);
    };

    const handleRemoveLocality = () => {
      setSelectedLocality('');
    };

    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };

    const filteredLocalities = localities.filter(locality =>
      locality.toLowerCase().includes(searchTerm.toLowerCase())
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
      <p className='p-small'>Select Locality or Landmark in  <span className='text-black' onClick={handleCityChange}><b> {selectedCity}</b></span> </p>
      <p className='p-small text-right text-black pointer'> <u onClick={handleCityChange}>Change city</u> </p>
      </div>
    

        <Form onSubmit={handleSubmit(handleFinalSubmit)}>
      
        {isVisible && (
          <Form.Group className='mb-3 mb-md-3'>
            <Form.Label>Select City:</Form.Label>
            <Form.Control as="select" value={selectedCity} onChange={handleCityChange}>
              <option value="">Chnage city</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </Form.Control>
          </Form.Group>
        )}

          {/* <Form.Group>
            <Form.Label>Selected Locality:</Form.Label>
            <div>
              {selectedLocality && (
                <Button variant="info" onClick={handleRemoveLocality}>{selectedLocality} &times;</Button>
              )}
            </div>
          </Form.Group> */}

          <Form.Group>
          
            <FormControl type="text" placeholder="Search locality..." onChange={handleSearchChange} />
            
            <p className='mt-md-3 mt-3 step-three-p pointer'><Image className='pointer me-1' src="/img/login/target.svg" width={20} height={20} alt='img' />  Use my current location</p>
          
            {/* <div>
              {filteredLocalities.map(locality => (
                <Button key={locality} variant="outline-primary" onClick={() => handleLocalityClick(locality)}>{locality}</Button>
              ))}
            </div> */}
            <div className='mt-md-4 mt-4'>
              <h4>Popular Localities</h4>
              <div className='step-city mt-md-3 mt-3'>
              {filteredLocalities.map(locality => (
                <Button key={locality} variant="outline-primary" onClick={() => handleLocalityClick(locality)}>
                  <Image className='pointer me-1' src="/img/login/add-icon.svg" width={20} height={20} alt='img' /> {locality}</Button>
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

  export default Step4;
