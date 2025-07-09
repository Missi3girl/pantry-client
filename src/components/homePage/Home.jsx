import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-header">The Pantry Door</h1>

      /* Nav Bar */
      <div className="nav-bar">
        <a className="nav-item" href="/find-a-bank">Find a Bank</a>
        <a className="nav-item" href="/get-involved">Get Involved</a>
        <a className="nav-item" href="/about">About</a>
        <a className="nav-item" href="/contact">Contact</a>
      </div>

      /* Main Content (Locations + Map) */
      <div className="main-content">
        <div className="locations-list">
          <div className="location-card">Location 1</div>
          <div className="location-card">Location 2</div>
          <div className="location-card">Location 3</div>
          <div className="location-card">Location 4</div>
          <div className="location-card">Location 5</div>
        </div>

        /* Map and Search */
        <div className="map-section">
          <div className="map-box">MAP</div>
          <div className="search-bar">
            <label>SEARCH</label>
            <input type="text" placeholder="Search Pantry Location" />
            <button>GO</button>
          </div>
        </div>
      </div>

      
      <footer className="footer">Canned Do Crew, 2025</footer>
    </div>
  );
}

export default Home;