import React, { useState } from 'react';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';

import 'src/components/Map/Map.css';

const Map = ({ location }) => {
  const [map, setMap] = useState(null);
  // Loads sciprt from the cdn

  const { isLoaded } = useJsApiLoader({
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
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
      ></GoogleMap>
    </main>
  );
};

export default Map;
