import { useRef, useEffect } from 'react';
import { Marker, TileLayer, MapContainer } from 'react-leaflet';
import { Icon } from "leaflet";
import locationPin from '../images/pin-48.svg';


export default function Map({ location }) {
  const mapRef = useRef(null);
  
  useEffect(() => {
    if (mapRef.current && location.latitude && location.longitude) {
      mapRef.current.flyTo([location.latitude, location.longitude], 13);
    }
  }, [location]);

  const icon = new Icon({
    iconUrl: locationPin,
    iconSize: [50, 50],
    iconAnchor: [20, 55],
    popupAnchor: [0, 0],
  });

  return (
    <MapContainer 
        ref={mapRef} 
        center={[location.latitude, location.longitude]} 
        zoom={13} 
        scrollWheelZoom={false}
        zoomControl={'bottomleft'}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker 
        position={[location.latitude, location.longitude]} 
        icon={icon}>
      </Marker>
    </MapContainer>
  );
};



