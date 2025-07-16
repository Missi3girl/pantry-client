import React from 'react';
import Map from './Map'; 
import SearchBar from './SearchBar';

const Home = () => {
  return (
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
            
        </div>
      </div>
    </div>
    );
};




export default Home;