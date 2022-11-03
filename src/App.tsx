import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Login from './page/login/Login';

function App() {
  return(
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
  )
=======
import './css/EventSelect.css';
import SelectEvent from './components/EventSelect';

function App() {
  return (
    <div className="App">
     <SelectEvent/>
    </div>
  );
>>>>>>> d46f40a (feat: create interface for event)
}

export default App;
