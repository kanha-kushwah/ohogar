import React, { useState } from 'react';
import Image from 'next/image';

const mockProperties = [
  {
    id: 1,
    image: '/img/single/comparedemo.jpg',
    name: 'Madhuram Height',
    location: 'Kolar Road, Bhopal',
    area: '2 BHK',
    size: '696sq.ft',
    price: '₹38.0 L',
    status: 'Ready to Move',
    possession: 'NA',
    emi: '₹20.12 K',
    amenities: [
      { id: 'swimmingPool', title: 'Swimming Pool', imageUrl: '/img/icons/pool.svg' },
      { id: 'gym', title: 'Gym', imageUrl: '/img/icons/gym.svg' },
    ],
  },
  {
    id: 2,
    image: '/img/single/comparedemo.jpg',
    name: 'Green Valley',
    location: 'Hoshangabad Road, Bhopal',
    area: '3 BHK',
    size: '1200sq.ft',
    price: '₹50.0 L',
    status: 'Ready to Move',
    possession: 'NA',
    emi: '₹20.12 K',
    amenities: [
      { id: 'clubHouse', title: 'Club House', imageUrl: '/img/icons/club.svg' },
      { id: 'carParking', title: 'Car Parking', imageUrl: '/img/icons/carparking.svg' },
    ],
  },
  {
    id: 3,
    image: '/img/single/comparedemo.jpg',
    name: 'Sunshine Residency',
    location: 'Arera Colony, Bhopal',
    area: '2 BHK',
    size: '850sq.ft',
    price: '₹45.0 L',
    status: 'Ready to Move',
    possession: 'NA',
    emi: '₹20.12 K',
    amenities: [
      { id: 'childrensPlayArea', title: 'Children\'s Play Area', imageUrl: '/img/icons/children.svg' },
      { id: 'yogaMeditationArea', title: 'Yoga/Meditation Area', imageUrl: '/img/icons/yoga.svg' },
    ],
  },
  // Add more properties as needed
];

const PropertySearch = ({ addProperty }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (term) => {
    if (term) {
      const filteredResults = mockProperties.filter(property =>
        property.name.toLowerCase().includes(term.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };

  return (
    <div>
      <input
        className='w-100'
        type="text"
        placeholder="Search properties"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul className='inner-search-com p-0'>
        {results.length > 0 ? (
          results.map(property => (
            <li key={property.id} onClick={() => addProperty(property)}>
              {property.name}
            </li>
          ))
        ) : (
          searchTerm && <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

const CompareProperties = () => {
  const [properties, setProperties] = useState([
    {
      id: 0,
      name: 'Madhuram Height',
      location: 'Kolar Road, Bhopal',
      area: '2 BHK696sq.ft',
      size: '₹5.46K/sq.ft',
      price: '₹38.0 L',
      status: 'Ready to Move',
      possession: 'NA',
      emi: '₹20.12 K',
      image: '/img/single/comparedemo.jpg',
      amenities: [
        { id: 'childrensPlayArea', title: 'Children\'s Play Area', imageUrl: '/img/icons/children.svg' },
        { id: 'carParking', title: 'Car Parking', imageUrl: '/img/icons/carparking.svg' },
        { id: 'yogaMeditationArea', title: 'Yoga/Meditation Area', imageUrl: '/img/icons/yoga.svg' },
        { id: 'streetLighting', title: 'Street Lighting', imageUrl: '/img/icons/Street.svg' },
      ],
    },
  ]);

  const addProperty = (property) => {
    if (properties.length < 3 && !properties.some(p => p.id === property.id)) {
      setProperties([...properties, property]);
    }
  };

  const removeProperty = (propertyId) => {
    setProperties(properties.filter(property => property.id !== propertyId));
  };

  const renderProperty = (property) => (
    <div className='inner-prop-com' key={property.id}>
      <div className="compare-inner">
        <h3>{property.name}</h3>
        <p>{property.location}</p>
        <p>{property.area}</p>
        <img src={property.image} width="100%" className="img-fluid rounded-top" alt={property.name} />
        <p>{property.price}</p>
        <p>{property.size}</p>
        <p>{property.emi}</p>
      </div>
      <p>Status: {property.status}</p>
      <p>Possession by: {property.possession}</p>
      <div className="d-flex flex-wrap g-20 ">
        {property.amenities && property.amenities.map(amenity => (
          <div key={amenity.id} className="amenity-item me-2 text-center">
            <Image
              src={amenity.imageUrl}
              width={27}
              height={27}
              alt={amenity.title}
              className="cursor-pointer"
            />
            <p className="p-small-m mt-2">{amenity.title}</p>
          </div>
        ))}
      </div>
      <button>Contact Seller</button>
      {property.id !== 0 && (
        <button onClick={() => removeProperty(property.id)}>Remove</button>
      )}
    </div>
  );

  const renderPlaceholder = (index) => (
    <div className='inner-prop-com placeholder' key={index}>
      <h3>Add property to compare</h3>
      <p>Location: -</p>
      <p>Area: -</p>
      <p>Size: -</p>
      <p>Price: -</p>
    </div>
  );

  return (
    <section id='compare-properties'> 
      <div>
        <h6 className="big-heading text-black">Compare Properties</h6>
        <PropertySearch addProperty={addProperty} />
        <div className='d-flex g-20'>
          {renderProperty(properties[0])}
          {properties[1] ? renderProperty(properties[1]) : renderPlaceholder(1)}
          {properties[2] ? renderProperty(properties[2]) : renderPlaceholder(2)}
        </div>
      </div>
    </section>
  );
};

export default CompareProperties;
