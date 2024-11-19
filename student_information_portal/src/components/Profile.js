import React from 'react'

export default function Profle(props) {
  console.log(props.stu)
  return (
    <div>
      <table border='1'>
        <tr>
            <td rowspan={7}>
              <img className="profile" src={require('../assest/image/'+props.stu.profilePic)} alt="profile"/>
            </td>
            <td>{props.stu.studentId}</td>
        </tr>
        <tr>
                    <td>Full name: {props.stu.firstName+ " " +props.stu.lastName}</td>
                </tr>
                <tr>
                    <td>Age: {props.stu.age}</td>
                </tr>
                <tr>
                    <td>Course: {props.stu.course}</td>
                </tr>
                <tr>
                    <td>Address: {props.stu.address.city+","+props.stu.address.country}</td>
                </tr>
                <tr>
                    <td>Skills: {props.stu.skills.map(skill=>skill+=", ")}</td>
                </tr>
      </table>
    </div>
  )
}
