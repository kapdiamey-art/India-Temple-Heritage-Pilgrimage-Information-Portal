import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import Temples from './pages/Temples.jsx'
import TempleDetails from './pages/TempleDetails.jsx'
import Festivals from './pages/Festivals.jsx'
import Circuits from './pages/Circuits.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temples" element={<Temples />} />
          <Route path="/temples/:id" element={<TempleDetails />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/circuits" element={<Circuits />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
