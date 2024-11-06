import React from 'react';
import './Header.css'; // Importar el archivo CSS
const NAV_LINKS = [
    { href: '/postular', text: 'Postular' },
    { href: '/resultados', text: 'Resultados' },
    { href: '/ayudantias', text: 'Mis Ayudantías' },
    { href: '/contacto', text: 'Contacto' }
];
const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <a href="/" className="logo-link">
                    <img src="/Logo_UTFSM.png" alt="Logo USM" className="logo-image" />
                    <span className="logo-text">PAU USM</span>
                </a>
                <nav className="nav-links">
                    {NAV_LINKS.map((link, index) => (
                        <a key={index} href={link.href} className="nav-link">
                            {link.text}
                        </a>
                    ))}
                </nav>
                <a href="/perfil" className="user-section">
                    <img src="/user-photo.png" alt="User Icon" className="user-icon" />
                </a>
            </div>
        </header>
    );
};

export default Header;