import './Navbar.css';
import { useState } from 'react';
function Navbar() {
    const [toggleButtonClicked, setToggleClicked] = useState(null);
    const handleToggleClick = () => {
        console.log('clicked');
        setToggleClicked(!toggleButtonClicked);
    }
    return (
        <div className="navbar">
            <h1>Navbar</h1>
            <div onClick={handleToggleClick} className="toggle-button-container">
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