import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/headerFooterPage/Header'
import Footer from './components/headerFooterPage/Footer'
import About from './components/AboutPage/About'
import GetInvolved from './components/getInvolvedPage/GetInvolved'
import Home from './components/homePage/Home'
import RsrcList from './components/resourcesPage/RsrcList'

function App() {

    return (
        <BrowserRouter>
              <Header />
              <About />
              <Footer />
        </BrowserRouter>
    )
}

export default App
