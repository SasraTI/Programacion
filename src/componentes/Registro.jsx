import React from 'react';
import './registrostyle.css';
import { FaUser, FaLock, FaIdCard } from "react-icons/fa";

const Registro = () => {
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
               <p className='Titulo'>Título o certificado <FaIdCard className='icon'/></p>
               <div className="input-box2">
                 <input type="file" placeholder="Título" required/>
                 
                
               </div>
<p></p>
               <button type="submit">Registrarme</button>
            </form>
        </div>
    )
}

export default Registro;