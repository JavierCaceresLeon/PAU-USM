import React, { useState } from 'react';

const sharedClasses = {
    primaryColor: 'text-primary',
    primaryColorForeground: 'text-primary-foreground',
    mutedColor: 'text-muted-foreground',
    destructiveColor: 'text-destructive',
    destructiveColorForeground: 'text-destructive-foreground',
    hoverTransition: 'hover:bg-primary hover:text-primary-foreground transition duration-300',
    tableRowHover: 'border-b hover:bg-muted transition duration-300',
};

const courses = [
    { code: 'ELO320', status: 'Asignada', statusColor: 'text-green-500' },
    { code: 'MAT021', status: 'Procesando', statusColor: 'text-yellow-500' },
];

const Table = () => {
    const [selectedCourses, setSelectedCourses] = useState([]);

    const handleSelect = (code) => {
        setSelectedCourses((prevSelected) =>
            prevSelected.includes(code)
                ? prevSelected.filter((item) => item !== code)
                : [...prevSelected, code]
        );
    };

    return (
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
                            <button className={`${sharedClasses.destructiveColor} ${sharedClasses.hoverTransition}`}>
                                <img aria-hidden="true" alt="trash-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🗑️" />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

const Resultados = () => {
    return (
        <div className="p-6 bg-background">
            <h1 className={`${sharedClasses.primaryColor} font-bold text-5xl ${sharedClasses.primaryColorForeground}`}>PAU USM</h1>
            <nav className="my-4">
                <a href="#" className={`text-lg ${sharedClasses.mutedColor} ${sharedClasses.hoverTransition}`}>Mis Ayudantías</a>
                <a href="#" className={`text-lg ${sharedClasses.mutedColor} ${sharedClasses.hoverTransition} mx-4`}>Postular</a>
                <a href="#" className={`text-lg ${sharedClasses.primaryColor} font-semibold`}>Resultados</a>
                <a href="#" className={`text-lg ${sharedClasses.mutedColor} ${sharedClasses.hoverTransition} mx-4`}>Contacto</a>
            </nav>
            <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition duration-300">Resultados</button>
            <Table />
        </div>
    );
};

export default Resultados;
