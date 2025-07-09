//! SiteTitle
// Branding, logo, identity, etc
// ? Our own design?
// Images stored in assets/images and exported with assets/imageMap.js

//!Nav Bar
// includes log in/out

//style is in App.css

import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>
        <div id="header">
            <h1 id="smallCap">The Pantry Door</h1>
          </div>
        <div id="nav">
             <ul class="nav-ul">
                   <li><a href="/findabank" class="nav-link">Find a Bank</a></li>
                   <li><a href="/getinvolved" class="nav-link">Get Involved</a></li>
                   <li><a href="/about" class="nav-link">About</a></li>
                   <li><a href="/contact" class="nav-link">Contact</a></li>
            </ul>
         </div>
         </div>
  )
}

export default Header