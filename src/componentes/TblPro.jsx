import React, { useState } from "react";
import "./tblpro.css";

const PopupTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    { profesional: "Dr. Juan Pérez", especialidad: "Cardiología", horario: "8:00 AM - 2:00 PM" },
    { profesional: "Dra. María López", especialidad: "Dermatología", horario: "10:00 AM - 4:00 PM" },
    { profesional: "Lic. Carlos Gómez", especialidad: "Nutrición", horario: "9:00 AM - 3:00 PM" },
  ];

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleScheduleClick = () => {
    const days = Math.floor(Math.random() * 3) + 1; // Genera un número entre 1 y 3
    alert(`Cita programada para dentro de ${days} día(s).`);
    closePopup();
  };

  return (
    <div className="popup-container">
      <button onClick={openPopup} className="open-popup-button">
        Ver Tabla de Profesionales
      </button>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-popup-button" onClick={closePopup}>
              &times;
            </button>
            <table>
              <thead>
                <tr>
                  <th>Profesionales</th>
                  <th>Especialidades</th>
                  <th>Horarios</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.profesional}</td>
                    <td>{row.especialidad}</td>
                    <td>{row.horario}</td>
                    <td>
                      <button
                        onClick={handleScheduleClick}
                        className="schedule-button"
                      >
                        Agendar Cita
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupTable;
