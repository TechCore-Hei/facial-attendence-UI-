import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import EventSelect from './components/EventSelect';
import Facial from './page/facial/Facial';
import Login from './page/login/Login';

function App() {
  return(
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/facial" element={<Facial/>}/>
        <Route path="/eventSelect" element={<EventSelect/>}/>
      </Routes>
  )

}

export default App;
