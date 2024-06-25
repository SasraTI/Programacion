import React, { useState } from 'react';
import './PopupStyle.css';
import Registro from './Registro';
import Registro2 from './Registro2.jsx';

const Popup = ({ handleClose }) => {
    const [showPopupPro, setShowPopupPro] = useState(false);

    const togglePopupPro = () => {
        setShowPopupPro(!showPopupPro);
    };
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    if ( showPopupPro ) {
        return(<div className="component1">
            {showPopupPro && <Registro />}
            <p></p>
            <button className="close-btn2" onClick={handleClose}>Cerrar</button>
        </div>)
    }

    if ( showPopup ) {
        return(<div className="component2">
            {showPopup && <Registro2 />}
            <p></p>
            <button className="close-btn2" onClick={handleClose}>Cerrar</button>
        </div>)
    }

    return (

        <div className="popup">
            <div className="popup-inner">
                <div className="input-box">
                    <h1>¿Cómo te gustaría registrarte?</h1>
                    <p>
                    🌸
                    </p>

                    <div className="button-group">
                        <button className="botoncito" onClick={togglePopupPro}>Profesional</button>
                        <button className="botoncito" onClick={togglePopup}>Usuario</button>
                    </div>
                    
                    <button className="close-btn" onClick={handleClose}>Cerrar</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
