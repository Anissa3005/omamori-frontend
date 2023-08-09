import React from 'react';
import logo from './logo.svg';
import Launch from './components/Launch';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import RoutesComponent from './Routes';
import {UserContext, UserContextProvider}  from './context/UserContext';
import Login from './components/Login';

function App() {
  return (
   
    <UserContextProvider>
      <RoutesComponent />
    </UserContextProvider>
      
   
  )
}

export default App;
