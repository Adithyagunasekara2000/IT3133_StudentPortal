import React from 'react'
import '../assest/compo.css'
import Profile from './Profile'
import {useState} from 'react'



export default function Studentable(props) {
  const [stu,setStu]=useState(props.students[0]);
  const [fontSize, setFontSize] = useState('medium');

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };
  return (
    <div className={`font-${fontSize}`}>
      <div className="font-size-controls">
    <div>
      <h6> Font Size <
      <button onClick={() => handleFontSizeChange('small')}>S</button>
      <button onClick={() => handleFontSizeChange('medium')}>M</button>
      <button onClick={() => handleFontSizeChange('large')}>L</button>
   
    </div>
    </div>
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
