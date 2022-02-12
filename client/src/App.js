import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import Group from './pages/group/Group';
import Home from './pages/Home';
import Explore from './pages/explore/Explore';
//import Button from './components/Button'

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="group" element={<Group />} />
          <Route path="explore" element={<Explore />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
