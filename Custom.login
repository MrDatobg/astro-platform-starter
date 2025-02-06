// src/components/CustomLogin.js
import { useState } from 'react';
import Register from './Register';
import Login from './Login';

export default function CustomLogin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleRegister = () => {
        setIsLoggedIn(true);
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div>
            <h1>Custom Login</h1>
            {!isLoggedIn ? (
                <>
                    <Register onRegister={handleRegister} />
                    <Login onLogin={handleLogin} />
                </>
            ) : (
                <p>Welcome! You are logged in.</p>
            )}
        </div>
    );
}
