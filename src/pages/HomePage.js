import React from 'react';

const NAV_LINKS = [
    { href: '/postular', text: 'Postular' },
    { href: '/resultados', text: 'Resultados' },
    { href: '/ayudantias', text: 'Mis Ayudantías' },
    { href: '/contacto', text: 'Contacto' }
];

const HomePage = () => {
    return (
        <header style={{ backgroundColor: '#f0f0f0', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Logo_UTFSM.png" alt="Logo USM" style={{ height: '40px' }} />
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#007ACC' }}>PAU USM</span>
                </a>
                <nav style={{ display: 'flex', gap: '16px' }}>
                    {NAV_LINKS.map((link, index) => (
                        <a key={index} href={link.href} style={{ color: '#888', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#007ACC'} onMouseLeave={(e) => e.target.style.color = '#888'}>
                            {link.text}
                        </a>
                    ))}
                </nav>
                <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '8px', borderRadius: '50%', transition: '0.3s' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'} onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}>
                    <img src="https://openui.fly.dev/openui/24x24.svg?text=👤" alt="User Icon" style={{ height: '32px', width: '32px' }} />
                </button>
            </div>
            <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '32px', fontWeight: '600', color: '#333' }}>¡Te damos la bienvenida a PAU!</h1>
                <p style={{ color: '#666', marginTop: '8px', fontSize: '18px' }}>Conéctate para acceder a los concursos vigentes y potenciar tus habilidades.</p>
            </div>
        </header>
    );
};

export default HomePage;
