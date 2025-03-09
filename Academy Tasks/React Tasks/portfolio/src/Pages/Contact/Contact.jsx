import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contactdiv'>
      <h1>Contact</h1>
      <p>Let’s connect & innovate together!</p>
      <table>
        <tr>
          <td><a className='insta' href="https://www.instagram.com/abijith.s_/" target='_blank'><i class="bi bi-instagram"></i><span>&ensp; Instagram</span></a></td> <td><a className='linkedin' href="https://www.linkedin.com/in/abijith-s-offl/" target="_blank"><i className="bi bi-linkedin"></i><span>&ensp; LinkedIn</span></a></td>
        </tr>
        <tr>
          <td><a className='mail' href="mailto:abijithsofficial@gmail.com"><i class="bi bi-envelope"></i><span>&ensp; abijithsofficial@gmail.com</span></a></td> <td><a className='mobno' href="tel:+919489848024"><i class="bi bi-telephone"></i><span>&ensp; +91 94898 48025</span></a></td>
        </tr>
      </table>
    </div>
  )
}

export default Contact