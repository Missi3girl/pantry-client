import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/headerFooterPage/Header'
import Footer from './components/headerFooterPage/Footer'
import About from './components/aboutPage/About'
import GetInvolved from './components/getInvolvedPage/GetInvolved'
import Home from './components/homePage/Home'
import RsrcList from './components/resourcesPage/RsrcList'

function App() {

    return (
        <BrowserRouter>
              <Header />
<<<<<<< HEAD
                <Routes>
=======

              <Routes>
>>>>>>> 0c2dea39912b0c5588c7d2e80dd1a80f5c8319d3
                <Route path="/" element={<Home />} />
                <Route path="/getinvolved" element={<GetInvolved />} />
                <Route path="/about" element={<About />} />
                <Route path="/resources" element={<RsrcList />} />
              </Routes>
              <Footer />
        </BrowserRouter>
    )
}

export default App


