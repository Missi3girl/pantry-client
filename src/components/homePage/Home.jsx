import React, { useEffect, useState } from 'react';
import PantryCard from './PantryCard';
import Map from './Map';
import SearchBar from './SearchBar';
import './Home.css';

function Home() {
  const [pantries, setPantries] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/pantries') 
      .then((res) => res.json())
      .then((data) => setPantries(data))
        
      .catch((err) => console.error('Error fetching pantries:', err));
  }, []);

  
  return (
    <div className="container">
      <div id="mainHome">
        <div className="locationList">
          <p id="moreInfo">Click a pantry for more information.</p>
          {pantries.map((pantry) => (
            <PantryCard key={pantry._id} pantry={pantry} />
          ))}
        </div>
        <div className="mapSection">
          <Map />
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default Home;
