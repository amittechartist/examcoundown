import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import List from './pages/List';
import Questioins from './pages/Questioins';
import { appurl } from './Helper';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={appurl + 'view/:name/:date'} element={<Home />} />
          <Route path={appurl} element={<List />} />
          <Route path={appurl + 'questioins'} element={<Questioins />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
