import { useState } from "react";
import Navbar from "./Navbar"
import { Navigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase-config"


function Login() {
    const [signUp, setSignUp] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    if (signUp) {
        return <Navigate to={"/signup"} />
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        let input = e.target.value;
        setEmail(input);
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        let input = e.target.value;
        setPassword(input);
    }

    const handleLogin =async (e: React.MouseEvent): Promise<void> => {
        e.preventDefault();
        try {
            const login = await signInWithEmailAndPassword(auth, email, password)
            alert("login was succesful")
        } catch (error: any) {
            console.log("firebase error message", error.message)
        }
    }

    return (
        <>
        <Navbar />
        <form>
            <h1>Login</h1>
            <div>
                <label>email</label>
                <input type="email" onChange={handleEmail} placeholder="Email"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={handlePassword} placeholder="Password"/>
            </div>
            <input type="submit" onClick={handleLogin}/>
        </form>
        <p>Not a account yet <span onClick={() => setSignUp(!signUp)}>Sign up</span></p>
        </>
        
    )
}

export default Login;