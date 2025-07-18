// A placeholder list since we don't have actual partners?
// Stock photos stored in assets/images and exported with assets/imageMap.js

import React from 'react'
import './RsrcList.css'
import resourcePhoto from '../../assets/Images/kidpbj.jpeg'

export default function RsrcList() {
  return (
    <div className="container">
 <div id="mainResource">
            <div className="resourceList">

            <h2>Resources</h2>

            <div id="resource-box">
                <h3>SNAP</h3>
            <p id="resource-p">If you have little or no income, you may qualify to get benefits within 7 days, also called expedited benefits. To find out if you qualify, visit the <a href="https://dfcs.georgia.gov/faq-0#DFCS14">DFCS FAQ web page</a> or call DFCS at 877-423-4746. If you are deaf or hard of hearing, please call GA Relay at 800-255-0135. These services are free.</p>
            </div>

            <div id="resource-box">
                <h3>Medicaid</h3>
            <p id="resource-p">Medical Assistance Plans is the largest division within the Georgia Department of Community Health. It administers the Medicaid and PeachCare for Kids. <a href="https://medicaid.georgia.gov/how-apply">Apply Here.</a></p>
             </div>

            <div id="resource-box">
                <h3>WIC</h3>
            <p id="resource-p">Georgia WIC improves the health of families by providing nutritious foods, health education, breastfeeding support, and referrals to health care from staff dedicated to a healthy Georgia. Take the first step and join WIC for your family - because your children deserve a healthy start. <a href="https://gateway.ga.gov/access/">Apply Here.</a></p>
            </div>

     <div id="resource-box">
                            <h3>Housing Help Center</h3>
           <p id="resource-p">The Housing Help Center was opened by the city of Atlanta in the Fall of 2023. It is a one-stop-shop conneting Atlanta residents to tthe resources available on renting, buying, and more.

            <a href="https://www.housinghelpcenter.com/" alt="Housing Help Center of Atlanta">Housing Help Center - City of Atlanta</a>
           </p>
             </div>

        
            </div>
            <div className="resourcePhoto">
                <div id="photoDiv">
                    <img src={resourcePhoto} />
                </div>
            </div>
         </div>
         </div>
  )
}
