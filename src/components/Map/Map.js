import React, { useEffect, useState } from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import myLocation from '../../assets/icons8-location-49.png';
import markerIcon from '../../assets/icons8-map-pin-40.png';
import './Map.css';

const Map = ({ location, pinballData }) => {
  console.log('LOCATION: ', location);
  console.log('Pinball data', pinballData.locations);
  const [map, setMap] = useState(null);

  // Loads sciprt from the cdn
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    // Create loader
    return <h2>Loading...</h2>;
  }

  return (
    <main id='Map-container'>
      <GoogleMap
        id='GoogleMap'
        center={location}
        zoom={15}
        mapContainerStyle={{ width: '80%', height: '80%' }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={map => setMap(map)}
      >
        {pinballData.locations
          ? pinballData.locations.map(marker => {
              return (
                <Marker
                  key={marker.id}
                  icon={markerIcon}
                  position={{
                    lat: parseFloat(marker.lat),
                    lng: parseFloat(marker.lon),
                  }}
                />
              );
            })
          : ''}
      </GoogleMap>
    </main>
  );
};

export default Map;
