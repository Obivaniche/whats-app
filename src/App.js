import React from 'react';
import './App.css';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <div className='app__body'>
        <Router>
          <Routes>

            <Route path='/app' element={[<Sidebar />,<Chat />]} />

            <Route path='/' />

          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
