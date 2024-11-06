import React from 'react';
import Header from '../components/Header';
import imgBanner from '../assets/img_BANNER.png'; // Asegúrate de que la ruta sea correcta

const HomePage = () => {
    return (
        <>
            <Header />
            <div style={{ marginTop: '30px', textAlign: 'center', position: 'relative', overflow: 'hidden', height: '450px' }}> {/* Ajusta la altura según sea necesario */}
                <img 
                    src={imgBanner} 
                    alt="Descripción de la imagen"
                    style={{ 
                        maxWidth: '100%', 
                        height: 'auto', 
                        display: 'block', 
                        margin: '0 auto', 
                        boxShadow: '0 10px 100px rgba(10, 10, 10, 1)', // Sombreado
                        transform: 'translateY(-100px)' // Ajusta para recortar la parte inferior
                    }} 
                />
                <h1 style={{ 
                    position: 'absolute', 
                    top: '20%', // Ajusta según sea necesario
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    fontSize: '45px', 
                    fontWeight: '600', 
                    color: '#fff', 
                    zIndex: 1 // Asegúrate de que el texto esté por encima de la imagen
                }}>
                    ¡Te damos la bienvenida a PAU!
                </h1>
                <p style={{ 
                    position: 'absolute', 
                    top: '45%', // Ajusta según sea necesario
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    color: '#fff', 
                    fontSize: '25px', 
                    zIndex: 1 // Asegúrate de que el texto esté por encima de la imagen
                }}>
                    Conéctate para acceder a los concursos vigentes y potenciar tus habilidades.
                </p>
            </div>
        </>
    );
};

export default HomePage;
