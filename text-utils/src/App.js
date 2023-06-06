import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Textbox from './Textbox';

import News from './News';
import Contact from './Contact';
import About from './About';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className={`container1 ${mode === 'dark' ? 'dark-mode' : ''}`}>
        <Routes>
          <Route path="/" element={<Textbox heading="Text Utils" />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
