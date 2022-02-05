import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Group from './pages/Group';
import Home from './pages/Home';
//import Button from './components/Button'

function App() {
  return (
    <BrowserRouter>
    {/* nav would go right here */}
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="group" element={<Group />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
