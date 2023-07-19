import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";


function Home() {
    const [isLogin, setIsLogin] = useState<boolean>(true)
    const [hamburger, setHamburger] = useState<boolean>(true)
    return (
        <div>
            <header>
                <h2 className="header-title">Omamori Finder</h2>
                {hamburger ? (
                    <FontAwesomeIcon onClick={() => setHamburger(!hamburger)} className="hamburger-menu" icon={faBars} />
                ) : 
                (   
                    <div className="side-menu">
                        <div className="xmark-container">
                            <FontAwesomeIcon className="xmark"  onClick={() => setHamburger(!hamburger)} icon={faXmark} /> 
                        </div>
                        <ul className="nav-list">
                            <li className="menu-list">Login</li>
                            <li className="menu-list">About</li>
                        </ul>
                    </div> 
                )
                }
            </header>
        </div>
    )
};

export default Home;