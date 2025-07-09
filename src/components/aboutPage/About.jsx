// Entry point for route with imported components for the About page

import React from 'react'
import './About.css'

function About() {
  return (
        <div id="mainAbout">
            <div className="aboutStory">
            <h2>Our Story</h2>
            <p id="story">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus molestie semper dolor, a facilisis erat suscipit ac. Etiam at elit felis. Mauris iaculis purus at rutrum ornare. Quisque non ligula at sapien interdum placerat at ut quam. Proin ac tempus nisi. Fusce non dapibus neque, eget bibendum nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam dignissim dui dui, nec tempor mauris efficitur nec. Vivamus sed orci sed ipsum placerat ornare. Nullam scelerisque faucibus ipsum, tempus sagittis neque convallis id. Integer luctus mauris mattis elit pellentesque, vel consequat metus dignissim.</p>
            <p id="story">Praesent in nulla at nulla tristique ullamcorper non vitae lectus. Maecenas tincidunt nisi et enim elementum fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer feugiat justo eu pulvinar pretium. Nulla metus nisl, aliquet eget augue et, ultrices condimentum lacus. Nunc eget enim vitae purus accumsan placerat sit amet vel ligula. Suspendisse mattis a arcu gravida dictum. Donec mollis ornare bibendum. Proin ut convallis nisl.</p>
            
            <p id="quote">"A quote about being involved in your community, or something."</p>
            </div>
            <div className="aboutPhoto">
                <div id="photoDiv">
                    
                </div>
            </div>
         </div>
  )
}

export default About