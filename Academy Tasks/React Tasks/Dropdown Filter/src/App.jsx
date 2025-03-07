import React from 'react'
import { useState } from 'react'
import './App.css'

const studentData = [
  { id: 1, name: "Aarav", age: 18, grade: "A", city: "Mumbai" },
  { id: 2, name: "Bhavya", age: 19, grade: "B", city: "Delhi" },
  { id: 3, name: "Chirag", age: 17, grade: "A", city: "Bangalore" },
  { id: 4, name: "Divya", age: 18, grade: "C", city: "Chennai" },
  { id: 5, name: "Eshwar", age: 20, grade: "B", city: "Kolkata" },
  { id: 6, name: "Faisal", age: 21, grade: "A", city: "Hyderabad" },
  { id: 7, name: "Gauri", age: 19, grade: "C", city: "Pune" },
  { id: 8, name: "Harsh", age: 18, grade: "B", city: "Ahmedabad" },
  { id: 9, name: "Ishika", age: 20, grade: "A", city: "Jaipur" },
  { id: 10, name: "Jatin", age: 17, grade: "C", city: "Lucknow" },
  { id: 11, name: "Kiran", age: 18, grade: "B", city: "Chandigarh" },
  { id: 12, name: "Lakshmi", age: 19, grade: "A", city: "Bhopal" },
  { id: 13, name: "Manoj", age: 21, grade: "C", city: "Indore" },
  { id: 14, name: "Neha", age: 17, grade: "B", city: "Patna" },
  { id: 15, name: "Omkar", age: 20, grade: "A", city: "Thane" },
  { id: 16, name: "Pranav", age: 19, grade: "C", city: "Nashik" },
  { id: 17, name: "Quincy", age: 18, grade: "B", city: "Vadodara" },
  { id: 18, name: "Riya", age: 21, grade: "A", city: "Nagpur" },
  { id: 19, name: "Sahil", age: 17, grade: "C", city: "Coimbatore" },
  { id: 20, name: "Tanvi", age: 19, grade: "B", city: "Mysore" },
  { id: 21, name: "Ujjwal", age: 20, grade: "A", city: "Guwahati" },
  { id: 22, name: "Varsha", age: 18, grade: "C", city: "Rajkot" },
  { id: 23, name: "Waseem", age: 19, grade: "B", city: "Jodhpur" },
  { id: 24, name: "Xavier", age: 21, grade: "A", city: "Kochi" },
  { id: 25, name: "Yash", age: 17, grade: "C", city: "Vijayawada" },
  { id: 26, name: "Zoya", age: 20, grade: "B", city: "Gwalior" },
  { id: 27, name: "Ankita", age: 19, grade: "A", city: "Agra" },
  { id: 28, name: "Bharat", age: 18, grade: "C", city: "Hubli" },
  { id: 29, name: "Charu", age: 21, grade: "B", city: "Aurangabad" },
  { id: 30, name: "Deepak", age: 17, grade: "A", city: "Solapur" },
  { id: 31, name: "Esha", age: 20, grade: "C", city: "Udaipur" },
  { id: 32, name: "Farhan", age: 19, grade: "B", city: "Srinagar" },
  { id: 33, name: "Gagan", age: 18, grade: "A", city: "Amritsar" },
  { id: 34, name: "Hina", age: 21, grade: "C", city: "Meerut" },
  { id: 35, name: "Irfan", age: 17, grade: "B", city: "Vellore" },
  { id: 36, name: "Jaya", age: 20, grade: "A", city: "Kurnool" },
  { id: 37, name: "Kishore", age: 19, grade: "C", city: "Salem" },
  { id: 38, name: "Lalit", age: 18, grade: "B", city: "Warangal" },
  { id: 39, name: "Madhav", age: 21, grade: "A", city: "Bareilly" },
  { id: 40, name: "Nidhi", age: 17, grade: "C", city: "Jhansi" },
  { id: 41, name: "Omar", age: 20, grade: "B", city: "Gorakhpur" },
  { id: 42, name: "Parvati", age: 19, grade: "A", city: "Tiruchirappalli" },
  { id: 43, name: "Qasim", age: 18, grade: "C", city: "Kottayam" },
  { id: 44, name: "Raghav", age: 21, grade: "B", city: "Saharanpur" },
  { id: 45, name: "Sneha", age: 17, grade: "A", city: "Guntur" },
  { id: 46, name: "Tarun", age: 20, grade: "C", city: "Anantapur" },
  { id: 47, name: "Usha", age: 19, grade: "B", city: "Durgapur" },
  { id: 48, name: "Vikram", age: 18, grade: "A", city: "Shimoga" },
  { id: 49, name: "Wasim", age: 21, grade: "C", city: "Nanded" },
  { id: 50, name: "Yamini", age: 17, grade: "B", city: "Ratnagiri" },
];


const App = () => {
  const dropvalue = [5, 10, 25, 50]

  let [rowsvalue, setRowsvalue] = useState(5);
  const changerow = (event) => {
    console.log(event.target.value)
    setRowsvalue(rowsvalue = event.target.value)
  }

  return (
    <div className='bodydiv'>
      <div className='dropdownbox'>
        <select onChange={changerow}>
          {
            dropvalue.map((row) => (
              <option value={row}> {row} </option>
            ))
          }
        </select>
      </div>

      <table>
        <thead>
          <tr>
            {
              Object.keys(studentData[0]).map((header) => (
                <th>{header.toUpperCase()}</th>
              ))}
          </tr>
        </thead>

        <tbody>
          {
            studentData.slice(0, rowsvalue).map((stud) => (
              <tr>
                {
                  Object.values(stud).map((student) => (
                    <td>{student}</td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default App