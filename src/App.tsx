import React from 'react';
import logo from './logo.svg';
import Launch from './components/Launch';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './components/Home';
import RoutesComponent from './Routes';

function App() {
  return (
    <>
        <RoutesComponent />
    </>
  )
}

export default App;
