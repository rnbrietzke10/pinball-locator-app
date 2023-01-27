import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ getLocation }) => {
  const INITIAL_STATE = { lat: '', lng: '' };
  const [formData, setFormData] = useState(INITIAL_STATE);

  // Getvalues from inputs
  const handleSubmit = e => {
    e.preventDefault();
    const { lat, lng } = formData;
    getLocation({ lat: parseFloat(lat), lng: parseFloat(lng) });
    setFormData(INITIAL_STATE);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  return (
    <div className='SearchForm-container'>
      <form onSubmit={handleSubmit}>
        <div className='form-input-container'>
          <label htmlFor='lat'>Enter Latitude</label>
          <input
            id='lat'
            type='text'
            name='lat'
            value={formData.lat}
            placeholder='Enter Latitude'
            className='form-input'
            onChange={handleChange}
          />
        </div>
        <div className='form-input-container'>
          <label htmlFor='lng'>Enter Longitude</label>
          <input
            id='lng'
            type='text'
            name='lng'
            value={formData.lng}
            placeholder='Enter Longitude'
            className='form-input'
            onChange={handleChange}
          />
        </div>

        <button className='btn'>Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
