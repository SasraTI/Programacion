import React, { useState } from 'react';
import axios from 'axios';
import './registrostyle.css';
import { FaUser, FaLock } from "react-icons/fa";

const Registro = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación básica en el cliente
        if (password !== confirmPassword) {
            setMessage("Las contraseñas no coinciden.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/register", {
                username,
                password,
                confirmPassword
            });

            setMessage(response.data.message);

            if (response.status === 201) {
                // Limpia los campos después de un registro exitoso
                setUsername("");
                setPassword("");
                setConfirmPassword("");
            }
        } catch (error) {
            setMessage(error.response?.data?.message || "Error al registrar usuario.");
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Registrarse</h1>
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
                <div className="input-box">
                    <input 
                        type="password" 
                        placeholder="Confirmar Contraseña" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                    <FaLock className='icon' />
                </div>
                <p>
                    Título / Certificado
                </p>
                <div className="input-box">
                    <input 
                        type="file" 
                        placeholder="" 
                        required 
                    />
                    <FaLock className='icon' />
                </div>
                <button type="submit">Registrarme</button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
};

export default Registro;
