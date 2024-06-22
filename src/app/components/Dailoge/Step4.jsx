import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button, FormControl } from 'react-bootstrap';

const Step4 = ({ onPrev, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [localities, setLocalities] = useState([]);
  const [selectedLocality, setSelectedLocality] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

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

  return (
    <div className='w-100'>
      <h2>Step 4</h2>
      <Form onSubmit={handleSubmit(handleFinalSubmit)}>
        <Form.Group>
          <Form.Label>Select City:</Form.Label>
          <Form.Control as="select" value={selectedCity} onChange={handleCityChange}>
            <option value="">Select a city</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Selected Locality:</Form.Label>
          <div>
            {selectedLocality && (
              <Button variant="info" onClick={handleRemoveLocality}>{selectedLocality} &times;</Button>
            )}
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Search and Add Locality:</Form.Label>
          <FormControl type="text" placeholder="Search locality..." onChange={handleSearchChange} />
          <div>
            {filteredLocalities.map(locality => (
              <Button key={locality} variant="outline-primary" onClick={() => handleLocalityClick(locality)}>{locality}</Button>
            ))}
          </div>
        </Form.Group>
        <Button className='start-btn w-100 btn btn-primary' variant="primary" type="submit" style={{ marginTop: '40px' }}>
          Next
        </Button>
      </Form>
    </div>
  );
};

export default Step4;
