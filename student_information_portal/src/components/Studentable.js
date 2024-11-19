import React from 'react'
import '../assest/compo.css'
import Profile from './Profile'
import {useState} from 'react'



export default function Studentable(props) {
  const [stu,setStu]=useState(props.students[0]);
  return (
    <div>
    <table border='1'>
        <tr>
            <td> First name </td>
            <td> Last name </td>
            <td> Course </td>
            <td> Country</td>
            <td> Profile</td>
            </tr>
            {
              props.students.map(students=>
                <tr>
                  <td>{students.firstName}</td>
                  <td>{students.lastName}</td>
                  <td>{students.course}</td>
                  <td>{students.address.country}</td>
                  <td> <button id={students.studentId} onClick={()=>setStu(students)} >View</button></td>
                </tr>
              )
            }
    </table>
    
    <div className="rightDiv">
            <Profile stu={stu}/>
    </div>
    </div>
  )
}
