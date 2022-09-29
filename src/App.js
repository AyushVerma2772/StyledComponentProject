import React from "react";
import './App.css'
import Home from "./components/Home";
import Navbar from './components/Navbar'
import Pricing from "./components/Pricing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route element={<Home />} path='/' />
          <Route element={<Pricing />} path='/pricing' />
          <Route element={<Contact />} path='/contact' />

        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;
