import React from 'react';
import { useLocation } from 'react-router-dom';

const NAV_LINKS = [
    { href: '/postular', text: 'Postular' },
    { href: '/resultados', text: 'Resultados' },
    { href: '/ayudantias', text: 'Mis Ayudantías' },
    { href: '/contacto', text: 'Contacto' }
];

const Header = () => {
    const location = useLocation(); // Hook para obtener la ruta actual

    return (
        <header style={{ backgroundColor: '#f0f0f0', padding: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src="/Logo_UTFSM.png" alt="Logo USM" style={{ height: '40px' }} />
                    <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#007ACC' }}>PAU USM</span>
                </a>
                <nav style={{ display: 'flex', gap: '16px' }}>
                    {NAV_LINKS.map((link, index) => {
                        // Comprobar si el enlace es la página actual
                        const isActive = location.pathname === link.href;
                        return (
                            <a
                                key={index}
                                href={link.href}
                                style={{
                                    color: isActive ? '#007ACC' : '#888',
                                    boxShadow: isActive ? '0px 4px 10px rgba(0, 0, 0, 0.15)' : 'none', // Sombra para el enlace activo
                                    borderRadius: isActive ? '4px' : 'none', // Bordes suaves en el enlace activo
                                    padding: '4px 8px',
                                    transition: 'color 0.3s, box-shadow 0.3s',
                                }}
                                onMouseEnter={(e) => e.target.style.color = '#007ACC'}
                                onMouseLeave={(e) => e.target.style.color = isActive ? '#007ACC' : '#888'}
                            >
                                {link.text}
                            </a>
                        );
                    })}
                </nav>
                <button
                    style={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        padding: '8px',
                        borderRadius: '50%',
                        transition: '0.3s',
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
                >
                    <img src="https://openui.fly.dev/openui/24x24.svg?text=👤" alt="User Icon" style={{ height: '32px', width: '32px' }} />
                </button>
            </div>
        </header>
    );
};

export default Header;
