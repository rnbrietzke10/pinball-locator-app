import React, { useEffect, useState } from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import axios from 'axios';
import myLocation from '../../assets/icons8-location-49.png';
import markerIcon from '../../assets/icons8-map-pin-40.png';
import './Map.css';

const Map = ({ location }) => {
  console.log('LOCATION: ', location);

  const [map, setMap] = useState(null);
  const [pinballData, setPinBallData] = useState([]);
  // Loads sciprt from the cdn
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  useEffect(() => {
    const getPinballData = async () => {
      setPinBallData([]);
      const res = await axios.get(`/regions/closest_by_lat_lon.json`, {
        params: { lat: location.lat, lon: location.lng },
      });
      const regionLocationsData = await axios.get(
        `/region/${res.data.region.name}/locations.json`
      );
      console.log(regionLocationsData.data);
      setPinBallData(regionLocationsData.data);
    };
    getPinballData();
  }, [location]);

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
        <Marker icon={myLocation} position={location} />
      </GoogleMap>
    </main>
  );
};

export default Map;
