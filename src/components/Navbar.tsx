import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
import LoginModal from "./Login_Modal";
import "./Navbar.css";


function Home() {
    const [hamburger, setHamburger] = useState<boolean>(true);
    const [login, setLogin] = useState<boolean>(false);
    const [openLogin, setOpenLogin] = useState<boolean>(false);

    if (login) {
        return <Navigate to={"/login"} />
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
                            <li className="nav-topic" onClick={() => setLogin(!login) }>Login</li>
                            <li className="nav-topic">About</li>
                        </ul>
                    </div> 
                <ul className="nav-list-desktop">
                    <li className="nav-topic" onClick={() => setOpenLogin(!openLogin)}>Login</li>
                    <li className="nav-topic">About</li>
                </ul>
            </header>
            {openLogin && (<LoginModal />)}
        </div>
    )
};

export default Home;