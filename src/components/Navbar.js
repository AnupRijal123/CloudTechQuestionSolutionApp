import './Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleClick } from '../redux/action.js';

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
            <h2>Navbar</h2>
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