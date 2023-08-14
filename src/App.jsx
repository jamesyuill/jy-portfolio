import React, { Suspense, useRef, useState } from 'react';
import '../src/App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import TestPage from './pages/TestPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testpage" element={<TestPage />} />
      </Routes>
    </>
  );
}

export default App;
