import React from 'react';
import Map from './Map'; 
import SearchBar from './SearchBar';
import './Home.css'

const Home = () => {
  return (

     <div id="mainHome">
      <div className="locationList">
        <h2>Find a Pantry</h2>
          <div className="locationCard">Location 1</div>
          <div className="locationCard">Location 2</div>
          <div className="locationCard">Location 3</div>
          <div className="locationCard">Location 4</div>
          <div className="locationCard">Location 5</div>
          </div>
                <div className="mapSection">
          <Map />
          <SearchBar /> 
                </div>
             </div>
    );
};




export default Home;