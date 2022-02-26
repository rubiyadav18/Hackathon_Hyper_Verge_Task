import React from 'react';
import { useState } from 'react';
import axios from "axios"
// import App from '../App';

function Register() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

   const firstNameHandler=(e)=>{setFirstName(e.target.value)}
   const lastNameHandler=(e)=>{setLastName(e.target.value)}
   const mobileNumberHandler=(e)=>{setMobileNumber(e.target.value)}
   const emailHandler=(e)=>{setEmail(e.target.value)}
   const passwordHandler=(e)=>{setPassword(e.target.value)}

  const joinIn = (e)=>{
    e.preventDefault()
    const userData = {"firstName":firstName, "lastName":lastName, "mobileNumber":mobileNumber, "email":email, "password":password}
    axios.post("http://localhost:4000/registration/user", userData)
    .then(response=>{localStorage.setItem("email",response.data.email)
    window.location.replace("/" );}

    )
    
  }
  return (
    <div className='coler'>
      <div className='header'>
      <div className='heading'>
            <img className='emage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/International_Criminal_Court_logo.svg/1186px-International_Criminal_Court_logo.svg.png" all="" width="90px" height="80px"/>
         <h3 className='court_case'>
         COURT CASE CATEGORIZIIG
             </h3> 

        </div>
        <div className='heading'>
        

        </div>
        <div>
        <a href='http://localhost:3000/login'>Login</a>

        </div>

    
    </div>
  <div className='register res'>
     <h5 className='sign_up_heading'>Sign up Form</h5>
     <div>
       <form className='signUp'>
         <input className='input_box1'   type="text" placeholder='First Name' value={firstName} onChange={firstNameHandler}></input>
         <input className='input_box1' type="text" placeholder='Last Name' value={lastName} onChange={lastNameHandler}></input>
         <input className='input_box1'  type="text" placeholder='Mobile Number' value={mobileNumber} onChange={mobileNumberHandler}></input>
         <input className='input_box1'   type="email" placeholder='Email' value={email} onChange={emailHandler}></input>
         <input type="password" placeholder='Password' value={password} onChange={passwordHandler}></input>
        <div>
        <button className='sign_up_button bt2'  type='Submit' onClick={joinIn}>Sign up</button>
          </div> 
         
       </form>
     </div>
  </div>
    </div>
  );
};

export default Register;