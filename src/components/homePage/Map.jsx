// UI component that displays the visual/interactive map

import React, {useRef, useEffect, useState} from 'react'
import mapboxgl from 'mapbox-gl'
import { Zoom } from '@mui/material';
import './Map.css'


mapboxgl.accessToken = 'pk.eyJ1IjoiY2FubmVkZG9jcmV3IiwiYSI6ImNtY3dpbnJhYzAycGYybHBydGpmdHBpdG8ifQ.y3jyrF-ho57nklyYVfocWA';

const Map = () => {
    const mapContainer = useRef(null);
    const mapBox = useRef(null);
    const [lng, setLng] = useState(84.38); 
    const [lat, setLat] = useState(33.75);
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
        <div>
            <div ref={mapContainer} style={{ width: '80%', height: '500px' }} />
            <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
        </div>
    );
};

export default Map;