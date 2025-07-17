// This file hides the dashboard route from unauthorized users
import React from "react";
import { Navigate } from "react-router-dom";

const HiddenRoute = ({ children, roles = ["user", "admin"] }) => {
    const token = localStorage.getItem("token");

    const verifiedUser = localStorage.getItem("user");
    let user = null;
    if (verifiedUser) {
        try {
            user = JSON.parse(verifiedUser);
        } catch (err) {
            console.error("Error getting user data:", err);

            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return <Navigate to="/getinvolved" replace />; 
        }
    }

    if (!token || !user) {
        return <Navigate to="/getinvolved" replace />; 
    }

    const userRole = user.isAdmin ? "admin" : "user";

    if (!roles.includes(userRole)) {
        return <Navigate to="/user/dashboard" replace />; // use forbidden page?
    }

    return children;
};

export default HiddenRoute;