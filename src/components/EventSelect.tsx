import React from 'react';
import pict from '../img/logo.png';
import '../css/EventSelect.css';
import { useState } from 'react';
import Modal from './modal/Modal';


export default function SelectEvent() {
  const cours = ' WEB1';
  const hours = '02-11-2022/8:00 - 10:00';
  const group = 'H1';
  const [ isActive , setIsActive ] = useState<boolean>(false)
  const [ displayDetails , setDisplayDetails ] = useState<boolean>(false)

  const handleModal = (): void => {
      setIsActive(!isActive)
    setDisplayDetails(false)
  } 

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
                  <div className='event__option' onClick={()=> setDisplayDetails(!displayDetails) } >
                     <i className='fa fa-ellipsis-v'/>
                  </div>
                  <div className={`${displayDetails ? 'event__option__details__shown' : 'event__option__details'}`}>
                     <span onClick={()=> { handleModal() }} >Supprimer</span>
                     <span >Modifier</span>
                     <span onClick={()=> setDisplayDetails(!displayDetails) }>Terminer</span>
                  </div>
               </div>

              <Modal handleModal={()=>handleModal()} isActive={isActive} >
                  <h2> Are you sure to delete ? </h2>
                   <div className='delete_confirmation'>
                      <span>Delete</span>
                      <span>Cancel</span>
                   </div>
              </Modal>

            </div>
         </div>
      </div>
  );
}
