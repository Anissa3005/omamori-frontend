import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
// import { useGetUserByMail} from "../hooks/post";
import Login from "./Login";
import SignUp from "./SignUp";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import { userInfo } from "os";

// import "./Login_Modal.css"


function Home() {
    const [hamburger, setHamburger] = useState<boolean>(true);
    const [login, setLogin] = useState<boolean>(false);
    const [openLogin, setOpenLogin] = useState<boolean>(false);
    const [openSignUp, setOpenSignUp] = useState<boolean>(false);
    const [backHome, setBackHome] = useState<boolean>(false);
    const [signUp, setSignUp] = useState<boolean>(false);
    const [dropdown, setDropdown] = useState<boolean>(false);
    const {userName, userLoggedIn, setUserLoggedIn, setUserName, setUserId,} = useContext(UserContext);
    const [userEmail, setUserEmail] = useState<string | null>(null)

    // const {data: usersInfo, mutate, isSuccess } = useGetUserByMail();
    
    // useEffect(() => {
    //     if (usersInfo) {
    //         setUserName(usersInfo.username)
    //         setUserId(usersInfo.id);
    //     }
    // })
   
    // useEffect(() =>{
    //     if(userEmail) {
    //         mutate({
    //             email: userEmail
    //         });
    //     };
    // }, [userEmail])

    useEffect(() => {
        onAuthStateChanged(auth, (user) =>{
            if(user) {
                setUserLoggedIn(true)
                setUserEmail(user.email)
               
            } else {
                setUserLoggedIn(false)
            }
        })
    })

    if (login) {
        return <Navigate to={"/login"} />
    }

    if (backHome) {
        return <Navigate to={"/home"} />
    }

    if (signUp) {
        return <Navigate to={"/signup"} />
    }

    const handleDisplayDropdown = (): void =>{
        setDropdown(true)
    }

    const handleRemoveDisplayDropdown = (): void => {
        setDropdown(false)
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
                            ? ( <>
                                    <li className="nav-topic">{userName}</li>
                                    <li className="nav-topic" onClick={async() => await signOut(auth)}>Sign Out</li>
                                </>) 
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
                    ? (<li className="nav-topic" onMouseEnter={handleDisplayDropdown} onMouseLeave={handleRemoveDisplayDropdown}>{userName} {dropdown? <FontAwesomeIcon className="chevron-down" icon={faChevronDown} /> : <FontAwesomeIcon className="chevron-right" icon={faChevronRight} />}</li> )
                    : (<li className="nav-topic" onClick={() =>  setOpenLogin(true)}>Login</li>)}
                </ul>
            </header>
            {dropdown && <Dropdown text={"Sign Out"} onMouseEnter={handleDisplayDropdown} onMouseLeave={handleRemoveDisplayDropdown}/> }
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
                    <div className="overlay"/>
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