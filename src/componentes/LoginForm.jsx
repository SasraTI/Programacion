import React, { useState } from 'react';
import axios from 'axios';
import './Loginform.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/login", { 
                username, 
                password 
            });

            setMessage(response.data.message);
            if (response.status === 200) {
                // Manejar inicio de sesión exitoso
                console.log("Usuario autenticado:", response.data.user);
            }
        } catch (error) {
            setMessage(error.response?.data?.message || "Error al iniciar sesión");
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Iniciar sesión</h1>
                <div className="input-box">
                    <input 
                        type="text" 
                        placeholder="Usuario" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder="Contraseña" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <FaLock className='icon' />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Recordarme</label>
                    <a href="google.com">Olvide mi Contraseña</a>
                </div>
                <button type="submit">Entrar</button>
                {message && <p className="message">{message}</p>}
                <div className="register-link">
                    <p>¿No tienes una cuenta? <a href="google.com">Registrarme</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
