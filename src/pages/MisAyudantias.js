// src/pages/MisAyudantias.js
import React, { useState } from 'react';
import Header from '../components/Header';

const MisAyudantias = () => {
  const [courses] = useState([
    { code: 'ELO320', name: 'Estructura de datos y algoritmos', schedule: 'Bloque 5-6', parallel: '1', professor: 'Profesor Ejemplo' },
    { code: 'MAT023', name: 'Matemática III', schedule: 'Bloque 3-4', parallel: '2', professor: 'Profesor Ejemplo' },
    { code: 'INF322', name: 'Diseño interfaces usuarias', schedule: 'Bloque 1-2', parallel: '3', professor: 'Profesor Ejemplo' },
  ]);

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCardClick = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  return (
    <>
      <Header />
      <div className="mis-ayudantias-page">
        <h2>Mis Ayudantías</h2>
        <div className="card-container">
          {courses.map((course) => (
            <div key={course.code} className="card" onClick={() => handleCardClick(course)}>
              <div className="card-image">
                <img src="https://via.placeholder.com/100" alt={`${course.code} icon`} />
              </div>
              <div className="card-content">
                <h3>{course.code}</h3>
                <p>{course.name}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCourse && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>{selectedCourse.name} ({selectedCourse.code})</h3>
              <p><strong>Horario:</strong> {selectedCourse.schedule}</p>
              <p><strong>Paralelo designado:</strong> {selectedCourse.parallel}</p>
              <p><strong>Profesor@/ingenier@ a cargo de los ayudantes:</strong> {selectedCourse.professor}</p>
              <button onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}
      </div>

      {/* Estilos */}
      <style jsx>{`
        .card-container {
          display: flex;
          gap: 16px;
          justify-content: center;
        }
        .card {
          width: 150px;
          background: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 8px;
          cursor: pointer;
          text-align: center;
          transition: transform 0.2s;
        }
        .card:hover {
          transform: scale(1.05);
        }
        .card-image {
          background-color: #ddd;
          padding: 16px;
        }
        .card-content {
          padding: 8px;
        }
        .modal-overlay {
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
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          width: 300px;
          text-align: center;
        }
        button {
          margin-top: 10px;
          padding: 8px 16px;
          background-color: #007ACC;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default MisAyudantias;