
import React, { useState,useEffect } from 'react';

export default function Home() {
  const [Case, setCase] = useState([]);
  const [Showcase, setShowcase] = useState([]);
  useEffect(() => {
    
      getcases()
    
  }, [])
 async function getcases(){
   await fetch("http://localhost:4000/case", {
          method: "GET",
        }).then((response) => {
          return response.json()}).then((data) =>{
         console.log("Request complete! response:", data);
         let a=data
         setCase(a)
         console.log(Case)
         setcases()
         
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
  function setcases(){
    let cases = Case;
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
      show.push(`Case ${cases[i].case_name} hearing date - ${a}`)
      
    }
    setShowcase(show)
  }

  return (
    <div  >
      <div className="grid-container">
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
        <input type="text" id='caseSection'/>
        </div>
        <div>
        Case last date
        <input type="date" id='lastDate'/>
        </div>
        <button id='addcase' onClick={addcase}>addcase</button>

      </div>

      <div>
        {Showcase.map((val,i)=>{
     
      return  <div key={i}> {val} </div>
        })}
      </div>

    </div>
  );
}