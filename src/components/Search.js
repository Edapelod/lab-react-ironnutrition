// src/components/FilterMovies.js

import { useState } from 'react';

function Search(props) {
  const [firstLetter, setFirstLetter] = useState('All');

  const handleSelect = (e) => {
    setFirstLetter(e.target.value);

    console.log('selected', e.target.value);
  };

  return (
    <div className="Filter">
      <label>Show food by first letter:</label>
      <form value={firstLetter} onChange={handleSelect}></form>
    </div>
  );
}

export default Search;
