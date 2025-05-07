import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import LandingPage from './pages/LandingPage';
import ScienceCommunication from './pages/ScienceCommunication';
import MediaDidactics from './pages/MediaDidactics';
import Publications from './pages/Publications';
import Vita from './pages/Vita';
import Impressum from './pages/Impressum';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <NavBar></NavBar>
    <div className="pt-26 px-0">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/science_communication" element={<ScienceCommunication />} />
          <Route path="/media_didactics" element={<MediaDidactics />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/vita" element={<Vita />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
    </div> 
    <Footer></Footer>
    </>
  )
}

export default App
