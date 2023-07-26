import { useState } from "react";
import Navbar from "./Navbar"
function SignUp() {
    // http://127.0.0.1:8000/
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const register = async(): Promise<any> => {

    }
    return (
        <>
            <Navbar />
            <h1>Sign up page</h1>
            <form>
                <div>
                    <label>username</label>
                    <input type="text" />
                </div>
                <div>
                    <label>email</label>
                    <input type="email" />
                </div>
                <div>
                    <label>password</label>
                    <input type="password" />
                </div>
            </form>
        </>
      
    )
}

export default SignUp;