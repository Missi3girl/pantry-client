// Entry point for route with imported components for the Get Involved page
import React from 'react'
import involvedPhoto from '../../assets/Images/contact.jpeg'
import LoginRegForm from './LoginRegForm'

import './GetInvolved.css'


export default function GetInvolved() {
    

    return (
        <div id="mainInvolved">
            <div className="involvedForm">
                <h2>Get Involved</h2>
                <p id="pInvolved">We would love the opportunity to work with you; whether you need help, or want to help someone else!</p>
                <p id="pInvolved">Please use the form below to login or register for a new account.</p><br /><br />

                <LoginRegForm />;

                <br/><br/><br/>
                <h3 id="quote">"No act of kindness, no matter how small, is ever wasted." ~Aesop</h3>
            </div>
            <div className="involvedPhoto">
                <div id="photoDiv">
                    <img src={involvedPhoto} />
                </div>
            </div>
        </div>
    );
}
