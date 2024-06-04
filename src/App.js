import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Header from './components/Layout/Header';
import React from 'react';
import Footer from './components/Footer';
import CartContextProvider from './context/CartContextProvider';
import Cart from './pages/Cart';
function App() {

  
  
  return (
    <div>
      <BrowserRouter>
      <CartContextProvider>
      <Header  />
        <Routes>
          <Route path="/restorent" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Pagenotfound /> } />
        </Routes>
        <Footer  />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
