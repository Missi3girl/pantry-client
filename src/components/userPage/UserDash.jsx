import React, { useEffect, useState } from 'react';
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

import { useNavigate } from 'react-router-dom';

import FormGetInvolved from './FormGetInvolved';

import './UserDash.css';

function UserDash() {

    const [currentUser, setCurrentUser] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
       const storedUser = localStorage.getItem("user");

       if (storedUser) {
            try {
                const userData = JSON.parse(storedUser);
                setCurrentUser(userData);
            } catch (err) {
                console.error("Error parsing user data from localStorage:", err);
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                navigate("/getinvolved");
            }
       } else {
            console.log("No user data found in localStorage, redirectin to login.");
            navigate("/getinvolved");
       }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/getinvolved");
    };

    

  return (

        <>
    
            <div style={{
                padding: '20px',
                maxWidth: '800px',
                margin: '40px auto',
                border: '1px solid #e0e0e0',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                fontFamily: 'Arial, sans-serif',
                backgroundColor: '#ffffff'
            }}>
                <h1 style={{ color: 'var(--black)', marginBottom: '25px', textAlign: 'center' }}>
                    Welcome, {currentUser.fullName}!
                </h1>
                

                <div style={{
                    backgroundColor: 'var(--purple)',
                    padding: '20px',
                    borderRadius: '8px',
                    marginBottom: '30px',
                    borderLeft: '4px solid var(--gold)'
                }}>
                    <h3 style={{ color: 'var(--grey)', marginBottom: '15px' }}>Your Information:</h3>
                    <p style={{ color: 'var(--grey)' }}><strong>Full Name:</strong> {currentUser.fullName}</p>
                    <p><strong>Email:</strong> {currentUser.email}</p>
                    <p><strong>Zip Code:</strong> {currentUser.zipCode}</p>
                    <p><strong>User Role:</strong> {currentUser.isAdmin ? 'Administrator' : 'Standard User'}</p>
                    
                </div>

                <button
                    onClick={handleLogout}
                    style={{
                        display: 'block',
                        width: '150px',
                        margin: '20px auto',
                        padding: '12px 25px',
                        backgroundColor: 'var(--green)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '1em',
                        fontWeight: 'bold',
                        transition: 'background-color 0.3s ease'
                    }}>
                    Logout
                </button>
            </div>
                <div>
                    <FormGetInvolved />
                </div>
        </>            
    );
};

export default UserDash