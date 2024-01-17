import React from 'react';
import './Popup.css'; // Create this CSS file for styling

function Popup({ message, onClose }) {
    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close" onClick={onClose}>&times;</span>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default Popup;
