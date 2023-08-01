import { useState, useEffect } from "react";
import Navbar from "./Navbar"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import {auth} from "../firebase-config"
import { UseGetUser } from "../hooks/post";
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
    const [errorExist, setErrorExist] = useState<boolean>(false);
    const [usernameExist, setUsernameExist] = useState<boolean>(false);
    const [weakPassword, setWeakPassword] = useState<boolean>(false);

    // useEffect(() => {
    //     console.log(username);
    // }, [username])

    const createPostUser = useMutation({
        mutationKey: ['user'],
        mutationFn: async(body: User ) => {
            const {data} = await axios.post('http://127.0.0.1:8000/user/', body)
            return data
        }
    })
    
    // CHECK IF USERNAME IS TAKEN OR NOT
    const {data, isError, refetch} = UseGetUser(username);

    const handleUsername = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        let input: string = e.target.value
        setUsername(input);
    };
    


    const handleSignUp = async(e: React.MouseEvent): Promise<any> => {
        e.preventDefault()
        console.log("signup clicked");
        try {
        //  CHECK IF USERNAME ALREADY TAKEN BEFORE SIGNING UP
        refetch();
        if (!isError) {
            setUsernameExist(!usernameExist)
            return;
        };
            
        
        // MAKING POST REQ TO FIREBASE
        const register = await createUserWithEmailAndPassword(auth, email, password);

        // MAKING POST REQ TO BACKEND
        createPostUser.mutate({
            username: username,
            email: email
        })

        } catch (error: any) {
            if (error.code === "auth/email-already-in-use") {
                setErrorExist(!errorExist);
            }

            if (error.code === "auth/weak-password") {
                setWeakPassword(!weakPassword)
            }
            console.log(`Failed with error code ${error.code}`)
            console.log(error.message)
        }
    }

   
    return (
        <>
            <Navbar />
            <div className="form-container">
                <h1>Sign up page</h1>
                {errorExist && (<p>User already exist</p>)}
                <form>
                    <div className="inputfield">
                        {/* <label>username</label> */}
                        <input className={usernameExist ? "input-error" : "input"} type="text" onChange={handleUsername} placeholder="Username"/>
                    </div>
                    <div className="inputfield">
                        {/* <label>email</label> */}
                        <input className={errorExist ? "input-error" : "input"} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
                    </div>
                    <div className="inputfield">
                        {/* <label>password</label> */}
                        <input className={weakPassword ? "input-error" : "input"} type= "password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                    </div>
                    <button className="signup-button" onClick={handleSignUp}>Sign up</button>
                </form>
            </div>
        </>
      
    )
}

export default SignUp;