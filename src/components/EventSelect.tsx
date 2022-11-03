import React from "react";
import pict from '../img/logo.png' ;
import './../css/EventSelect.css'

export default function SelectEvent(){
   const cours = " WEB1";
   const hours = "02-11-2022/8:00 - 10:00";
   const group = "H1";

   return(
<div className="row">
   <img src={pict} alt="Logo de HEI " className="hei"/>
   <div id="eventsearch">
      <input type="search" name="event" id="event" />
      <i className="fa fa-search"></i>
   </div>
   <div id="detail"> 
      <div className="course-details">
         <p id="one"><span> Cours: </span>{cours}</p>
         <p id="hours"><span>Heure de cours: </span>{hours}</p>
         <p id="group"><span> Groupe: </span>{group}</p>
         <h2 className="status"> Terminée  </h2> 
      </div>
   </div>
</div> 
   )

}