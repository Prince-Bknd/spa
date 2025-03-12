import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Registration.css'

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (response.ok) {
                setSuccessMessage('User successfully registered!');
                setFormData({ name: '', email: '', password: '' });

                setTimeout(() => setSuccessMessage(''), 2000);
            } else {
                alert(data.error || 'Registration failed.');
            }
        } catch (error) {
            alert('Error connecting to server.');
        }
    };

    return (
        <div >
            <button className="btn btn-success btn-sm" onClick={() => navigate('/data')} >
                Data
            </button>
            <div className="container mt-5">
                {successMessage && (
                    <div className="alert alert-success text-center h-25 fw-semibold" role="alert">
                        {successMessage}
                    </div>
                )}

                <h2 className="text-center mb-4">Fill below information to get Registered</h2>
                <form onSubmit={handleSubmit} className="w-50 mx-auto border p-4 shadow-sm rounded shadow-lg body-bg">
                    <div className="row mb-3 align-items-center">
                        <label className="col-sm-2 col-form-label fw-semibold">Name</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter name here..."
                                value={formData.name}
                                onChange={handleChange}
                                required autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label className="col-sm-2 col-form-label fw-semibold">Email</label>
                        <div className="col-sm-10">
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter email here..."
                                value={formData.email}
                                onChange={handleChange}
                                required autoComplete="off"
                            />
                        </div>
                    </div>
                    <div className="row mb-3 align-items-center">
                        <label className="col-sm-2 col-form-label fw-semibold">Password</label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter password here..."
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
