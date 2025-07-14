import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; 
import './Map.css';
import './Home.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FubmVkZG9jcmV3IiwiYSI6ImNtZDNwemMwYTA3Nngya29paGpkZGd1cTQifQ.zqgZy0q8PJVH9rA7VdSDog';

function Home() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [lng, setLng] = useState(-84.3733);
  const [lat, setLat] = useState(33.7550);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    if (mapInstance.current) return;

    mapInstance.current = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });

    mapInstance.current.on('move', () => {
      const center = mapInstance.current.getCenter();
      setLng(center.lng.toFixed(4));
      setLat(center.lat.toFixed(4));
      setZoom(mapInstance.current.getZoom().toFixed(2));
    });

    return () => {
      mapInstance.current.remove();
    };
  }, ); 

  return (
    <div className="home-container" style={{ padding: '20px' }}>
      <div className="main-content" style={{ display: 'flex', gap: '20px' }}>
        <div className="locations-list">
          <div className="location-card">Location 1</div>
          <div className="location-card">Location 2</div>
          <div className="location-card">Location 3</div>
          <div className="location-card">Location 4</div>
          <div className="location-card">Location 5</div>
          <div className="location-card">Location 6</div>
          <div className="location-card">Location 7</div>
          <div className="location-card">Location 8</div>
          <div className="location-card">Location 9</div>
          <div className="location-card">Location 10</div>
        </div>

        <div className="map-wrapper" style={{ flex: 1 }}>
          <div
            ref={mapRef}
            style={{
              width: '100%',
              height: '500px',
              border: '10px solid black',
              borderRadius: '4px',
            }}
          />
          <div className="map-info" style={{ marginTop: '10px' }}>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
