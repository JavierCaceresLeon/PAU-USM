import React from 'react';
import Header from '../components/Header';

const Contacto = () => {
    return (
        <div>
            <Header/>
            <h1>Contacto</h1>
            <p>Para más información, por favor contáctenos a través de los siguientes medios:</p>
            <ul>
                <li>Email: contacto@ejemplo.com</li>
                <li>Teléfono: +56 9 1234 5678</li>
                <li>Dirección: Av. Siempre Viva 123, Santiago, Chile</li>
            </ul>
        </div>
    );
};

export default Contacto;