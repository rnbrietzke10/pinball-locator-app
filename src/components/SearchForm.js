import React, { useState } from 'react';

const SearchForm = ({ getLocation }) => {
  const INITIAL_STATE = { lat: '', long: '' };
  const [formData, setFormData] = useState(INITIAL_STATE);
  // Getvalues from inputs
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    getLocation(formData);
    setFormData(INITIAL_STATE);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };
  const geUserLocation = () => {
    // Use Google API to ge users longitude and latitude.
    // Set value of inputs to above long and lat.

    getLocation();
  };
  return (
    <div className="SearchForm-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="lat">Enter Latitude</label>
          <input
            id="lat"
            type="text"
            name="lat"
            value={formData.lat}
            placeholder="Enter Latitude"
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="long">Enter Longitude</label>
          <input
            id="long"
            type="text"
            name="long"
            value={formData.long}
            placeholder="Enter Longitude"
            className="form-input"
            onChange={handleChange}
          />
        </div>

        <button>Search</button>
      </form>
      <div>
        <button onClick={geUserLocation}>Use My Location</button>
      </div>
    </div>
  );
};

export default SearchForm;
