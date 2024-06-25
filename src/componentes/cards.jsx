import React from 'react';
import './cardsStyle.css'
import { FaComments } from "react-icons/fa";
import { FaRobot, FaHandHoldingHeart, FaHeadset } from 'react-icons/fa6';
const Cards = () =>{
    return(
        <section class="container container-features">
            <div class="card-feature">
            <FaComments className='iconcard'/>
            <div class="feature-content">
                <span>¡Chatea!</span>
                <p>Ya sea para ayudar o ser ayudado</p>
            </div>
            </div>
            <div class="card-feature">
            <FaHandHoldingHeart className="iconcard" />
            <div class="feature-content">
                <span>Seguro</span>
                <p>Todo está certificado</p>
            </div>
            </div>
            <div class="card-feature">
            <FaRobot className="iconcard2" />
            <div class="feature-content">
                <span>Consulta</span>
                <p>Pregúntale a nuestra IA para obtener ejercicios Mindfulness</p>
            </div>
            </div>
            <div class="card-feature">
            <FaHeadset className="iconcard2" />
            <div class="feature-content">
                <span>Atención 24/7</span>
                <p>Si necesitas hablar con alguien ¡Estamos para ti!</p>
            </div>
            </div>
        </section>
    )
}

export default Cards