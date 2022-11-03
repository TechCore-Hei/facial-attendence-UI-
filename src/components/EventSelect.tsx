import React from 'react';
import pict from '../img/logo.png';
import '../css/EventSelect.css';

export default function SelectEvent() {
  const cours = ' WEB1';
  const hours = '02-11-2022/8:00 - 10:00';
  const group = 'H1';

  return (
      <div className="container-event__list">
         <div className='navbar'>
            <img src={pict} alt="Logo de HEI " className="hei-logo" />
            <div className='search-event'>
               <input type="search" name="event" id="event"  className='search-event__input'/>
               <i className="fa fa-search search-event__icon"/>
            </div>
            <i className='fa fa-user'/>
         </div>

         <div className='event__container'>
            <div className='create-event'>
                  <label className='create-event__label'>Créer un évènement</label>
                  <i className='fa fa-plus user-details'/>
            </div>
            <div className="event__element">
               <p id="one">
                  <span> Cours: </span>
                  {cours}
               </p>
               <p id="hours">
                  <span>Heure de cours: </span>
                  {hours}
               </p>
               <p id="group">
                  <span> Groupe: </span>
                  {group}
               </p>
               <span className="status"> Terminée </span>
               <div className='event-option__container'>
                  <div className='event__option'>
                     <i className='fa fa-ellipsis-v'/>
                  </div>
                  <div className='event__option__details'>
                     <span>details</span>
                     <span>modifier</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
  );
}
