import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landingscreen from './components/Landingscreen';
// import Woodie from './components/caseStudies/Woodie'
import './App.css';
import { Woodie } from './components/caseStudies/Woodie';

function App() {
  return (
    <BrowserRouter scrollRestoration="auto">
    <Routes>
      <Route path="/" element={<Landingscreen />} />
      <Route path="/woodie" element={<Woodie />} />
    </Routes>
  </BrowserRouter>
  );
}

document.title = 'AJ Portfolio'; // Set the title of the website

const link = document.createElement('link');
link.rel = 'icon';
link.href = 'favicon.ico'; // Set the path to your favicon file
document.head.appendChild(link); // Add the favicon to the document

export default App;
