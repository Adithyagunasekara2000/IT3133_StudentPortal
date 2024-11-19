import React from 'react'
import {students} from '../data/StudentsDb'
export default function Studentable() {
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
              students.map(students=>
                <tr>
                  <td>{students.firstName}</td>
                  <td>{students.lastName}</td>
                  <td>{students.course}</td>
                  <td>{students.address.country}</td>
                  <td> <button >View</button></td>
                </tr>
              )
            }
    </table>
    </div>
  )
}
