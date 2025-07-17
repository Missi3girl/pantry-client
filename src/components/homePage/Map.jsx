import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FubmVkZG9jcmV3IiwiYSI6ImNtZDNwemMwYTA3Nngya29paGpkZGd1cTQifQ.zqgZy0q8PJVH9rA7VdSDog';

const Map = () => {
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(-84.3733);
  const [lat, setLat] = useState(33.7550);
  const [zoom, setZoom] = useState(10);

  const locations = [
    { lng: -84.3537, lat: 33.7743 },
    { lng: -84.3287, lat: 33.8186 },
    { lng: -84.49421, lat: 33.66182 },
    { lng: -84.45113182883547, lat: 33.778164832266384 },
    { lng: -84.4247, lat: 33.8002 },

  ];

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
  }, [lng, lat, zoom]);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '800px'}}>
      <div className="sidebar" style={{ padding: '0.5rem' }}>
        <p id="longlat">Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}</p>
      </div>
      <div
        ref={mapContainerRef}
        style={{ width: '100%', flexGrow: 1 }}
      />
    </div>
    </div>
  );
};

export default Map;