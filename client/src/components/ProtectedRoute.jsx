import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth();
    
    // If there is no user logged in, redirect them to the login screen
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Otherwise, render the requested component
    return children;
};

export default ProtectedRoute;
