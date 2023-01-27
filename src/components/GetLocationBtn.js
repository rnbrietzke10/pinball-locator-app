import React from 'react';

import myLocationIcon from '../assets/icons8-location-49.png';

const GetLocationBtn = ({ getLocation }) => {
  // Use Google API to ge users longitude and latitude.

  const getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, posError); // Passing in a success callback and an error callback fn
    } else {
      alert('Sorry, Geolocation is not supported by this browser.'); // Alert is browser does not support geolocation
    }
  };
  // Geolocation error callback fn. Query permissions to check if the error occured due to user not allowing location to be shared
  const posError = () => {
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' }).then(res => {
        if (res.state === 'denied') {
          alert(
            'Enable location permissions for this website in your browser settings.'
          );
        }
      });
    } else {
      alert(
        'Unable to access your location. You can continue by submitting location manually.'
      );
    }
  };
  // Geolocation success callback fn
  const showPosition = async position => {
    let latitude = await position.coords.latitude; // You have obtained latitude coordinate
    let longitude = await position.coords.longitude; // You have obtained longitude coordinate
    getLocation({ lat: latitude, lng: longitude });
  };
  return (
    <button className='btn' onClick={getPosition}>
      Use My location
      <img
        style={{ height: '15px' }}
        src={myLocationIcon}
        alt='Use your location to find pinball machines'
      />
    </button>
  );
};

export default GetLocationBtn;
