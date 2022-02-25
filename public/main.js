function Add_user() {
    let a=document.getElementById("first_name").value;  
    let b=document.getElementById("last_name").value;
    let c=document.getElementById("Email").value;
    let d=document.getElementById("password").value;
    let e=document.getElementById("phonenumber").value;
      fetch("/users", {
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
  
  function check_user() {
    let c=document.getElementById("Email").value;
    let k=document.getElementById("error");
    let d=document.getElementById("password").value;
      fetch("/login", {
          method: "POST",
          headers: {'Content-Type': 'application/json'} ,
          body: JSON.stringify({email:c,password:d})
        }).then((response) => {
           return response.json()}).then((data) =>{
          console.log("Request complete! response:", data);
          if (data.id=="1"){
            k.innerText="incorrect email" 
             
  
          }
          else if(data.id=="2"){
            k.innerText="incorrect password"
  
  
  
          }
          else if(data.id=="0"){
            localStorage.setItem('id', data.user._id)
            location.replace('/profile/'+data.user._id);
  
           
  
            
          }
        });
  }
  
  