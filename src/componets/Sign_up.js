import React from 'react';
function Add_user() {
    let a=document.getElementById("first_name").value;  
    let b=document.getElementById("last_name").value;
    let c=document.getElementById("Email").value;
    let d=document.getElementById("password").value;
    let e=document.getElementById("phonenumber").value;
      fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {'Content-Type': 'application/json'} ,
          body: JSON.stringify({first_name:a,last_name:b,email:c,password:d,PhoneNumber:e})
        }).then((response) => {
          return response.json()}).then((data) =>{
         console.log("Request complete! response:", data);
         
           localStorage.setItem('id', data._id)
           location.replace('/profile/'+data._id);
            
       });
  }

function Sign_up() {
    return (
       
            <div className="flex">

                <div className="sign_up">
                    <h1 style={{marginTop: "-35px", fontSize: "30px", marginLeft: "9rem"}}>
                        Sign_Up_Page
                    </h1>
                    <input id="first_name" type="text" placeholder="first_name" />
                    <input id="last_name" type="text" placeholder="last_name" />
                    <input id="Email" type="text" placeholder="Email" />
                    <input id="phonenumber" type="text" placeholder="phonenumber" />
                    <input id="password" type="text" placeholder="password" />
                    <input  onClick={Add_user} type="button" value="Submit" name="Submit" />
                </div>


            </div>

      
    );
}
export default Sign_up