import react,{ useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { IoLocationOutline } from "react-icons/io5";

// Define Indore's coordinates
const indoreCoordinates = [22.7196, 75.8577];

const pointsOfInterest = [
  { name: 'Schools', position: [22.7196, 75.8577] },
  { name: 'Healthcare', position: [22.7206, 75.8577] },
  { name: 'Commute', position: [22.7216, 75.8577] },
  { name: 'Food', position: [22.7226, 75.8577] },
  { name: 'Shopping', position: [22.7236, 75.8577] },
  { name: 'Parks', position: [22.7246, 75.8577] },
  { name: 'Banks', position: [22.7256, 75.8577] },
  { name: 'Cinemas', position: [22.7266, 75.8577] },
];

const customIconHtml = L.divIcon({
  html: `<div style="font-size: 24px; color: red;">i</div>`,
  iconSize: [24, 24],
  className: 'custom-icon'
});

const Map = ({ selectedPOI, setSelectedPOI }) => {
  return (
    <MapContainer center={indoreCoordinates} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {pointsOfInterest.map((poi, index) => (
        <Marker
          key={index}
          position={poi.position}
          icon={customIconHtml}
          eventHandlers={{
            click: () => {
              setSelectedPOI(poi);
            },
          }}
        >
          <Popup>
            <strong>{poi.name}</strong>
            <br />
            {poi.position.toString()}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
