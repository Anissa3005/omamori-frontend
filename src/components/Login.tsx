import { useState } from "react";
import { Navigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase-config"


function Login() {
    const [signUp, setSignUp] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [userNotExist, setUserNotExist] = useState<boolean>(false);

    if (signUp) {
        return <Navigate to={"/signup"} />
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        let input = e.target.value;
        setEmail(input);
        setUserNotExist(false);
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
            // auth/invalid-email
            if (error.code === "auth/invalid-email") {
                setUserNotExist(true);
            }
            console.log("firebase error message", error.message)
            console.log("firebase error code", error.code)
        }
    }

    return (
        <>
        <div className="form-container">
            <h1 className="title-login-signup">Login</h1>
            <form>
                <div>
                    {userNotExist && (<p className="error-message">*User doesn't exist</p>)}
                    <input className={userNotExist ? "input-error" : "input"} type="email" onChange={handleEmail} placeholder="Email"/>
                </div>
                <div>
                    <input className="input" type="password" onChange={handlePassword} placeholder="Password"/>
                </div>
                <input  className="signup-button" type="submit" onClick={handleLogin} value="Login"/>
            </form>
            <p className="no-account-text">Not a account yet <span className="create-account" onClick={() => setSignUp(true)}>Sign up</span></p>
        </div>
        </>
        
    )
}

export default Login;