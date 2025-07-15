import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">

      <div className="main-content">
        <div className="locations-list">
          <div className="location-card">Location 1</div>
          <div className="location-card">Location 2</div>
          <div className="location-card">Location 3</div>
          <div className="location-card">Location 4</div>
          <div className="location-card">Location 5</div>
        </div>

        <div className="map-section">
          <div className="map-box">MAP</div>
          <div className="search-bar">
            <label>Search</label>
            <input type="text" placeholder="Search Pantry Location By Zip Code" />
            <button>GO</button>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Home;