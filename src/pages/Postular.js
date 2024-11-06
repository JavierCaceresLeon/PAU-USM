import React, { useState } from 'react';
import Header from '../components/Header';

const courses = [
    { code: 'MAT021', name: 'Matemática I' ,type: 'docencia'},
    { code: 'MAT022', name: 'Matemática II' ,type: 'docencia'},
    { code: 'INF239', name: 'Base de Datos' ,type: 'docencia'},
    { code: 'INF236', name: 'Análisis y Diseño de Software' ,type: 'docencia'},
    { code: 'MAT023', name: 'Matemática III' ,type: 'docencia'},
    { code: 'INF225', name: 'Ingeniería de Software' ,type: 'docencia'},
    {code:'B215' ,name:'Administracion sala b215',type:'administrativa'}
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
        // Aquí puedes manejar el envío del formulario
        console.log('Tipo seleccionado:', selectedType);
        console.log('Cursos filtrados:', filteredCourses);
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
                                                    checked={selectedCourse === course.code}
                                                    onChange={(e) => setSelectedCourse(e.target.value)}
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
