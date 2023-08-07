import Login from "./Login";
import Navbar from "./Navbar";
import { Navigate } from "react-router-dom";

function LoginMobile() {
    return (
        <>
            <Navbar />
            <Login />
        </>
    )
}

export default LoginMobile;