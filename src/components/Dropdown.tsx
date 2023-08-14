import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { signOut } from "firebase/auth";
import "./Dropdown.css"
import { auth } from '../firebase-config';
interface Props {
    text: string,
    onMouseEnter: () => void,
    onMouseLeave: () => void
}

function Dropdown(props: Props){
    const {text, onMouseEnter, onMouseLeave} = props

    const handleSignOut =async () => {
        await signOut(auth)
    };

    return (
        <div className="dropdown-box" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <ul>
                <li className="menu-element" onClick={handleSignOut}>{text}</li>
            </ul>
        </div>
    )
}

export default Dropdown