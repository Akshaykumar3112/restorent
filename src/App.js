import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Header from './components/Layout/Header';
import React, { useState } from 'react';
import Footer from './components/Footer';

function App() {

  const [mode, setMode] = useState('black');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('black');
    }else{
      setMode('light');
    }
  }

  return (
    <div>
      <BrowserRouter>
      <Header mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/restorent" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Pagenotfound /> } />
        </Routes>
        <Footer mode={mode} />
      </BrowserRouter>
    </div>
  );
}

export default App;
