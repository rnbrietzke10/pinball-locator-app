import React, { useState } from 'react';
import './App.css';
import GetLocationBtn from './components/GetLocationBtn';
import Map from './components/Map';
import SearchForm from './components/SearchForm';

// Photo by <a href="https://unsplash.com/@kylejeffreys?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kyle Johnson</a> on <a href="https://unsplash.com/photos/7dy20Hc1wWE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

function App() {
  const [location, setLocation] = useState({ lat: 48.8584, lng: 2.2945 });

  const getLocation = locationObj => {
    // Use locationObj, {lat, long}
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
