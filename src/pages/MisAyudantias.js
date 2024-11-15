// src/pages/MisAyudantias.js
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
// Importamos el archivo CSS
import './MisAyudantias.css';

const MisAyudantias = () => {
  const [courses, setCourses] = useState([
  ]);

  useEffect(() => {
    const storedCourses = localStorage.getItem('postulaciones');
    if (storedCourses) {
      setCourses(JSON.parse(storedCourses));
    }
  }, []);

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
          {courses.length > 0 ? (
            courses.filter(course => course.status === 'Asignada').map((course) => (
              <div key={course.code} className="card" onClick={() => handleCardClick(course)}>
                <div className="card-image">
                  {/* Mostramos la imagen del curso */}
                  <img src={course.image} alt={`${course.code} icon`} />
                </div>
                <div className="card-content">
                  <h3>{course.code}</h3>
                  <p>{course.name}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-courses-message">No tienes ayudantías asignadas.</p>
          )}
        </div>

        {/* Modal */}
        {selectedCourse && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>{selectedCourse.name} ({selectedCourse.code})</h3>
              <p><strong>Horario:</strong> {selectedCourse.schedule}</p>
              <p><strong>Paralelo designado:</strong> {selectedCourse.parallel}</p>
              <p><strong>Profesor@/ingenier@ a cargo de los ayudantes:</strong> {selectedCourse.professor}</p>
              <button onClick={closeModal}>Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MisAyudantias;