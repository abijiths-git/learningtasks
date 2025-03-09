import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='aboutpage'>
      <h1>About</h1>
      <h2>Carrer Objective</h2>
      <p>I consider myself as a responsible and orderly person. I’m looking for my first work experience to obtain a challenging career in a reputable organization where I can utilize my technical skills and grow both professionally and personally.</p>

      <h2>Education</h2>
      <table className='educationtable'>
        <thead>
          <tr>
            <th>Course</th> <th>Institution</th> <th>Percentage & CGPA</th> <th>Graduated Month & Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>B.E in Mechanical Engineering</td> <td>Hindusthan College of Engineering and Technology, Coimbatore</td> <td>9</td> <td>Present</td>
          </tr>
          <tr>
            <td>Class XII (State Board)</td> <td>Devanga Higher Secondary School, Coimbatore</td> <td>88% </td> <td>May 2021</td>
          </tr>
          <tr>
            <td>Class X (State Board) </td> <td>Corporation High School, Coimbatore</td> <td>87%</td> <td>Mar 2019</td>
          </tr>
        </tbody>
      </table>

      <h2>Languages</h2>
      <table class="languagetable">
        <thead>
          <tr>
            <th>Language</th> <th>Speak</th> <th>Read</th> <th>Write</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tamil</td> <td className='tick'>☑</td> <td className='tick'>☑</td> <td className='tick'>☑</td>
          </tr>
          <tr>
            <td>Malayalam</td> <td className='tick'>☑</td> <td className='tick'></td> <td className='tick'></td>
          </tr>
          <tr>
            <td>English</td> <td className='tick'>☑</td> <td className='tick'>☑</td> <td className='tick'>☑</td>
          </tr>
        </tbody>
      </table>











    </div>
  )
}

export default About