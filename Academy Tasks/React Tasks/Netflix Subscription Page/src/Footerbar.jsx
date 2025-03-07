import React from 'react'
import "./index.css"

function Footerbar() {
  return (
    <div className='footer'>
        <h1>Questions? Call 000-800-919-1743</h1>
        <ul>
            <li>FAQ</li>
            <li>HelpCentre</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
        </ul>
        <select>
            <i class="bi bi-globe"></i>
            <i class="far fa-globe"></i>
            <option>English</option>
            <option>हिन्दी</option>
        </select>
    </div>
  )
}

export default Footerbar