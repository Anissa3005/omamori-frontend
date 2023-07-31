import { useState } from "react";
import Navbar from "./Navbar"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import {auth} from "../firebase-config"
import { UseGetUser } from "../hooks/post";

interface User {
    username: string,
    email: string
}

function SignUp() {
    // http://127.0.0.1:8000/
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorExist, setErrorExist] = useState<boolean>(false)

    const createPostUser = useMutation({
        mutationKey: ['user'],
        mutationFn: async(body: User ) => {
            const {data} = await axios.post('http://127.0.0.1:8000/user/', body)
            return data
        }
    })
    
    const {data} = UseGetUser();

    console.log(data)

    const handleUsername = () => {
        console.log("change")
    }
    


    const handleSignUp = async(e: React.MouseEvent): Promise<any> => {
        e.preventDefault()
        console.log("signup clicked");
        try {
        const register = await createUserWithEmailAndPassword(auth, email, password);
        createPostUser.mutate({
            username: username,
            email: email
        })

        console.log(register)
      
        } catch (error: any) {
            if (error.code === "auth/email-already-in-use") {
                setErrorExist(!errorExist);
            }
            console.log(`Failed with error code ${error.code}`)
            console.log(error.message)
        }
    }

   
    return (
        <>
            <Navbar />
            <h1>Sign up page</h1>
            {errorExist && (<p>User already exist</p>)}
            <form>
                <div>
                    <label>username</label>
                    <input type="text" onChange={handleUsername}/>
                </div>
                <div>
                    <label>email</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={handleSignUp}>Sign up</button>
            </form>
        </>
      
    )
}

export default SignUp;