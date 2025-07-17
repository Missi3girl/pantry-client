// Entry point for route with imported components for the Get Involved page
import involvedPhoto from '../../assets/Images/contact.jpeg'
import LoginRegForm from './LoginRegForm'

import React from 'react'
import './GetInvolved.css'


export default function GetInvolved() {
   // make a var for isAdmin and pass as a prop on line 19
  return (
 <div id="mainInvolved">
            <div className="involvedForm">
            <h2>Get Involved</h2>
            <p>We would love the opportunity to work with you; whether you need help, or want to help someone else!<br></br>Please use the form below to login or register for a new account.</p>

            <LoginRegForm />

            <h3>"No act of kindness, no matter how small, is ever wasted." ~Aesop</h3>
            </div>
            <div className="involvedPhoto">
                <div id="photoDiv">
                    <img src={involvedPhoto} />
                </div>
            </div>
         </div>
  )
}
