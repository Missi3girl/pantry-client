import React, { useEffect, useState } from 'react';
const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000/api";

import './UserDash.css';

function UserDash() {

    const [profile, setProfile] = useState("");

    useEffect(() => {
        fetch("/api/")
        .then(res => {
            return res.json()
        })
        .then(result => {
            console.log(result);
            setProfile(result.user)
        })
        .catch(err => {
            console.error("Could not fetch user", err);
        })
    }, []);

  return (
    <>
    <h2>User Dashboard</h2>
    
    </>
  )
}

export default UserDash