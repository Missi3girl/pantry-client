// Entry point for route with imported components for the About page
import aboutPhoto from '../../assets/Images/purple.jpeg'

import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

function About() {
  return (
        <div className="container">
        <div id="mainAbout">
            <div className="aboutStory">
            <h2>Our Story</h2>
            <p id="story">“The number you have dialed is no longer in service, please check the number and try again.”; so you do, only to be met with the same disappointing message. You pull up to your neighborhood church to see the sign on the door, “Pantry Closed”, and wonder where your dinner is going to come from now. A list of food pantries, handed out at the health department, all require that you be a resident of a county that you don’t live in. These are just a few of the dozens of real life reasons why the needs of so many families are not being met. If you’ve ever had to deal with the frustration of finding help, you are not alone! With resources closing their doors every day and new opportunities becoming available, it’s hard to keep up with the help that is out there, especially if you don’t live in a downtown sector, or even the suburbs of a metro area. The Pantry Door strives to provide the most up to date information for food pantries across all of Georgia, and to highlight resources across major cities throughout our beloved state.</p>
            <p id="story">As children, one of the founders of The Pantry Door felt the pangs of hunger with few available resources; while another founder, whose family were survivors of a house fire, were well taken care of due to the admirable outpouring of a community that rallied around them to provide food and clothes. What was the difference between the two families? Access to information and local resources. Yet another founder, seeing those in need, has always felt the desire to help, but wondered how to do so. When the three met, the vision for The Pantry Door became clear; a virtual pantry that was always stocked and never locked. So come on in, there’s plenty.</p>
            <p id="story">Whether you are in need of help, or want to provide a service to your community, <Link to="/getinvolved" className="inline-link">please click here.</Link></p>
            
            <p id="quote">"Life's most persistent and urgent question is, What are you doing for others?"<br />~Martin Luther King, Jr.</p>

            </div>
            <div className="aboutPhoto">
                <div id="photoDiv">
                    <img src={aboutPhoto} />
                </div>
            </div>
         </div>
         </div>
  )
}

export default About