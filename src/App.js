import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingscreen from './components/Landingscreen';
// import Woodie from './components/caseStudies/Woodie'
import './App.css';
import { Woodie } from './components/caseStudies/Woodie';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landingscreen />} />
        <Route exact path="woodie" element={<Woodie/>} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

document.title = 'AJ Portfolio'; // Set the title of the website

const link = document.createElement('link');
link.rel = 'icon';
link.href = 'favicon.ico'; // Set the path to your favicon file
document.head.appendChild(link); // Add the favicon to the document

export default App;
