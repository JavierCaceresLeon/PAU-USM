import React, { useState } from 'react';

const buttonClasses = 'p-2 rounded-lg bg-zinc-300 hover:bg-blue-500 text-zinc-800 hover:text-white transition duration-200';
const containerClasses = 'container mx-auto p-4';
const headerClasses = 'flex justify-between items-center mb-4';
const inputClasses = 'border rounded-lg p-2 flex-grow';
const searchButtonClasses = 'bg-blue-500 text-white p-2 rounded-lg ml-2 hover:bg-blue-600 transition duration-200';
const courseCardClasses = 'p-4 border rounded-lg bg-zinc-200 shadow-md hover:shadow-lg transition duration-200';

const courses = [
    { code: 'MAT021', name: 'Matemática I' },
    { code: 'MAT022', name: 'Matemática II' },
    { code: 'INF239', name: 'Base de Datos' },
    { code: 'INF236', name: 'Análisis y Diseño de Software' },
    { code: 'MAT023', name: 'Matemática III' },
    { code: 'INF225', name: 'Ingeniería de Software' },
];

const Postular = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCampus, setSelectedCampus] = useState('');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className={containerClasses}>
            <header className={headerClasses}>
                <img src="/path/to/logo.png" alt="PAU USM Logo" className="h-12" />
                <div className="flex items-center">
                    <span className="text-lg font-semibold">Mis Ayudantías</span>
                    <button className="ml-4 p-2 rounded-full bg-zinc-200 hover:bg-zinc-300 transition duration-200">
                        <img src="/path/to/user-icon.png" alt="User Icon" className="h-8 w-8" />
                    </button>
                </div>
            </header>
            <nav className="mb-4">
                <span className="text-lg font-semibold">Postular</span>
                <div className="flex space-x-2 mt-2">
                    {['docente', 'administrativa', 'investigacion'].map((category) => (
                        <button
                            key={category}
                            id={category}
                            className={`${buttonClasses} ${selectedCategory === category ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => handleCategorySelect(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </nav>
            <div className="flex items-center mb-4">
                <select
                    className="border rounded-lg p-2 mr-2 bg-white"
                    value={selectedCampus}
                    onChange={(e) => setSelectedCampus(e.target.value)}
                >
                    <option value="">Seleccione Campus/Sede</option>
                    <option value="campus1">Campus 1</option>
                    <option value="campus2">Campus 2</option>
                </select>
                <input type="text" placeholder="Escribe cargo o palabra clave" className={inputClasses} />
                <button className={searchButtonClasses}>Búsqueda Avanzada</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map(course => (
                    <div key={course.code} className={courseCardClasses}>
                        <img src="https://openui.fly.dev/openui/24x24.svg?text=📚" alt="course-image" />
                        <h3 className="font-semibold">{course.code}</h3>
                        <p>{course.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Postular;
