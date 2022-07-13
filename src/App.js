import './App.css'
import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Store from './components/Store';
import Home from './components/Home';



const App = () => {

useEffect(()=>{

 
},[])
  return (
        <BrowserRouter>
      <div className="container">
        <Nav/>
      <Routes>
      <Route path="/origami69/Home" element={<Home/>} />
      <Route path="/Store" element={<Store/>} />
      </Routes>
      </div>
    </BrowserRouter>
   
  );
};

export default App;