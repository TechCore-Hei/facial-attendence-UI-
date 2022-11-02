import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './page/login/Login';

function App() {
  return(
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
  )
}

export default App;
