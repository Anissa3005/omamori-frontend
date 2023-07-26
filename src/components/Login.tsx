import { useState } from "react";
import Navbar from "./Navbar"
import { Navigate } from "react-router-dom";

function Login() {
    const [signUp, setSignUp] = useState<boolean>(false);

    if (signUp) {
        return <Navigate to={"/signup"} />
    }
    
    return (
        <>
        <Navbar />
        <form>
            <h1>Login</h1>
            <div>
                <label>email</label>
                <input type="email" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" />
            </div>
        </form>
        <p>Not a account yet <span onClick={() => setSignUp(!signUp)}>Sign up</span></p>
        </>
        
    )
}

export default Login;