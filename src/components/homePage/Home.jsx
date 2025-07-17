import React from 'react';
import Map from './Map'; 
import SearchBar from './SearchBar';
import './Home.css'

const Home = () => {
  return (

     <div id="mainHome">
      <div className="locationList">
        <h2>Find a Pantry</h2>
          <div className="locationCard">Toco Hills Community Alliance </div>
          <div className="locationCard">Atlanta Community Food Bank</div>
          <div className="locationCard">Intown Cares</div>
          <div className="locationCard">Fountain of Hope, Inc.</div>
          <div className="locationCard">Food4Lives </div>
          </div>
                <div className="mapSection">
          <Map />
          <SearchBar /> 
                </div>
             </div>
    );
};




export default Home;