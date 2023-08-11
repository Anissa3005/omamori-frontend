import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useMutation} from "@tanstack/react-query";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase-config"
import axios from "axios";
import { useGetUserByMail } from "../hooks/post";
import { UserContext } from "../context/UserContext";


function Login() {
    const [signUp, setSignUp] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [userNotExist, setUserNotExist] = useState<boolean>(false);
    const [loginSuccesful, setLoginSuccesful] = useState<boolean>(false);
    const {setUserName, setUserId, setUserLoggedIn} = useContext(UserContext);

    const {data: usersInfo,  mutate, isSuccess } = useGetUserByMail();

    if (isSuccess) {
        setUserName(usersInfo.username)
        setUserId(usersInfo.id)
    }

    if (signUp) {
        return <Navigate to={"/signup"} />
    }

    if (loginSuccesful) {
        return <Navigate to={"/home"} />
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
            mutate({email: email})
           
            // alert("login was succesful")
            setLoginSuccesful(true);

        } catch (error: any) {
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
        </div>
        </>
        
    )
}

export default Login;