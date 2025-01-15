import React, { useState } from 'react';
import './Signup.css';  // assuming you have a Signup.css for styles

function Signup() {
    const [formData, setFormData] = useState({
        chessId: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        chessId: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.chessId) {
            newErrors.chessId = 'Chess.com ID is required!';
        }
        if (!formData.email) {
            newErrors.email = 'Email is required!';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required!';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Form submission logic goes here, like sending the data to the backend
            console.log('Form Submitted:', formData);
        }
    };

    return (
        <div className="signup">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <div className="form-group">
                    <label htmlFor="chessId">Chess.com ID</label>
                    <input
                        type="text"
                        id="chessId"
                        name="chessId"
                        value={formData.chessId}
                        onChange={handleChange}
                        placeholder="Enter your Chess.com ID"
                    />
                    {errors.chessId && <span className="error">{errors.chessId}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <button type="submit" className="submit-btn">Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;
