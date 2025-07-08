import React from 'react'
import './Home.css';

function home() {
  return (
    <div className="home-container">
        <h1 className="home-header">The Pantry Door</h1>

        <div className="nav-bar">
            <div className="nav-item">Find a Bank</div>
             <div className="nav-item">Get Involved</div>
             <div className="nav-item">About</div>
         <div className="nav-item">Contact</div>
        </div>

        <div className="main-content">
          <div className="location-card"></div>
            <div className="location-card"></div>
            <div className="location-card"></div>
            <div className="location-card"></div>
            <div className="location-card"></div>
        </div>

    <div className="map-section">
        <div className="map-box">MAP</div>
        <div className="search-bar">
            <label>SEARCH</label>
            <input type="text" placeholder="Search Pantry Location"/>
            <button>GO</button>
         </div>
        </div>
    
    <div>
        <footer> Canned Do Crew, 2025 </footer>
    
    </div>
    
 </div>



  );
}

export default home;