import React, { useRef, useState, useEffect } from 'react';
import './Home.css';
import mapboxgl from 'mapbox-gl';
import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FubmVkZG9jcmV3IiwiYSI6ImNtY3dpbnJhYzAycGYybHBydGpmdHBpdG8ifQ.y3jyrF-ho57nklyYVfocWA';

function Home() {
  const mapContainer = useRef(null);
  const mapBox = useRef(null);
  const [lng, setLng] = useState(-84.3733); 
const [lat, setLat] = useState(33.7550);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    if (mapBox.current) return;

    mapBox.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    return () => mapBox.current.remove();
  }, []);

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

        <div>
          <div ref={mapContainer} style={{ width: '80%', height: '500px' }} />
          <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;