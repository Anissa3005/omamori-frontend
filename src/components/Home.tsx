import React, { useState } from "react";
import "./Home.css"

function Home() {
    const [isLogin, setIsLogin] = useState<boolean>(true)
    return (
        <div>
            <header>
                <h2 className="header-title">Omamori Finder</h2>
                <nav>
                    <ul className="nav-list">
                        {isLogin ? 
                            (<>
                                <li className="login-li">Username</li>
                            </>)
                        : <li className="not-login-li">login</li>
                        }
                        
                    </ul>
                </nav>
            </header>
        </div>
    )
};

export default Home;