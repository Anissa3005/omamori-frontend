import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Login from "./Login";
import "./Login_Modal.css"

type Props = {
    isActive: boolean
}

function LoginModal() {
    const [show, setShow] = useState<boolean>(true);
    if (!show) return null;
    return (
        <>  
            {show && (
                <div className="overlay">
                    <div className="modal">
                     <FontAwesomeIcon className="xmark" icon={faXmark} onClick={() => setShow(false)}/>
                     <Login />
                    </div>
                </div>
            )
            }
           
        </>
       
    )
}

export default LoginModal;