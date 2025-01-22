import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'; // Import custom CSS

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route 
          path="/" 
          element={
            <div className="hero text-white text-center py-5">
              <div className="container">
                <h4 className="display-3">Welcome to My Portfolio</h4>
                <h2 className="lead">I'm Unnimaya</h2>
                
              </div>
            </div>
          } 
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;











