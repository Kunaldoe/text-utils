import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import "./Navbar.css";
import Textbox from "./Textbox";
import Home from "./Home";
import News from "./News";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <Navbar title="Text-Utils" />
      <div className="container">
        <Routes>
          <Route path="/" element={<Textbox heading="This is a prop" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
