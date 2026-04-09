import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // For now, default to null (logged out)
    const [user, setUser] = useState(null);

    const login = () => {
        // Mocking a successful login token
        setUser({ authenticated: true, role: 'user' });
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
