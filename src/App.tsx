import React from 'react';
import { useContext, useState, useEffect} from "react"
import RoutesComponent from './Routes';
import {UserContext, UserContextProvider}  from './context/UserContext';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './components/Login';
import { auth } from './firebase-config';

function App() {
  return (
   
    <UserContextProvider>
      <RoutesComponent />
    </UserContextProvider>
      
   
  )
}

export default App;
