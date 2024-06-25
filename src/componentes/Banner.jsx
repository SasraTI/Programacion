import React, { useState } from 'react';
import './BannerStyle.css'
import Popup from './Popup';


const Banner = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <section className="banner">
            <div className="content-banner">
                <h2>Tu lugar seguro</h2>
                <p>¿Buscas solo desahogarte? ¿O buscas ayuda?</p>
                <button className="botoncito" onClick={togglePopup}>Comienza ahora</button>
                {showPopup && <Popup handleClose={togglePopup} />}
            </div>
        </section>
    );
};

export default Banner;