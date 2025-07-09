import { Routes, Route, useLocation} from 'react-router'
import './App.css'
import Header from './components/headerFooterPage/Header'
import Footer from './components/headerFooterPage/Footer'
import About from './components/AboutPage/About'

function App() {

    return (
        <>
              <Header />
              <About />
              <Footer />
        </>
    )
}

export default App
