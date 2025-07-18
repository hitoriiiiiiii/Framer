import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Button from './Pages/Button';
import Card from './Pages/Card';
import ParticleRing from './Pages/Ring';
import Example from './Pages/Phone'
// import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Home Route */}
        <Route path="/" element={<HomePage />} />

        {/* Other Routes */}
        <Route path="/button" element={<Button />} />
        <Route path="/card" element={<Card/>}/>
        <Route path="/ring" element={<ParticleRing/>}/>        {/* Uncomment these when you have the pages created */}
        <Route path="/phone" element={<Example />} />
      </Routes>
    </Router>
  );
}

export default App;
