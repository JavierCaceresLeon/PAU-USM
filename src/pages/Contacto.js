import React, { useState } from 'react';
import Header from '../components/Header';
import './Contacto.css';

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
        console.log('Formulario enviado:', formData);
        alert('Gracias por contactarnos. Te responderemos pronto.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div>
            <Header />
            <div className="contact-container">
                <h1>Contacto</h1>
                <p>Para más información, por favor contáctenos a través de los siguientes medios:</p>
                <ul>
                    <li>Email: contacto@ejemplo.com</li>
                    <li>Teléfono: +56 9 1234 5678</li>
                    <li>Dirección: Av. Siempre Viva 123, Santiago, Chile</li>
                </ul>
                <h2>Formulario de Contacto</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Contacto;