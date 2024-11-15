import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import './Resultados.css';
import { FaCheckCircle, FaHourglassHalf, FaTrashAlt, FaCheck } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { motion, AnimatePresence } from 'framer-motion';
import { TableContainer, Table as MUITable, Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import { Grid, Typography, Chip } from '@mui/material';

const sharedClasses = {
    primaryColor: 'text-primary',
    primaryColorForeground: 'text-primary-foreground',
    mutedColor: 'text-muted-foreground',
    destructiveColor: 'text-destructive',
    destructiveColorForeground: 'text-destructive-foreground',
    hoverTransition: 'hover:bg-primary/90 hover:text-primary-foreground transition-all duration-300 ease-in-out',
    tableRowHover: 'border-b hover:bg-gradient-to-r from-purple-400/80 via-pink-500/80 to-red-500/80 transition-all duration-500 ease-in-out transform hover:scale-102 cursor-pointer shadow-md hover:shadow-xl',
    expandedRow: 'bg-gradient-to-r from-blue-500/90 to-purple-600/90 text-white shadow-lg',
};

const coursesData = [
    { code: 'ELO320', status: 'Asignada', statusColor: 'text-green-500' },
    { code: 'MAT021', status: 'Procesando', statusColor: 'text-yellow-500' },
];

const Table = () => {
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [expandedRow, setExpandedRow] = useState(null);
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        const storedCourses = localStorage.getItem('postulaciones');
        if (storedCourses) {
          setCourses(JSON.parse(storedCourses));
        }
      }, []);
    const tableTheme = createTheme({
        components: {
            MuiTableContainer: {
                styleOverrides: {
                    root: {
                        background: 'rgba(255, 255, 255, 0.7)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                    }
                }
            }
        }
    });

    const handleSelect = (code) => {
        setSelectedCourses((prevSelected) =>
            prevSelected.includes(code)
                ? prevSelected.filter((item) => item !== code)
                : [...prevSelected, code]
        );
    };

    const toggleExpandRow = (code) => {
        setExpandedRow(expandedRow === code ? null : code);
    };

    const handleDelete = (code) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: `¿Deseas eliminar la postulación a ${code}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setCourses(courses.filter((course) => course.code !== code));
                localStorage.setItem('postulaciones', JSON.stringify(courses.filter((course) => course.code !== code)));
                toast.success(`Postulación a ${code} eliminada.`);
            }
        });
    };

    const handleAccept = (code) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: `¿Deseas aceptar la postulación a ${code}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedCourses = courses.map((course) =>
                    course.code === code ? { ...course, status: 'Asignada'} : course
                );
                setCourses(updatedCourses);
                localStorage.setItem('postulaciones', JSON.stringify(updatedCourses));
                toast.success(`Postulación a ${code} aceptada.`);
            }
        });
    };

    return (
        <ThemeProvider theme={tableTheme}>
            <div className="container mx-auto px-4 py-8 max-w-5xl space-y-6">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-xl shadow-lg mb-8 border-black border-2">
                    <Typography variant="h4" className="text-white font-bold text-center mb-2">
                        Estado de Postulaciones
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item>
                            <Chip
                                label={`Total: ${courses.length}`}
                                className="bg-white/20 text-white"
                            />
                        </Grid>
                        <Grid item>
                            <Chip
                                label={`Asignadas: ${courses.filter(c => c.status === 'Asignada').length}`}
                                className="bg-green-500/20 text-white"
                            />
                        </Grid>
                    </Grid>
                </div>

                <TableContainer 
                    component={Paper}
                    className="shadow-xl rounded-xl overflow-hidden border border-gray-200/50 backdrop-blur-xl"
                    sx={{ 
                        background: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <MUITable className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
                            <tr>
                                <th className="px-6 py-4 text-left text-lg font-bold text-white tracking-wider w-1/3">
                                    Ayudantía
                                </th>
                                <th className="px-6 py-4 text-left text-lg font-bold text-white tracking-wider w-1/3">
                                    Estado
                                </th>
                                <th className="px-6 py-4 text-left text-lg font-bold text-white tracking-wider w-1/3">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white/90 divide-y divide-gray-200/50">
                            <AnimatePresence mode="popLayout">
                                {courses.map((course) => (
                                    <motion.tr
                                        key={course.code}
                                        initial={{ opacity: 0}}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="hover:bg-purple-50/50 transition-colors duration-200 border-black border-solid border-1"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap border-black border-solid border-1">
                                            <div className="flex items-center space-x-4">
                                                <input
                                                    type="checkbox"
                                                    className="form-checkbox h-5 w-5 text-purple-600 rounded-full transition-colors"
                                                    checked={selectedCourses.includes(course.code)}
                                                    onChange={() => handleSelect(course.code)}
                                                />
                                                <span className="text-lg font-medium text-gray-900">
                                                    {course.code}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap border-black border-solid border-1">
                                            <div className="flex items-center space-x-2">
                                                {course.status === 'Asignada' ? (
                                                    <div className="flex items-center space-x-2">
                                                        <FaCheckCircle className="text-green-500 text-2xl" />
                                                        <span className="text-green-500 font-medium">
                                                            {course.status}
                                                        </span>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center space-x-2">
                                                        <FaHourglassHalf className="text-yellow-500 text-2xl" />
                                                        <span className="text-yellow-500 font-medium">
                                                            {course.status}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right border-black border-solid border-1" style={{padding:'1rem'}}>
                                            {course.status === 'Procesando' && (
                                                <button
                                                    className="p-2 rounded-full bg-green-100 hover:bg-green-200 transition-colors duration-200 mr-2"
                                                    onClick={() => handleAccept(course.code)}
                                                    style={{background:'green'}}
                                                >
                                                    <FaCheck className="text-xl text-green-500"  />
                                                </button>
                                            )}
                                            <button
                                                className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition-colors duration-200"
                                                onClick={() => handleDelete(course.code)}
                                                style={{background:'red'}}
                                            >
                                                <FaTrashAlt className="text-xl text-red-500" />
                                            </button>
                                        </td>
                                    </motion.tr>
                                ))}
                            </AnimatePresence>
                        </tbody>
                    </MUITable>
                </TableContainer>
                <ToastContainer 
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </div>
        </ThemeProvider>
    );
};

const Resultados = () => {
    return (
        <>
        <Header/>
        <div className="p-6 bg-background">
            <Table />
        </div>
        </>
    );
};

export default Resultados;
