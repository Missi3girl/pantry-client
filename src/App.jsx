import { useRef, useState, useEffect } from 'react'
import './App.css'
import Header from './components/headerFooterPage/Header'
import Footer from './components/headerFooterPage/Footer'
import About from './components/AboutPage/About'
import Home from './components/homePage/Home'
import Map from 'react-map-gl/mapbox'
import mapboxgl from 'mapbox-gl'

function App() {

    return (
        <>
              <Header />
              <Home />
              <Map />
             <About />
              <Footer />
        </>
    )
}

export default App
