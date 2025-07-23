import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAdminRequired }) => {
    const storedUser = localStorage.getItem('user');
    let user = null;
    if (storedUser) {
        try {
            user = JSON.parse(storedUser);
        } catch (err) {
            console.error("Failed to parse user from localStorage:", err);
            localStorage.removeItem('user'); 
            localStorage.removeItem('token');
            user = null; 
        }
    }

    const token = localStorage.getItem('token');

    if (!token || !user) {
        return <Navigate to="/getinvolved" replace />;
    }

    if (isAdminRequired && !user.isAdmin) {
        return <Navigate to="/getinvolved" replace />;
    }

    // If all checks pass, render the child route/component
    return <Outlet />;
};

export default ProtectedRoute;