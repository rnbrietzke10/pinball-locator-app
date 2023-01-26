import React from 'react';

const SearchForm = () => {
  // Getvalues from inputs
  const handleSubmit = (e) => {
    e.preventDefault();
    // Make api call to get closest region

    // make api call to get pinball machines in area
  };

  const getCurrentLocation = () => {
    // Use Google API to ge users longitude and latitude.
    // Set value of inputs to above long and lat.
    // Search pinball api for closest region.
    // Search pinball api for machines in that region.
  };
  return (
    <div className="SearchForm-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Longitude</label>
          <input />
        </div>
        <div>
          <label>Enter Latitude</label>
          <input />
        </div>
        <button>Search</button>
      </form>
      <div>
        <button onClick={getCurrentLocation}>Use My Location</button>
      </div>
    </div>
  );
};

export default SearchForm;
