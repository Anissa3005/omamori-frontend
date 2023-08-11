import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Login from "./Login";
import SignUp from "./SignUp";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { signOut } from "firebase/auth";
// import "./Login_Modal.css"


function Home() {
    const [hamburger, setHamburger] = useState<boolean>(true);
    const [login, setLogin] = useState<boolean>(false);
    const [openLogin, setOpenLogin] = useState<boolean>(false);
    const [openSignUp, setOpenSignUp] = useState<boolean>(false);
    const [backHome, setBackHome] = useState<boolean>(false);
    const [signUp, setSignUp] = useState<boolean>(false);
    const [dropdown, setDropdown] = useState<boolean>(false);
    const {userName, userLoggedIn} = useContext(UserContext);

    // useEffect(() => {
    //     console.log("user logged in", userLoggedIn)
    //     console.log("username:", userName)
    // }, [userLoggedIn, userName])

    // useEffect(() => {
    //     console.log("open Signup is", openSignUp)
    // }, [openSignUp])

    if (login) {
        return <Navigate to={"/login"} />
    }

    if (backHome) {
        return <Navigate to={"/home"} />
    }

    if (signUp) {
        return <Navigate to={"/signup"} />
    }

    return (
        <div>
            <header>
                <h2 className="header-title">Omamori Finder</h2>
                    <FontAwesomeIcon onClick={() => setHamburger(!hamburger)} className="hamburger-menu" icon={faBars} />
                    <div className="side-menu" style={!hamburger ? {width: '60%'} : {width: 0, border: "none"}}>
                        <div className="xmark-container">
                            <FontAwesomeIcon className="xmark"  onClick={() => setHamburger(!hamburger)} icon={faXmark} /> 
                        </div>
                        <ul className="nav-list">
                            {userLoggedIn
                            ? (<li className="nav-topic">{userName}</li>) 
                            : ( <>
                                    <li className="nav-topic" onClick={() => setLogin(true)}>Login</li>
                                    <li className="nav-topic"  onClick={() => setSignUp(true)}>Sign Up</li>
                                </>
                            )}
                            
                            <li className="nav-topic">About</li>
                            <li className="nav-topic" onClick={() => setBackHome(true)}>Home</li>
                        </ul>
                    </div> 
                <ul className="nav-list-desktop">
                    <li className="nav-topic">About</li>
                    {userLoggedIn 
                    ? (<li className="nav-topic" onClick={() => setDropdown(!dropdown)}>{userName} <FontAwesomeIcon icon={faChevronDown} /></li> )
                    : (<li className="nav-topic" onClick={() =>  setOpenLogin(true)}>Login</li>)}
                </ul>
            </header>
            {dropdown && <Dropdown text={"Sign Out"}/> }
            {openLogin && (
                <>
                    <div className={userLoggedIn ? "logged-in" : "overlay"} onClick={() => setOpenLogin(false)} />
                    <div className={userLoggedIn ? "logged-in" : "modal"}>
                        <FontAwesomeIcon className="xmark" icon={faXmark} onClick={() => setOpenLogin(false)}/>
                        <Login />
                        <p className="no-account-text">Not a account yet <span className="create-account" onClick={() => {setOpenSignUp(true); setOpenLogin(false)}}>Sign up</span></p>
                    </div>
                </>
            
             )}
             {openSignUp && (
                <>
                    <div className="overlay" onClick={() => setOpenSignUp(false)} />
                    <div className="modal">
                        <FontAwesomeIcon className="xmark" icon={faXmark} onClick={() => setOpenSignUp(false)}/>
                        <SignUp />
                        <p className="no-account-text">Already an account <span className="create-account" onClick={() => {setOpenLogin(true); setOpenSignUp(false);}}>Login</span></p>
                    </div>
                </>
               
               
             )}
        </div>
    )
};

export default Home;