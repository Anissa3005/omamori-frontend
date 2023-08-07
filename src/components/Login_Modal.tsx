import React, {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import Login from "./Login";
import "./Login_Modal.css"

function LoginModal() {
    return (
        <div className="modal">
                <Login />
        </div>
    )
}

export default LoginModal;