import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let htmlElement = []; 
  useEffect(()=> {
   
fetch('')
  .then((response)=> {
    createDiv(response)
  } )
   },[])
   let createDiv = (response) => {
     response.Data.forEach(element => {
          htmlElement.push(<div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>{Placeholder}</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">{element.Doc_Title}</text></svg>
          <div class="card-body">
     <p class="card-text">{element.Doc_Desc}</p>
          <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <a href={`http://localhost:3002/?id=${element.Doc_Name}`} target="_blank"><button type="button" class="btn btn-sm btn-outline-secondary">View</button></a>
          <a href="http://localhost:3001/" target="_blank"><button type="button" class="btn btn-sm btn-outline-secondary">Edit</button></a>
          </div>
          </div>
          </div>
          </div>
          </div>)
     });
   }
  return (
    <div >
      <div className = "row">
     {htmlElement}
     </div>
    </div>
  );
}

export default App;
