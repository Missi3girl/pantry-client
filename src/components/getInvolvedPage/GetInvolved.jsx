// Entry point for route with imported components for the Get Involved page
import involvedPhoto from '../../assets/Images/contact.jpeg'
import LoginRegForm from './LoginRegForm'
//import FormGetInvolved from './FormGetInvolved'

import React from 'react'
import './GetInvolved.css'


export default function GetInvolved() {
  return (
 <div id="mainInvolved">
            <div className="involvedForm">
            <h2>Get Involved</h2>

            <LoginRegForm />
            </div>
            <div className="involvedPhoto">
                <div id="photoDiv">
                    <img src={involvedPhoto} />
                </div>
            </div>
         </div>
  )
}

{/* <FormGetInvolved />   */}