// components/PointsOfInterest.js
import { FaSchool, FaHospital, FaBus, FaUtensils, FaShoppingBag, FaTree, FaUniversity, FaFilm } from 'react-icons/fa';

const pointsOfInterest = [
  { name: 'Schools', icon: <FaSchool /> },
  { name: 'Healthcare', icon: <FaHospital /> },
  { name: 'Commute', icon: <FaBus /> },
  { name: 'Food', icon: <FaUtensils /> },
  { name: 'Shopping', icon: <FaShoppingBag /> },
  { name: 'Parks', icon: <FaTree /> },
  { name: 'Banks', icon: <FaUniversity /> },
  { name: 'Cinemas', icon: <FaFilm /> },
];

const PointsOfInterest = ({ onPOIClick }) => {
  return (
    <div style={{ padding: '10px' }}>

      <ul className='d-flex flex-md-row flex-column p-0 g-20 text-center'>
        {pointsOfInterest.map((poi, index) => (
          <li className='d-flex flex-md-column flex-row' key={index} onClick={() => onPOIClick(poi.name)} style={{ cursor: 'pointer'}}>
            <span style={{ marginRight: '10px' }}>{poi.icon}</span>
            {poi.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PointsOfInterest;
