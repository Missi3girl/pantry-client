import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Home.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FubmVkZG9jcmV3IiwiYSI6ImNtZDNwemMwYTA3Nngya29paGpkZGd1cTQifQ.zqgZy0q8PJVH9rA7VdSDog';

const Map = () => {
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(-84.3733);
  const [lat, setLat] = useState(33.7550);
  const [zoom, setZoom] = useState(10);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:4000/api/pantries')
      .then((res) => res.json())
      .then((data) => {
        const mappedLocations = data
          .map(pantry => ({
            lng: pantry.lng,
            lat: pantry.lat
          }));

        setLocations(mappedLocations);
      })
      .catch((err) => console.error('Error loading pantry locations:', err));
  }, []);

    useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    locations.forEach(location => {
      new mapboxgl.Marker()
        .setLngLat([location.lng, location.lat])
        .addTo(map);
    });


    return () => map.remove();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '2em', paddingRight: '2em' }}>
      <div className="sidebar" style={{ padding: '0.5rem' }}>
        <h2 id="bankTitle">Find a Pantry</h2>
        <p id="longlat">Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}</p>
      </div>
      <div
        ref={mapContainerRef}
        style={{ width: '100%', minHeight: '600px', flexGrow: 1 }}
      />
    </div>
    </div>
  );
};

export default Map;