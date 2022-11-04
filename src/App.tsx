import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Content from './CreatEvent/Content';
import Login from './page/login/Login';
import WhomiFace from './page/login/WhomiFace';

function App() {
  return(
      <Routes>
        <Route path="/" element={<Navigate to="/login"/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/whoamiface" element={<WhomiFace/>}/>
        <Route path="/event" element={<Content/>}/>
      </Routes>
  )
}

export default App;
