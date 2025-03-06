import React from 'react';

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <div className="search">
        <div>
          <img src="/src/assets/search.svg" alt="search-logo" />
          <input
            type="text"
            placeholder="Search Trough Thousends of Movies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
