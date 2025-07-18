// Entry point for route with imported components for the Get Involved page
import React, { useState } from 'react'
import involvedPhoto from '../../assets/Images/contact.jpeg'
import LoginRegForm from './LoginRegForm'
import AdminDash from './AdminDash'
// !user dash will go here
import './GetInvolved.css'


export default function GetInvolved() {
    const [user, setUser] = useState(null);

    const handleLogin = (loggedInUser) => {
        setUser(loggedInUser);
    };

    if (user?.isAdmin) {
        return <AdminDash user={user} />;
    } 
    
    /* 
        if (user) {
            return <UserDash user={user} />;
        }
    */

    return (

        <div id="mainInvolved">
            <div className="involvedForm">
                <h2>Get Involved</h2>
                <p id="pInvolved">We would love the opportunity to work with you; whether you need help, or want to help someone else!</p>
                <p id="pInvolved">Please use the form below to login or register for a new account.</p><br /><br />

                <LoginRegForm onLogin={handleLogin} />;

                <br/><br/><br/>
                <h3 id="quote">"No act of kindness, no matter how small, is ever wasted." ~Aesop</h3>
            </div>
            <div className="involvedPhoto">
                <div id="photoDiv">
                    <img src={involvedPhoto} />
                </div>
            </div>
        </div>
        )
}
