import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import "./Dropdown.css"
interface Props {
    text: string
}

function Dropdown(props: Props){
    const {text} = props
    return (
        <div className="dropdown-box">
            <ul>
                <li className="menu-element">{text}</li>
            </ul>
        </div>
    )
}

export default Dropdown