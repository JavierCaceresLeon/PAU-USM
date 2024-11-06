// src/pages/MisAyudantias.js
import React, { useState } from 'react';
import Header from '../components/Header';

const MisAyudantias = () => {
  const [courses, setCourses] = useState([
    { code: 'ELO320', name: 'Ayudantía de Electrónica', status: 'Asignada' },
    { code: 'MAT021', name: 'Ayudantía de Matemáticas', status: 'Procesando' },
  ]);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [deletedCourseName, setDeletedCourseName] = useState('');

  const handleDeleteClick = (course) => {
    setCourseToDelete(course);
    setShowConfirmPopup(true); // Muestra el popup de confirmación
  };

  const confirmDelete = () => {
    setCourses(courses.filter((c) => c.code !== courseToDelete.code));
    setDeletedCourseName(courseToDelete.name);
    setShowConfirmPopup(false);
    setShowSuccessPopup(true); // Muestra el popup de éxito
  };

  const cancelDelete = () => {
    setCourseToDelete(null);
    setShowConfirmPopup(false);
  };

  return (
    <>
      <Header />
      <div className="mis-ayudantias-page">
        <h2>Mis Ayudantías</h2>
        <table>
          <thead>
            <tr>
              <th>Ayudantía</th>
              <th>Estado</th>
              <th>Renunciar/Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.code}>
                <td>{course.name}</td>
                <td>{course.status}</td>
                <td>
                  <button onClick={() => handleDeleteClick(course)}>🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Popup de Confirmación */}
        {showConfirmPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <p>¿Deseas eliminar la postulación a {courseToDelete.name}?</p>
              <button onClick={confirmDelete}>Aceptar</button>
              <button onClick={cancelDelete}>Cancelar</button>
            </div>
          </div>
        )}

        {/* Popup de Éxito */}
        {showSuccessPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <p>Se renunció exitosamente a la ayudantía: {deletedCourseName}</p>
              <button onClick={() => setShowSuccessPopup(false)}>Cerrar</button>
            </div>
          </div>
        )}
      </div>

      {/* Estilos */}
      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .popup-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
          text-align: center;
        }
        button {
          margin: 5px;
          padding: 8px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button:first-of-type {
          background-color: #d9534f;
          color: white;
        }
        button:last-of-type {
          background-color: #5bc0de;
          color: white;
        }
      `}</style>
    </>
  );
};

export default MisAyudantias;