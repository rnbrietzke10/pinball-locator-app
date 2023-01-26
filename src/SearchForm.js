import React from 'react';

const SearchForm = () => {
  return (
    <div className="SearchForm-container">
      <form>
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
        <button>Use My Location</button>
      </div>
    </div>
  );
};

export default SearchForm;
