import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'src/App.css';
import GetLocationBtn from 'src/components/GetLocationBtn/GetLocationBtn';
import Map from 'src/components/Map/Map';
import SearchForm from 'src/components/SearchForm/SearchForm';

function App() {
  // const BASE_URL = 'https://pinballmap.com/api/v1';
  const [location, setLocation] = useState({ lat: 48.8584, lng: 2.2945 });
  const [pinballData, setPinBallData] = useState([]);

  const getLocation = locationObj => {
    // Use locationObj, {lat, lng}
    setLocation(locationObj);
  };
  useEffect(() => {
    async function getPinballData() {
      const res = await axios.get(`/regions/closest_by_lat_lon.json`, {
        params: { lat: location.lat, lon: location.lng },
      });
      const regionLocationsData = await axios.get(
        `/region/${res.data.region.name}/locations.json`
      );
      console.log(regionLocationsData.data);
      // setPinBallData();
    }
    getPinballData();
  }, [location]);

  return (
    <div className='App-container'>
      <header className='App-header'>
        <h1>Locate A Pinball Machine Near You!</h1>
        <div className='container'>
          <SearchForm getLocation={getLocation} />
          <GetLocationBtn getLocation={getLocation} />
        </div>
      </header>
      <Map location={location} />
    </div>
  );
}

export default App;
