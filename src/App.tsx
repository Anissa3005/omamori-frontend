import React from 'react';
import { useContext, useState, useEffect} from "react"
import RoutesComponent from './Routes';
import {UserContext, UserContextProvider}  from './context/UserContext';
import { onAuthStateChanged } from 'firebase/auth';
import Login from './components/Login';
import { auth } from './firebase-config';

function App() {
  const {userLoggedIn, setUserLoggedIn} = useContext(UserContext);
  const [userTest, setUserTest] = useState(false)
  useEffect(() => {
    console.log(userLoggedIn)
  }, [userLoggedIn])

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
      if(user) {
        console.log("the currentUser is", user)
        setUserLoggedIn(true)
        
      } else {
        setUserLoggedIn(false)
      }
    })
  }, [])


  return (
   
    <UserContextProvider>
      <RoutesComponent />
    </UserContextProvider>
      
   
  )
}

export default App;
