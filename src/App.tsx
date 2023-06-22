import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/home/Home';
import './colors.style.css';
import Chat from './page/chat/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;