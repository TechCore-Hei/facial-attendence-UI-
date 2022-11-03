import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Facial from './page/facial/Facial';
import Login from './page/login/Login';

function App() {
  return(
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/facial" element={<Facial/>}/>
      </Routes>
  )
}

export default App;
