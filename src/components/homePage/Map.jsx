/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Home.css';
import SearchBar from './SearchBar';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FubmVkZG9jcmV3IiwiYSI6ImNtZGNnanFpNTBiZmQybXB0ZGc0MDM5N3MifQ.133WS_o5Fa2HjK8ygpoi_g';

const Map = ({ selectedPantry, onMarkerClick }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const [lng, setLng] = useState(-84.3733);
  const [lat, setLat] = useState(33.7550);
  const [zoom, setZoom] = useState(10);
  const [locations, setLocations] = useState([]);
  const markersRef = useRef([]); 

  // Fetch pantry locations
  useEffect(() => {
    fetch('http://localhost:4000/api/pantries')
      .then((res) => res.json())
      .then((data) => {
        const mappedLocations = data.map(pantry => ({
          lng: pantry.lng,
          lat: pantry.lat,
          _id: pantry._id,
        }));
        setLocations(mappedLocations);
      })
      .catch((err) => console.error('Error loading pantry locations:', err));
  }, []);

  // Initialize map
  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    mapRef.current.on('move', () => {
      setLng(mapRef.current.getCenter().lng.toFixed(4));
      setLat(mapRef.current.getCenter().lat.toFixed(4));
      setZoom(mapRef.current.getZoom().toFixed(2));
    });

    return () => mapRef.current.remove();
  }, []); // Empty dependency to run only once

  // Create markers and handle marker click
  useEffect(() => {
    if (!mapRef.current || locations.length === 0) return;

    // Clean up previous markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    locations.forEach((location) => {
      // Ensure valid coordinates
      if (isNaN(location.lng) || isNaN(location.lat)) {
        console.error(`Invalid coordinates for pantry with ID: ${location._id}`);
        return;
      }

      const markerColor = location._id === selectedPantry ? 'purple' : 'gold';
      const marker = new mapboxgl.Marker({
        color: markerColor,
      })
        .setLngLat([location.lng, location.lat])
        .addTo(mapRef.current);

      // Add marker to the marker reference array
      markersRef.current.push(marker);

      // Event listener for click
      marker.getElement().addEventListener('click', () => {
        onMarkerClick(location);
        mapRef.current.flyTo({ center: [location.lng, location.lat], zoom: 14 });
      });
    });
  }, [locations, selectedPantry, onMarkerClick]); 

  // Function to search for the pantry by zip code
  const findClosestPantry = async (zipCode) => {
    if (!zipCode) return;

    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${zipCode}.json?access_token=${mapboxgl.accessToken}`;

    try {
      const response = await fetch(geocodeUrl);
      const data = await response.json();
      if (data.features.length > 0) {
        const { center } = data.features[0];
        const [newLng, newLat] = center;

        // Center map and add a marker at the new coordinates
        mapRef.current.flyTo({ center: [newLng, newLat], zoom: 12 });

        new mapboxgl.Marker({
          color: 'red',
        })
          .setLngLat([newLng, newLat])
          .addTo(mapRef.current);
      } else {
        console.error('No location found for the given zip code');
      }
    } catch (error) {
      console.error('Error fetching geocode:', error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '2em', paddingRight: '2em' }}>
        <div className="sidebar" style={{ padding: '0.5rem' }}>
          <h2 id="bankTitle">Find a Pantry</h2>
        </div>
        <SearchBar onSearch={findClosestPantry} /> {/* Search bar added */}
        <div
          ref={mapContainerRef}
          style={{ width: '90%', minHeight: '500px', flexGrow: 1 }}
        />
        <p id="longlat">Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}</p>
      </div>
    </div>
  );
};

export default Map;