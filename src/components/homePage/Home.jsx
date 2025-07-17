import React from 'react';
import Map from './Map'; 
import SearchBar from './SearchBar';
import './Home.css'

const Home = () => {
  return (

     <div id="mainHome">
      <div className="locationList">
        <h2>Find a Pantry</h2>
          <div className="locationCard"><h3>Toco Hills Community Alliance </h3></div>
          <div className="locationCard"><h3>Atlanta Community Food Bank</h3></div>
          <div className="locationCard"><h3>Intown Cares</h3></div>
          <div className="locationCard"><h3>Fountain of Hope, Inc.</h3></div>
          <div className="locationCard"><h3>Food4Lives</h3></div>
          </div>
                <div className="mapSection">
          <Map />
          <SearchBar /> 
                </div>
             </div>
    );
};




export default Home;