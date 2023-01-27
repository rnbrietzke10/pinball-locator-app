import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import GetLocationBtn from './components/GetLocationBtn/GetLocationBtn';
import Map from './components/Map/Map';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  // const BASE_URL = 'https://pinballmap.com/api/v1';
  const [location, setLocation] = useState({ lat: 48.8584, lng: 2.2945 });

  const getLocation = locationObj => {
    // Use locationObj, {lat, lng}
    setLocation(locationObj);
  };

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
