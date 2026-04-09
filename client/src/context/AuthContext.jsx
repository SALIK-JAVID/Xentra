import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Initial load: check if the browser has a securely saved DB session
    useEffect(() => {
        const storedUser = localStorage.getItem('xentra_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    // Full-stack Real Login Function
    const login = async (email, password) => {
        try {
            const res = await fetch('http://localhost:8000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Authentication structurally failed');
            }

            localStorage.setItem('xentra_user', JSON.stringify(data));
            setUser(data);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    // Full-stack Real Registration Function
    const register = async (username, email, password) => {
        try {
            const res = await fetch('http://localhost:8000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || 'Registration structurally failed');
            }

            // Immediately login the user upon registration locally
            localStorage.setItem('xentra_user', JSON.stringify(data));
            setUser(data);
            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    };

    // Logout and purge secured local storage
    const logout = () => {
        localStorage.removeItem('xentra_user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {/* Prevent jumping and flickering before we finish our localstorage calculation */}
            {!loading && children}
        </AuthContext.Provider>
    );
};
