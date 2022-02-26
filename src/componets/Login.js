
import React from 'react';
// import "./Login.css"
import { useState } from "react";
import axios from "axios";

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogIn] = useState("")

    const emailHandler = e => {
        setEmail(e.target.value)
    }

    const passwordHandler = e => {
        setPassword(e.target.value)
    }

    const loginFormSubmit = ((e)=>{
        e.preventDefault()

    // if (email === "" || password === "") {
    //     setError("Fields are required");
    //     return;
    //   }
    const userData = { "email": email, "password": password }
        axios.post("http://localhost:4000/login/user", userData)
        .then((res)=>{
            if (res.data.password === password){
                setLogIn("Logged in")
                localStorage.setItem("email",res.data.email)
                window.location.replace("/" );
                
            }
            else if (res.data.password !== password){
                setLogIn("email or password is wrong!")
            }

        })
    })
   
    return  ( <div>
           <div className='header'>
        <div className='heading'>
            <img className='emage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/International_Criminal_Court_logo.svg/1186px-International_Criminal_Court_logo.svg.png" all="" width="90px" height="80px"/>
         <h3 className='court_case cort1' >
         COURT CASE CATEGORIZING
             </h3> 

        </div>
        <div>
        <a href='http://localhost:3000/registration'>Sign up</a>

        </div>

      </div>

        <div className="login_super"> 

        
        <div className='login'>
            <h5 className='login_form'>Login form</h5>
            <div>
                <form className='loginForm'>
                    <input type="text" placeholder='Email id'
                        value={email}
                        onChange={emailHandler}
                    >
                    </input>
                    <input className='pasword' type="password" placeholder='password'
                        value={password}
                        onChange={passwordHandler}
                    >
                    </input>
                    <button className='login_buttton' type='submit'
                        onClick={loginFormSubmit}
                    >
                        Log In
                    </button>
                </form>
                {login}
            </div>
        </div>
        </div>
        </div>
    )

};

export default Login;
  