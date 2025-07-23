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
                console.log("User Data from localStorage (currentUser state):", userData);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/getinvolved");
    };

    

  return (
    <div className="container">
        <div className="mainUserDash">

             <div id="userDash">
                    <h1 className="userh1">Welcome, {currentUser.fullName}!</h1>
                    
                    <div className="purpleBox">
                    <h3 className="h3User">Your Information:</h3>
                    <p className="pUser"><strong>Full Name:</strong> {currentUser.fullName}</p>
                    <p className="pUser"><strong>Email:</strong> {currentUser.email}</p>
                    <p className="pUser"><strong>Zip Code:</strong> {currentUser.zipCode}</p>
                    <p className="pUser"><strong>User Role:</strong> {currentUser.isAdmin ? 'Administrator' : 'Standard User'}</p>
                <button onClick={handleLogout}>LOGOUT</button>
                    </div>
                </div>

                            <div className="formDash">
                             <h1 className="formh1">Reach Out To Us</h1>
                    <FormGetInvolved currentUser={currentUser} />
            </div>
            </div>

    </div>
    );
};

export default UserDash;