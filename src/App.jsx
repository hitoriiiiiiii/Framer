import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Button from './Pages/Button';
import Card from './Pages/Card';
import Box from './Pages/Box';
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
        <Route path="/box" element={<Box/>}/>        {/* Uncomment these when you have the pages created */}
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
