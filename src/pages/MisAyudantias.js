// src/pages/MisAyudantias.js
import React from 'react';
import Header from '../components/Header';

const MisAyudantias = () => {
  return (
    <>
    <Header/>
    <div className="mis-ayudantias-page">
      <h2>Mis Ayudantías</h2>
      <table>
        <thead>
          <tr>
            <th>Ayudantía</th>
            <th>Estado</th>
            <th>Renunciar/Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ELO320</td>
            <td>Asignada</td>
            <td><button>🗑️</button></td>
          </tr>
          <tr>
            <td>MAT021</td>
            <td>Procesando</td>
            <td><button>🗑️</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};

export default MisAyudantias;
