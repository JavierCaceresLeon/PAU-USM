import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './UserProfile.css';

const UserProfile = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        nombre: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [photo, setPhoto] = useState(null);
    const [photoPreview, setPhotoPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPhoto(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const validateForm = () => {
        if (!userData.nombre || !userData.email) {
            setMessage({ type: 'error', text: 'Por favor complete todos los campos obligatorios.' });
            return false;
        }
        if (userData.newPassword !== userData.confirmPassword) {
            setMessage({ type: 'error', text: 'Las contraseñas no coinciden.' });
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            // Simular llamada al servidor
            await new Promise(resolve => setTimeout(resolve, 1000));
            setMessage({ type: 'success', text: 'Perfil actualizado exitosamente.' });
        } catch (error) {
            setMessage({ type: 'error', text: 'Error al actualizar el perfil.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Header />
            <div className="user-profile-container">
                <div className="profile-card">
                    <div className="profile-header">
                        <button 
                            className="back-button" 
                            onClick={() => navigate(-1)}
                        >
                            ← Volver
                        </button>
                        <h1>Mi Perfil</h1>
                    </div>
                    
                    <div className="photo-section">
                        <div className="photo-preview">
                            {photoPreview ? (
                                <img src={photoPreview} alt="Preview" />
                            ) : (
                                <div className="photo-placeholder">
                                    <span>Foto de perfil</span>
                                </div>
                            )}
                        </div>
                        <input
                            type="file"
                            id="photo-upload"
                            onChange={handlePhotoChange}
                            accept="image/*"
                            className="photo-input"
                        />
                        <label htmlFor="photo-upload" className="photo-upload-label">
                            Cambiar foto
                        </label>
                    </div>

                    {message.text && (
                        <div className={`message ${message.type}`}>
                            {message.text}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={userData.nombre}
                                onChange={handleChange}
                                placeholder="Tu nombre completo"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div className="password-section">
                            <h2>Cambiar contraseña</h2>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={userData.currentPassword}
                                    onChange={handleChange}
                                    placeholder="Contraseña actual"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={userData.newPassword}
                                    onChange={handleChange}
                                    placeholder="Nueva contraseña"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={userData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirmar nueva contraseña"
                                />
                            </div>
                        </div>

                        <button type="submit" disabled={loading}>
                            {loading ? 'Guardando...' : 'Guardar cambios'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UserProfile;
