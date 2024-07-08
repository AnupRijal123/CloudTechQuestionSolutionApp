import './Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleClick } from '../redux/action.js';
import { FaGithub } from "react-icons/fa";


function Navbar() {
    const toggleButtonClicked = useSelector((state) => {
        return state.toggleButtonClicked;
    });

    const makeToggle = useDispatch();

    const handleToggleClick = () => {
        makeToggle(toggleClick(!toggleButtonClicked));
    }

    return (
        <div className="navbar">
            <div className="link-div">
                <a href="https://github.com/AnupRijal123/CloudTechQuestionSolutionApp/tree/master">github code</a>
                <FaGithub />
            </div>
            <div onClick={handleToggleClick}
                className={`toggle-button-container 
                ${toggleButtonClicked === true && 'darkmode'}
                `}>
                <div
                    className={`circle-button 
                    ${toggleButtonClicked === true && 'move-to-right'}
                    ${toggleButtonClicked === false && 'move-to-left'}
                    `}
                >
                </div>

            </div>
        </div>
    )
}

export default Navbar;