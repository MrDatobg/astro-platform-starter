// src/components/Register.js
import { useState } from 'react';

export default function Register({ onRegister }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Save the email and password (for demonstration purposes, we're storing it in localStorage)
        localStorage.setItem('user', JSON.stringify({ email, password }));
        alert("Registration successful!");
        onRegister();
    };

    return (
        <form onSubmit={handleRegister}>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit">Register</button>
        </form>
    );
                  }
