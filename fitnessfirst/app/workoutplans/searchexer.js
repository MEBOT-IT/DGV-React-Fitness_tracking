'use client';
import { useEffect, useState } from "react"
import React from 'react';
import './searchbar.css'
const Searchexe = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching for:", searchTerm);
  };

  return (
    <div>
      <h1 className="title">Awesome Workout Plans For You</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Workout Plans......"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
    </div>
  );
};

export default Searchexe;
