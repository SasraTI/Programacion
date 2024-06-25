import React from 'react';
import './registrostyle2.css';
import { FaUser, FaLock } from "react-icons/fa";

const Registro2 = () => {
    return (
        <div className='wrapper'>
            <form action="">
               <h1>Registrarse</h1>
               <div className="input-box">
                
                 <input type="text" placeholder="Usuario" required/>
                 <FaUser className='icon'/>
               </div>
               <div className="input-box">
                 <input type="password" placeholder="Contraseña" required/>
                 <FaLock className='icon'/>
                
               </div>
               <div className="input-box">
                 <input type="password" placeholder="Confirmar Contraseña" required/>
                 <FaLock className='icon'/>
                
               </div>

               <button type="submit">Registrarme</button>
            </form>
        </div>
    )
}

export default Registro2;