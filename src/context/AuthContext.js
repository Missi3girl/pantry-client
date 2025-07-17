
import React, { createContext, useState, useContext } from 'react';
import { registerUser, loginUser } from '../services/authSvc';
import { useNavigate } from 'react-router-dom'; // If you want to redirect after logout etc.

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: localStorage.getItem('token') || null,
        user: JSON.parse(localStorage.getItem('user')) || null,
        isLoggedIn: !!localStorage.getItem('token') // Derived state
    });
    const navigate = useNavigate();

    // logged in fx
    const login = (token, user) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        setAuthState({
            token,
            user,
            isLoggedIn: true
        });
        // You might redirect here or handle in the component
    };

    // logout fx
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setAuthState({
            token: null,
            user: null,
            isLoggedIn: false
        });
        navigate('/login'); // Redirect to login page after logout (?)
    };

    // The value that will be provided to consuming components
    const contextValue = {
        authState,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for easier consumption
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};