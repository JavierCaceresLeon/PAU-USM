import React from 'react';
import Header from '../components/Header';



const HomePage = () => {
    return (
        <>
            <Header />
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '32px', fontWeight: '600', color: '#333' }}>¡Te damos la bienvenida a PAU!</h1>
                <p style={{ color: '#666', marginTop: '8px', fontSize: '18px' }}>Conéctate para acceder a los concursos vigentes y potenciar tus habilidades.</p>
            </div>
        </>
    );
};

export default HomePage;
