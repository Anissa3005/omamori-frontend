import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import "./Dropdown.css"
interface Props {
    text: string,
    onMouseEnter: () => void,
    onMouseLeave: () => void
}

function Dropdown(props: Props){
    const {text, onMouseEnter, onMouseLeave} = props
    return (
        <div className="dropdown-box" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <ul>
                <li className="menu-element">{text}</li>
            </ul>
        </div>
    )
}

export default Dropdown