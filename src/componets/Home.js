import React, { useState,useEffect } from 'react';

export default function Home() {
  const [ViewCase, setviewCase] = useState([]);
  const [Showcase, setShowcase] = useState([]);
  useEffect(() => {
    if(localStorage.getItem("email")===""){
      location.replace("/login")
    }
    
      getcases()
    
  }, [])
  function deletecase(id){
    fetch("http://localhost:4000/case/"+id, {
      method: "DELETE",
    }).then((response) => {
      return response.json()}).then((data) =>{
     console.log("Request complete! response:", data);
     getcases()
     
   });

  }
   async function viewcase(id){
   await fetch("http://localhost:4000/case/", {
      method: "GET",
    }).then((response) => {
      return response.json()}).then((data) =>{
     
        for(var i = 0; i < data.length; i++){

          if (data[i]._id ===id){
            setviewCase(data[i])
          }

        }console.log(ViewCase)


   });
   var modal = document.getElementById("myModal");
   
   modal.style.display = "block";
  
  }

  function close(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    
  }
  function logout(){
    localStorage.setItem("email","")
    location.reload()
  }
 async function getcases(){
   await fetch("http://localhost:4000/case", {
          method: "GET",
        }).then((response) => {
          return response.json()}).then((data) =>{
         console.log("Request complete! response:", data);
         let cases=data
         for(var i = 0; i < cases.length; i++){
          for(var j = 0; j < ( cases.length - i -1 ); j++){
            if((cases[j].last_Date) >  (cases[j+1].last_Date)){
              var temp = cases[j]
              cases[j] = cases[j + 1]
              cases[j+1] = temp
            }
          }
        }
        let show =[]
        for (let i = 0; i < cases.length; i++) {
          let a=new Date(new Date().getTime() + ((i +1) * (24 * 60 * 60 * 1000)))
          show.push([`Case ${cases[i].case_name} hearing date - ${a}`,cases[i]._id])
          
        }
        setShowcase(show)

         
       });
  }
  function addcase(){
    let caseNumber=document.getElementById('caseNumber').value;
    let caseDate=document.getElementById('caseDate').value;
    let caseSection=document.getElementById('caseSection').value;
    let lastDate=document.getElementById('lastDate').value;
  
    let array = caseSection.split(" ")
 
   let cases={
      caseNumber:caseNumber,
      caseDate:caseDate,
      caseSection:array,
      lastDate:lastDate
    }
    fetch("http://localhost:4000/case", {
          method: "POST",
          headers: {'Content-Type': 'application/json'} ,
          body: JSON.stringify(cases)
        }).then((response) => {
          return response.json()}).then((data) =>{
         console.log("Request complete! response:", data);
         getcases()
         
       });
  
  }
  
  return (

    <div className='case_left'>
      <div className='header'>
        <div className='heading'>
        <img className='emage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/International_Criminal_Court_logo.svg/1186px-International_Criminal_Court_logo.svg.png" all="" width="90px" height="80px"/>
         <h3 className='court_case cort1' >
         COURT CASE CATEGORIZING
             </h3> 
          {/* COURT CASE */}

        </div>
        <div >
          <a onClick={logout} >logout</a>
        </div>
       
      </div>
      
      <div className="grid-container">

      <div className="container">
        <h1>Court case</h1>
        <div>
          Case name
        <input type="text" id='caseNumber'/>
        </div>
        <div>
          Case Start date
        <input type="date" id='caseDate'/>
        </div>
        <div>
          Case section
        {/* <input type="text" id='caseSection'/> */}
        <select name="cars" id="caseSection">
        <option value=""></option>
        <option value="378">378</option>
        <option value="400">400</option>
        <option value="301">301</option>
        <option value="0101">0101</option>
        <option value="0102">0102</option>
        <option value="301">301</option>
        <option value="301">302</option>

  </select>

        </div>
        <div>
        Case last date
        <input type="date" id='lastDate'/>
        </div>
        <button id='addcase' onClick={addcase}>addcase</button>
      </div>
    </div>

      <div className="cases">
        {Showcase.map((val,i)=>{
     
      return  (<div className='singl' key={i}> {val[0]}  <button className="deletecase" onClick ={() =>{
        deletecase(val[1])

      }} >delete case</button>
      <button className="viewcase" onClick ={() =>{
        viewcase(val[1])

      }} >view case</button>
      </div> )
      
        })}
      </div>
      <div id="myModal" className="modal">


      <div className="modal-content">
        <span className='close' onClick={close}>&times;</span>
        <div>
            <div>Case name: {ViewCase.case_name}</div>
           <div> Case Date: {ViewCase.case_Date}</div>
           <div>
           Case Section: {ViewCase.case_section}
             </div> 
             <div>
             Case last Date: {ViewCase.last_Date}
               </div>
          </div> 
      </div>

    </div>
      {/* <div>
        {ViewCase.case_name}
        {ViewCase.case_Date}
        {ViewCase.case_section}
        {ViewCase. last_Date}
      </div>  */}


    </div>
  );
}