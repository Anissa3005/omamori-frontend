import { useState} from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useMutation} from "@tanstack/react-query";
import axios from "axios";
import {auth} from "../firebase-config"
import "./SignUp_Login.css"

interface User {
    uuid: string
}

function SignUp() {
    // http://127.0.0.1:8000/
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [signUpComplete, setSignUpComplete] = useState<boolean>(false);

   
    // MAKE POST REQUEST 
    const createPostUser = useMutation({
        mutationKey: ['user'],
        mutationFn: async(body: User ) => {
            const {data} = await axios.post('http://127.0.0.1:8000/user/', body)
            return data
        }
    });

    if (signUpComplete) {
        return <Navigate to={"/login"} />
    }

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();

        let input = e.target.value;
        setEmail(input);
        setEmailError(false);
    };

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();

        let input = e.target.value;
        setPassword(input);
        setPasswordError(false);
    }

    const handleSignUp = async(e: React.MouseEvent): Promise<any> => {
        e.preventDefault()
        try {
            const emptyFields= checkEmptyFields(password, email);

            if (emptyFields) {
                console.log("one of the fields is empty")
                return;
            };
        
            // MAKING POST REQ TO FIREBASE
            const newUser = await createUserWithEmailAndPassword(auth, email, password);

            // MAKING POST REQ TO BACKEND
            const senback = await createPostUser.mutate({
                uuid: newUser.user.uid
            })
            
            alert("creating account was succesful")
            setSignUpComplete(true);

        } catch (error: any) {
            if (error.code === "auth/email-already-in-use") {
                setEmailError(true);
            }

            if (error.code === "auth/weak-password") {
                setPasswordError(true)
            }
            console.log(`Failed with error code ${error.code}`)
            console.log('Error Message', error.message)
        }
    }

    const checkEmptyFields = (password: string, email: string): boolean => {
        if (password === "") setPasswordError(true);
        if (email === "") setEmailError(true);
        return password === "" || email === "" 
    }

    return (
        <>
            <div className="form-container">
                <h1 className="title-login-signup">Sign Up</h1>
                <form>
                    <div className="inputfield">
                        {/* <label>email</label> */}
                        {emailError && (<p className="error-message">*This email adress is already taken</p>)}
                        <input className={emailError ? "input-error" : "input"} type="email" onChange={handleEmail} placeholder="Email" required/>
                    </div>
                    <div className="inputfield">
                        {/* <label>password</label> */}
                        {passwordError&& (<p className="error-message">*Password is weak</p>)}
                        <input className={passwordError ? "input-error" : "input"} type= "password" onChange={handlePassword} placeholder="Password" required/>
                    </div>
                    {/* <button className="signup-button" onClick={handleSignUp}>Sign up</button> */}
                    <input type="submit" className="signup-button" onClick={handleSignUp} value="Sign up"/>
                </form>
            </div>
        </>
      
    )
}

export default SignUp;