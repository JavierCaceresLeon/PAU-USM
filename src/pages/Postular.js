import React, { useState } from 'react';
import Header from '../components/Header';
import './Postular.css';
import Swal from 'sweetalert2';


const courses = [
    { code: 'MAT021', name: 'Matemática I', schedule: 'Bloque 1-2', parallel: '1', professor: 'Juan', type: 'docencia', depto: 'matemática' },
    { code: 'MAT022', name: 'Matemática II', schedule: 'Bloque 3-4', parallel: '1', professor: 'María', type: 'docencia', depto: 'matemática' },
    { code: 'MAT023', name: 'Álgebra Lineal', schedule: 'Bloque 5-6', parallel: '1', professor: 'Luis', type: 'docencia', depto: 'matemática' },
    { code: 'MAT024', name: 'Cálculo Multivariable', schedule: 'Bloque 7-8', parallel: '1', professor: 'Ana', type: 'docencia', depto: 'matemática' },
    { code: 'FIS101', name: 'Física General', schedule: 'Bloque 1-2', parallel: '1', professor: 'Carlos', type: 'docencia', depto: 'física' },
    { code: 'FIS102', name: 'Electromagnetismo', schedule: 'Bloque 3-4', parallel: '1', professor: 'Elena', type: 'docencia', depto: 'física' },
    { code: 'CS101', name: 'Introducción a la Programación', schedule: 'Bloque 5-6', parallel: '1', professor: 'Diego', type: 'docencia', depto: 'computación' },
    { code: 'CS102', name: 'Estructuras de Datos', schedule: 'Bloque 7-8', parallel: '1', professor: 'Laura', type: 'docencia', depto: 'computación' },
    { code: 'CS103', name: 'Sistemas Operativos', schedule: 'Bloque 1-2', parallel: '1', professor: 'Andrés', type: 'docencia', depto: 'computación' },
    { code: 'HIS101', name: 'Historia Universal', schedule: 'Bloque 3-4', parallel: '1', professor: 'Roberto', type: 'docencia', depto: 'historia' },
    { code: 'QUI101', name: 'Química General', schedule: 'Bloque 5-6', parallel: '1', professor: 'Patricia', type: 'docencia', depto: 'química' },
    { code: 'QUI102', name: 'Química Orgánica', schedule: 'Bloque 7-8', parallel: '1', professor: 'Miguel', type: 'docencia', depto: 'química' },
    { code: 'ADM001', name: 'Gestión Financiera', schedule: 'Bloque 1-2', parallel: '1', professor: 'Claudia', type: 'administrativa', depto: 'finanzas' },
    { code: 'ADM002', name: 'Recursos Humanos', schedule: 'Bloque 3-4', parallel: '1', professor: 'Fernando', type: 'administrativa', depto: 'administración' },
    { code: 'ADM003', name: 'Planificación Estratégica', schedule: 'Bloque 5-6', parallel: '1', professor: 'Gloria', type: 'administrativa', depto: 'planificación' },
    { code: 'INV101', name: 'Inteligencia Artificial Aplicada', schedule: 'Bloque 7-8', parallel: '1', professor: 'Marcos', type: 'investigacion', depto: 'computación' },
    { code: 'INV102', name: 'Energías Renovables', schedule: 'Bloque 1-2', parallel: '1', professor: 'Valeria', type: 'investigacion', depto: 'ingeniería' },
    { code: 'INV103', name: 'Bioquímica Avanzada', schedule: 'Bloque 3-4', parallel: '1', professor: 'Sofía', type: 'investigacion', depto: 'biología' }
];

const Postular = () => {
    const [selectedType, setSelectedType] = useState('');
    const [filter, setFilter] = useState('');
    const [filteredCourses, setFilteredCourses] = useState(courses);
    const [selectedCourse, setSelectedCourse] = useState('');

    const handleTypeChange = (type) => {
        setSelectedType(type);
        applyFilters(type, filter);
    };

    const handleFilterChange = (event) => {
        const newFilter = event.target.value;
        setFilter(newFilter);
        applyFilters(selectedType, newFilter);
    };

    const applyFilters = (type, filter) => {
        const filtered = courses.filter(course =>
            (type === '' || course.type === type) &&
            (course.name.toLowerCase().includes(filter.toLowerCase()) ||
                course.code.toLowerCase().includes(filter.toLowerCase()))
        );
        setFilteredCourses(filtered);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        Swal.fire({
            title: 'Confirmar Postulación',
            html: `
            <p>Tipo de Ayudantía: ${selectedType}</p>
            <p>Curso Seleccionado: ${selectedCourse.code}</p>
            `,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const existingPostulaciones = JSON.parse(localStorage.getItem('postulaciones')) || [];
                existingPostulaciones.push(selectedCourse);
                localStorage.setItem('postulaciones', JSON.stringify(existingPostulaciones));
                console.log('Postulación guardada');
                Swal.fire('¡Postulación Confirmada!', '', 'success');


            } else {
                console.log('Postulación cancelada');
                Swal.fire('Postulación Cancelada', '', 'error');
            }
        });
    };

    return (
        <>
            <Header />
            <div className="postular-container">
                <h1>Postulación a Ayudantías</h1>
                <form onSubmit={handleSubmit} className="postular-form">
                    <div className="form-group">
                        <label htmlFor="type">Tipo de Ayudantía:</label>
                        <div className="tabs">
                            <button
                                type="button"
                                className={`tab-button ${selectedType === 'docencia' ? 'active' : ''}`}
                                onClick={() => handleTypeChange('docencia')}
                            >
                                Docencia
                            </button>
                            <button
                                type="button"
                                className={`tab-button ${selectedType === 'investigacion' ? 'active' : ''}`}
                                onClick={() => handleTypeChange('investigacion')}
                            >
                                Investigación
                            </button>
                            <button
                                type="button"
                                className={`tab-button ${selectedType === 'administrativa' ? 'active' : ''}`}
                                onClick={() => handleTypeChange('administrativa')}
                            >
                                Administrativa
                            </button>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="filter">Filtrar Cursos:</label>
                        <input
                            type="text"
                            id="filter"
                            value={filter}
                            onChange={handleFilterChange}
                            placeholder="Buscar por nombre o código"
                            className="form-control"
                        />
                    </div>
                    <div className="courses-list">
                        <div className="form-group">
                            <label htmlFor="course">Seleccionar Curso:</label>
                            <table className="courses-table">
                                <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Nombre</th>
                                        <th>Seleccionar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredCourses.map(course => (
                                        <tr key={course.code}>
                                            <td>{course.code}</td>
                                            <td>{course.name}</td>
                                            <td>
                                                <input
                                                    type="radio"
                                                    name="selectedCourse"
                                                    value={course.code}
                                                    checked={selectedCourse.code === course.code}
                                                    onChange={() => setSelectedCourse(course)}
                                                    className="form-radio"
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button type="submit" className="submit-button">Enviar Postulación</button>
                </form>
            </div>
        </>
    );
};

export default Postular;
