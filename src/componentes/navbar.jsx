import React, { useState } from 'react';
import './Navbarstyle.css';
import { FaUser } from "react-icons/fa";
import LoginForm from './LoginForm.jsx';

const Navbar = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <>
            <nav>
                <a href="index.html">
                    <img className="logo" src={require('../imagenes/logo.png')}
                        width="50px" length="50px" alt="logo">
                    </img>
                </a>
                
                <div>
                    <ul id="navbar">
                        <li><a className="active" href="index.html">Inicio</a></li>
                        <li><a href="index.html">Nosotros</a></li>
                        <li><a href="index.html">Contacto</a></li>
                        <li>
                            <button onClick={togglePopup} className="popup-button">
                                <FaUser className='icon' />
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            {showPopup && (
                <div className="popup-overlay" onClick={togglePopup}>
                    <div className="popup-content" onClick={e => e.stopPropagation()}>
                        <button className="close-button" onClick={togglePopup}>X</button>
                        <LoginForm />
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
