import React from 'react';
import './Loginform.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action="">
               <h1>Iniciar sesión</h1>
               <div className="input-box">
                
                 <input type="text" placeholder="Usuario" required/>
                 <FaUser className='icon'/>
               </div>
               <div className="input-box">
                 <input type="password" placeholder="Contraseña" required/>
                 <FaLock className='icon'/>
                
               </div>

               <div className="remember-forgot">
                <label><input type="checkbox" />Recordarme</label>
                <a href="google.com">Olvide mi Contraseña</a>
               </div>

               <button type="submit">Entrar</button>
               <div className="register-link">
                <p> ¿No tienes una cuenta? <a href="google.com">Registrarme</a></p>
               </div>
            </form>
        </div>
    )
}

export default LoginForm;