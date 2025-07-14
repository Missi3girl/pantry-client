import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './Map.css';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FubmVkZG9jcmV3IiwiYSI6ImNtY3dpbnJhYzAycGYybHBydGpmdHBpdG8ifQ.y3jyrF-ho57nklyYVfocWA';

const Map = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [lng, setLng] = useState(-84.3733);
  const [lat, setLat] = useState(33.7550);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    if (!mapRef.current) return;

    mapInstance.current = new mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });

    mapInstance.current.on('move', () => {
      const center = mapInstance.current.getCenter();
      setLng(Number(center.lng.toFixed(4)));
      setLat(Number(center.lat.toFixed(4)));
      setZoom(Number(mapInstance.current.getZoom().toFixed(2)));
    });

    return () => {
      mapInstance.current.remove();
    };
  }, []);

  return (
    <div className="map-wrapper">
      <div ref={mapRef} className="map-container" />
      <div className="map-info">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
    </div>
  );
};

export default Map;
