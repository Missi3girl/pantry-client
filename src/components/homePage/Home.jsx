import React from 'react';
import Map from './Map'; 
import SearchBar from './SearchBar';

const Home = () => {
  return (
<<<<<<< HEAD
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
=======
    <div style={{ padding: '20px' }}>
      <h1>Pantry Door Map</h1>

      <div style={{ display: 'flex', gap: '40px' }}>
        
        <div style={{ width: '350px' }}>
          <div style={{ padding: '10px', backgroundColor: '#eee', marginBottom: '10px' }}>Location 1</div>
          <div style={{ padding: '10px', backgroundColor: '#eee', marginBottom: '10px' }}>Location 2</div>
          <div style={{ padding: '10px', backgroundColor: '#eee', marginBottom: '10px' }}>Location 3</div>
          <div style={{ padding: '10px', backgroundColor: '#eee', marginBottom: '10px' }}>Location 4</div>
          <div style={{ padding: '10px', backgroundColor: '#eee', marginBottom: '10px' }}>Location 5</div>
          <div style={{ padding: '10px', backgroundColor: '#eee', marginBottom: '10px' }}>Location 6</div>
          <div style={{ padding: '10px', backgroundColor: '#eee', marginBottom: '10px' }}>Location 7</div>
          <div style={{ padding: '10px', backgroundColor: '#eee', marginBottom: '10px' }}>Location 8</div>
          <div style={{ padding: '10px', backgroundColor: '#eee', marginBottom: '10px' }}>Location 9</div>
          <div style={{ padding: '10px', backgroundColor: '#eee', marginBottom: '10px' }}>Location 10</div>
        </div>

        <div style={{ flex: 1 }}>
          <Map />
          <SearchBar /> 
            
>>>>>>> fad78a1d79ce147eda1ed74ea3aa3a2ec8230f94
        </div>
      </div>
    </div>
    );
};




export default Home;