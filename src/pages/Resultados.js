import React, { useState } from 'react';
import Header from '../components/Header';
import './Resultados.css';

const sharedClasses = {
    primaryColor: 'text-primary',
    primaryColorForeground: 'text-primary-foreground',
    mutedColor: 'text-muted-foreground',
    destructiveColor: 'text-destructive',
    destructiveColorForeground: 'text-destructive-foreground',
    hoverTransition: 'hover:bg-primary hover:text-primary-foreground transition duration-300',
    tableRowHover: 'border-b hover:bg-muted transition duration-300',
};

const coursesData = [
    { code: 'ELO320', status: 'Asignada', statusColor: 'text-green-500' },
    { code: 'MAT021', status: 'Procesando', statusColor: 'text-yellow-500' },
];

const Table = () => {
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [courses, setCourses] = useState(coursesData);
    const [showPopup, setShowPopup] = useState(false);
    const [courseToDelete, setCourseToDelete] = useState(null);

    const handleSelect = (code) => {
        setSelectedCourses((prevSelected) =>
            prevSelected.includes(code)
                ? prevSelected.filter((item) => item !== code)
                : [...prevSelected, code]
        );
    };

    const handleDeleteClick = (course) => {
        setCourseToDelete(course);
        setShowPopup(true);
    };

    const handleConfirmDelete = () => {
        setCourses((prevCourses) => prevCourses.filter((c) => c.code !== courseToDelete.code));
        setShowPopup(false);
        setCourseToDelete(null);
    };

    const handleCancelDelete = () => {
        setShowPopup(false);
        setCourseToDelete(null);
    };

    return (
        <>
            <table className="mt-6 w-full border-collapse shadow-lg rounded-lg overflow-hidden">
                <thead className={`${sharedClasses.primaryColor} ${sharedClasses.primaryColorForeground}`}>
                    <tr>
                        <th className="text-left font-bold py-3 px-4">Ayudantía</th>
                        <th className="text-left font-bold py-3 px-4">Estado</th>
                        <th className="text-left font-bold py-3 px-4">Renunciar/Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.code} className={sharedClasses.tableRowHover}>
                            <td className="py-2 px-4 flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-2"
                                    checked={selectedCourses.includes(course.code)}
                                    onChange={() => handleSelect(course.code)}
                                />
                                <span className={sharedClasses.mutedColor}>{course.code}</span>
                            </td>
                            <td className="py-2 px-4">
                                <span className={`${course.statusColor} font-semibold`}>{course.status}</span>
                            </td>
                            <td className="py-2 px-4">
                                <button
                                    className={`${sharedClasses.destructiveColor} ${sharedClasses.hoverTransition} ButtonDelete`}
                                    onClick={() => handleDeleteClick(course)}
                                >
                                    <svg height={20} width={20} fill='red' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup">
                        <p>¿Estás seguro de que deseas eliminar la postulación para {courseToDelete?.code}?</p>
                        <div className="popup-buttons">
                            <button onClick={handleConfirmDelete} className="accept-button">Aceptar</button>
                            <button onClick={handleCancelDelete} className="cancel-button">Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

const Resultados = () => {
    return (
        <>
            <Header />
            <div className="p-6 bg-background">
                <Table />
            </div>
        </>
    );
};

export default Resultados;