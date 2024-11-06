import React from 'react';
import Header from '../components/Header';
import imgBanner from '../assets/img_BANNER.png';

const HomePage = () => {
    return (
        <>
            <Header />
            <div style={{ marginTop: '30px', textAlign: 'center', position: 'relative', overflow: 'hidden', height: '450px' }}> {/* */}
                <img 
                    src={imgBanner} 
                    alt="Banner"
                    style={{ 
                        maxWidth: '100%', 
                        height: 'auto', 
                        display: 'block', 
                        margin: '0 auto', 
                        boxShadow: '0 10px 100px rgba(10, 10, 10, 1)', // Control de sombreado
                        transform: 'translateY(-100px)' // Para recortar la parte inferior
                    }} 
                />
                <h1 style={{ 
                    position: 'absolute', 
                    top: '20%',
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    fontSize: '45px', 
                    fontWeight: '600', 
                    color: '#fff', 
                    zIndex: 1 // Lo que asegura que el texto esté por encima de la imagen
                }}>
                    ¡Te damos la bienvenida a PAU!
                </h1>
                <p style={{ 
                    position: 'absolute', 
                    top: '45%',
                    left: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    color: '#fff', 
                    fontSize: '25px', 
                    zIndex: 1 // Lo que asegura que el texto esté por encima de la imagen
                }}>
                    Conéctate para acceder a los concursos vigentes y potenciar tus habilidades.
                </p>
            </div>
        </>
    );
};

export default HomePage;
