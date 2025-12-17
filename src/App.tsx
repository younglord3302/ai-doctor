import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Dashboard from './pages/Dashboard';
import SimulatedChat from './components/SimulatedChat';

import Features from './components/Features';
import Footer from './components/Footer';

// Placeholder components until we build them
const Home = () => (
  <>
    <Hero />
    <Features />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chat" element={<SimulatedChat />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
