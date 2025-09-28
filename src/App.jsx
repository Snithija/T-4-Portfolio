import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from "./pages/Portfolio";
// import About from "./pages/About";
import About from'./pages/About';
 
// when i am trying to install tailwind my system is not supporting 
// so i can't able to download it and make my website responsive 
// As of now i can only able to build desktop view dor this
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
