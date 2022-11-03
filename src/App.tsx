import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './page/login/Login';
import WhomiFace from './page/login/WhomiFace';

function App() {
  return(
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/whoamiface" element={<WhomiFace/>}/>
      </Routes>
  )
}

export default App;
