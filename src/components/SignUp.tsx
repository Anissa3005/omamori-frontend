import { useState} from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useMutation} from "@tanstack/react-query";
import axios from "axios";
import {auth} from "../firebase-config"
import { UseGetUser} from "../hooks/post";
import "./SignUp.css"

interface User {
    username: string,
    email: string
}

function SignUp() {
    // http://127.0.0.1:8000/
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailError, setEmailError] = useState<boolean>(false);
    const [usernameError, setUsernameError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [signUpComplete, setSignUpComplete] = useState<boolean>(false);

   
    // POST new user
    const createPostUser = useMutation({
        mutationKey: ['user'],
        mutationFn: async(body: User ) => {
            const {data} = await axios.post('http://127.0.0.1:8000/user/', body)
            return data
        }
    });

    // GET USERS TO CHCECK IF USERNAME ALREADY EXIST
    const {data, isError, refetch} = UseGetUser(username);

    if (signUpComplete) {
        return <Navigate to={"/login"} />
    }
    
    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        let input: string = e.target.value
        setUsername(input);
        setUsernameError(false);
    };

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
        console.log("signup clicked");
        try {
        const emptyFields= checkEmptyFields(password, email, username);
        if (emptyFields) {
            console.log("one of the fields is empty")
            return;
        };
        //  CHECK IF USERNAME ALREADY TAKEN BEFORE SIGNING UP
        refetch();
        if (!isError) {
            console.log("it returns here")
            setUsernameError(true)
            return;
        };
        // MAKING POST REQ TO FIREBASE
        const register = await createUserWithEmailAndPassword(auth, email, password);

        // MAKING POST REQ TO BACKEND
        createPostUser.mutate({
            username: username,
            email: email
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
            console.log(error.message)
        }
    }

    const checkEmptyFields = (password: string, email: string, username: string): boolean => {
        if (password === "") setPasswordError(true);
        if (email === "") setEmailError(true);
        if (username === "") setUsernameError(true);

        return password === "" || email === "" || username === "";
    }

   
    return (
        <>
            <Navbar />
            <div className="form-container">
                <h1>Sign up page</h1>
                <form>
                    <div className="inputfield">
                        {/* <label>username</label> */}
                        {usernameError && (<p className="error-message">*This username is already taken</p>)}
                        <input className={usernameError ? "input-error" : "input"} type="text" onChange={handleUsername} placeholder="Username" required/>
                    </div>
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