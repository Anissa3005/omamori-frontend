import React from 'react';
import logo from './logo.svg';
import './App.css';
import Launch from './components/Launch';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Launch />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
